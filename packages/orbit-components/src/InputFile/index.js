// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import FormLabel from "../FormLabel";
import FormFeedback from "../FormFeedback";
import Attachment from "../icons/Attachment";
import CloseCircle from "../icons/CloseCircle";
import { rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../utils/mediaQuery";

import type { Props } from ".";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  display: block;
  position: relative;
  width: 100%;
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Field.defaultProps = {
  theme: defaultTheme,
};

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => rtlSpacing(theme.orbit.paddingInputFile)};
  height: ${({ theme }) => theme.orbit.heightInputNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ theme }) => theme.backgroundInput};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  border-radius: 6px;
  ${mq.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.paletteRedNormalHover : theme.orbit.borderColorInputHover
        }`};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
FakeInput.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

  &:focus ~ ${FakeInput} {
    ${formElementFocus}
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

const getFileInputColor = ({ error, fileName }, theme) => {
  if (error) {
    return theme.orbit.paletteRedNormal;
  }
  if (fileName) {
    return theme.orbit.colorTextInput;
  }
  return theme.orbit.paletteInkLight;
};

const StyledFileInput = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ error, fileName, theme }) => getFileInputColor({ error, fileName }, theme)};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFileInput.defaultProps = {
  theme: defaultTheme,
};

const InputFile: React.AbstractComponent<Props, HTMLInputElement> = React.forwardRef<
  Props,
  HTMLInputElement,
>(
  (
    {
      placeholder = "No file selected",
      buttonLabel = "Select file",
      onRemoveFile,
      dataTest,
      spaceAfter,
      name,
      error,
      required,
      help,
      onChange,
      onFocus,
      onBlur,
      allowedFileTypes,
      tabIndex,
      label,
      fileName,
    },
    ref,
  ) => {
    return (
      <Field spaceAfter={spaceAfter}>
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(Boolean(error))}
          type="file"
          name={name}
          error={error}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          accept={allowedFileTypes}
          aria-required={required}
          ref={ref}
          tabIndex={tabIndex}
        />
        {label && (
          <FormLabel filled={Boolean(fileName)} required={required}>
            {label}
          </FormLabel>
        )}
        <FakeInput error={error}>
          {/* <button> doesn't trigger the input so we're setting the tag to <div> */}
          <Button
            type="secondary"
            role="button"
            size="small"
            iconLeft={<Attachment />}
            asComponent="div"
          >
            {buttonLabel}
          </Button>
          <StyledFileInput fileName={fileName} error={error}>
            {fileName || placeholder}
          </StyledFileInput>
          {fileName && (
            <ButtonLink
              type="primary"
              compact
              iconLeft={<CloseCircle ariaLabel="remove" color="secondary" />}
              onClick={ev => {
                ev.preventDefault();
                if (onRemoveFile) {
                  onRemoveFile();
                }
              }}
            />
          )}
        </FakeInput>
        <FormFeedback error={error} help={help} />
      </Field>
    );
  },
);

InputFile.displayName = "InputFile";

export default InputFile;
