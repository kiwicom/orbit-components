// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, array, select, boolean } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputFile from ".";

export default {
  title: "InputFile",
};

export const Default = (): React.Node => {
  const label = text("Label", "Label");
  return (
    <InputFile
      label={label}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

Default.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const FilledWithFile = (): React.Node => {
  const label = text("Label", "Label");
  const fileName = text("fileName", "file.png");

  return (
    <InputFile
      label={label}
      fileName={fileName}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

FilledWithFile.story = {
  name: "Filled with file",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithHelp = (): React.Node => {
  const label = text("Label", "Label");

  return (
    <InputFile
      label={label}
      help={
        <div>
          Supported files: <strong>PNG, JPG, PDF</strong>
        </div>
      }
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithError = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Error message (explain how to solve it)");

  return (
    <InputFile
      label={label}
      error={error}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
    />
  );
};

WithError.story = {
  name: "With error",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const label = text("Label", "Label");
  const buttonLabel = text("buttonLabel", "Please select file");
  const name = text("Name", "fileInput");
  const placeholder = text("Placeholder", "No file has been selected yet");
  const fileName = text("fileName", undefined);
  const error = text("Error", "No file has been selected yet");
  const help = text("Help", undefined);
  const allowedFileTypes = array("allowedFileTypes", ["media/*", "image/*"]);
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const required = boolean("required", false);

  return (
    <InputFile
      label={label}
      buttonLabel={buttonLabel}
      name={name}
      placeholder={placeholder}
      fileName={fileName}
      error={error}
      help={help}
      required={required}
      dataTest={dataTest}
      allowedFileTypes={allowedFileTypes}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onRemoveFile={action("removeFile")}
      spaceAfter={spaceAfter}
    />
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <InputFile label="My label" />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
