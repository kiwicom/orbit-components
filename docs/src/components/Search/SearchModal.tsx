import React from "react";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { filter } from "fuzzaldrin-plus";
import { useCombobox } from "downshift";
import {
  Portal,
  ModalHeader,
  ModalSection,
  Text,
  mediaQueries,
  useMediaQuery,
} from "@kiwicom/orbit-components";
import { Search as SearchIcon, ChevronRight } from "@kiwicom/orbit-components/icons";

import Modal from "../Modal";
import StyledInputContainer from "./primitives/StyledInputContainer";
import StyledPrefix from "./primitives/StyledPrefix";
import StyledInput from "./primitives/StyledInput";
import { StyledMenu, StyledMenuItem, StyledMenuItemTitle } from "./primitives/StyledMenu";

interface Props {
  onClose: () => void;
}

interface QueryResponse {
  allMdx: {
    nodes: Array<{
      fields: {
        slug: string;
        trail: Array<{
          name: string;
        }>;
      };
      frontmatter: {
        title: string;
        description: string;
      };
    }>;
  };
}

interface SearchResult {
  name: string;
  breadcrumbs: string[];
  description: string;
  path: string;
}

const StyledModalWrapper = styled.div`
  /* align modal to the top */
  > * > * > * {
    height: 100%;
  }
  ${mediaQueries.largeMobile(css`
    > * > * {
      align-items: flex-start;
    }
    > * > * > * {
      height: auto;
    }
  `)}
`;
const StyledSearchWrapper = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export default function SearchModal({ onClose }: Props) {
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const data: QueryResponse = useStaticQuery(graphql`
    query Documents {
      allMdx(filter: { fileAbsolutePath: { regex: "/documentation/" } }) {
        nodes {
          fields {
            slug
            trail {
              name
            }
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);
  const documents = React.useMemo<SearchResult[]>(
    () =>
      data.allMdx.nodes.map(node => {
        console.log(node.fields);
        const breadcrumbs = Array.isArray(node.fields.trail)
          ? node.fields.trail.map(({ name }) => name)
          : [];
        return {
          name: breadcrumbs.join(" "),
          breadcrumbs,
          description: node.frontmatter.description,
          path: node.fields.slug,
        };
      }),
    [data],
  );

  const { isTablet } = useMediaQuery();
  // so it doesn't cause horizontal overflow
  const placeholder = isTablet ? "Search…" : "Search for components, foundation…";

  function getItemTitle(item: SearchResult): string {
    return item.breadcrumbs.join(" / ");
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox<SearchResult>({
    items: results,
    itemToString: item => (item ? getItemTitle(item) : ""),
    defaultHighlightedIndex: 0,
    onInputValueChange: changes => {
      setResults(filter(documents, changes.inputValue, { key: "name" }));
    },
    onSelectedItemChange: async changes => {
      if (changes.selectedItem) {
        await navigate(changes.selectedItem.path);
        onClose();
      }
    },
  });

  // autofocus
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Portal>
      <StyledModalWrapper>
        <Modal
          // the search field will be autofocused
          autoFocus={false}
          onClose={onClose}
        >
          <ModalHeader title="What are you looking for?" />
          <ModalSection>
            <StyledSearchWrapper>
              <StyledInputContainer {...getComboboxProps()}>
                <StyledPrefix>
                  <SearchIcon />
                </StyledPrefix>

                <StyledInput
                  {...getInputProps({
                    ref: inputRef,
                    type: "search",
                    placeholder,
                  })}
                />
              </StyledInputContainer>
            </StyledSearchWrapper>
            <div
              css={css`
                position: relative;
                margin-left: 1.5rem;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  top: -0.5rem;
                  right: 0;
                  left: 0;
                `}
              >
                {isOpen && (
                  <Text as="p">
                    We found <b>{results.length} results</b> matching your search
                  </Text>
                )}
              </div>
            </div>
            <StyledMenu {...getMenuProps()} hasResults={isOpen && results.length > 0}>
              {isOpen && (
                <>
                  {results.map((item, itemIndex) => (
                    <StyledMenuItem key={item.path} {...getItemProps({ item, index: itemIndex })}>
                      <div>
                        <StyledMenuItemTitle>{getItemTitle(item)}</StyledMenuItemTitle>
                        <div>{item.description}</div>
                      </div>
                      <ChevronRight size="medium" />
                    </StyledMenuItem>
                  ))}
                </>
              )}
            </StyledMenu>
          </ModalSection>
        </Modal>
      </StyledModalWrapper>
    </Portal>
  );
}
