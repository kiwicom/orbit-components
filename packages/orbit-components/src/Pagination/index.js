// @flow
import * as React from "react";

import useMediaQuery from "../hooks/useMediaQuery";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { MAXIMUM_PAGES, SIZES } from "./consts";
import Pages from "./components/Pages";
import CompactPages from "./components/CompactPages";
import ActiveButton from "./components/ActiveButton";
import Translate from "../Translate";
import useTranslate from "../hooks/useTranslate";

import type { Props } from ".";

const handlePageChange = (onPageChange, pageCount) => nextPageIndex => {
  if (onPageChange && nextPageIndex <= pageCount && nextPageIndex >= 0) {
    onPageChange(nextPageIndex);
  }
};

const Pagination = ({
  pageCount,
  selectedPage = 1,
  onPageChange,
  dataTest,
  hideLabels = true,
  size = SIZES.NORMAL,
}: Props): React.Node => {
  const pageChanged = handlePageChange(onPageChange, pageCount);
  const { isTablet } = useMediaQuery();
  const translate = useTranslate();

  return (
    <Stack spacing="XXSmall" align="center" grow={false} shrink dataTest={dataTest} basis="auto">
      {!isTablet ? (
        <>
          <ButtonLink
            onClick={() => pageChanged(selectedPage - 1)}
            iconLeft={<ChevronLeft />}
            type="secondary"
            title={translate("pagination_label_prev")}
            size={size}
            disabled={selectedPage <= 1}
          />
          <ActiveButton transparent size={size}>
            {selectedPage} of {pageCount}
          </ActiveButton>
          <ButtonLink
            onClick={() => pageChanged(selectedPage + 1)}
            iconLeft={<ChevronRight />}
            type="secondary"
            title={translate("pagination_label_next")}
            size={size}
            disabled={pageCount <= selectedPage}
          />
        </>
      ) : (
        <>
          <ButtonLink
            onClick={() => pageChanged(selectedPage - 1)}
            iconLeft={<ChevronLeft />}
            type="secondary"
            title={hideLabels ? translate("pagination_label_prev") : undefined}
            size={size}
            disabled={selectedPage <= 1}
          >
            {!hideLabels && <Translate tKey="pagination_label_prev" />}
          </ButtonLink>
          <Stack inline grow={false} spacing="XXSmall" align="center">
            {pageCount <= MAXIMUM_PAGES ? (
              <Pages
                pageCount={pageCount}
                selectedPage={selectedPage}
                onPageChange={onPageChange}
                size={size}
              />
            ) : (
              <CompactPages
                pageCount={pageCount}
                selectedPage={selectedPage}
                onPageChange={onPageChange}
                size={size}
              />
            )}
          </Stack>
          <ButtonLink
            onClick={() => pageChanged(selectedPage + 1)}
            iconRight={!hideLabels && <ChevronRight />}
            iconLeft={hideLabels && <ChevronRight />}
            type="secondary"
            title={hideLabels ? translate("pagination_label_next") : undefined}
            size={size}
            disabled={pageCount <= selectedPage}
          >
            {!hideLabels && <Translate tKey="pagination_label_next" />}
          </ButtonLink>
        </>
      )}
    </Stack>
  );
};

export default Pagination;
