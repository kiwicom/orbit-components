// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, number, object } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZE_OPTIONS, TYPE_OPTIONS, INPUTMODE } from "./consts";
import { NAME_OPTIONS } from "../ServiceLogo/consts";
import ButtonLink from "../ButtonLink";
import TextLink from "../TextLink";
import ServiceLogo from "../ServiceLogo";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tag from "../Tag";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputField from ".";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "InputField",
};

export const DefaultInput = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <InputField label={label} value={value} placeholder={placeholder} onChange={action("change")} />
  );
};

DefaultInput.story = {
  name: "Default input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const SmallInput = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <InputField
      size="small"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={action("change")}
    />
  );
};

SmallInput.story = {
  name: "Small input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const NumberInput = (): React.Node => {
  const label = text("Label", "Number");
  const value = text("Value", 2);
  const placeholder = text("Placeholder", "Number");
  const maxValue = number("maxValue", 3);
  const minValue = number("minValue", 1);

  return (
    <InputField
      type="number"
      label={label}
      value={value}
      placeholder={placeholder}
      maxValue={maxValue}
      minValue={minValue}
      onChange={action("change")}
    />
  );
};

NumberInput.story = {
  name: "Number input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const PasswordInput = (): React.Node => {
  const label = text("Label", "Password");
  const value = text("Value", "p422W0rd");
  const placeholder = text("Placeholder", "Password");

  return (
    <InputField
      type="password"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={action("change")}
    />
  );
};

PasswordInput.story = {
  name: "Password input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const PassportOrIdInput = (): React.Node => {
  const label = text("Label", "Passport or ID number");
  const placeholder = text("Placeholder", "588539238");

  return (
    <InputField
      type="passportid"
      label={label}
      placeholder={placeholder}
      onChange={action("change")}
    />
  );
};

PassportOrIdInput.story = {
  name: "Passport or ID Input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const EmailInput = (): React.Node => {
  const label = text("Label", "Email");
  const value = text("Value", "name@example.co");
  const placeholder = text("Placeholder", "Email");

  return (
    <InputField
      type="email"
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={action("change")}
      help={
        <div>
          Did you mean&nbsp;
          <TextLink onClick={action("clicked")}>name@example.com</TextLink>?
        </div>
      }
    />
  );
};

EmailInput.story = {
  name: "Email input",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithTextPrefix = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      prefix={prefix}
      onChange={action("change")}
    />
  );
};

WithTextPrefix.story = {
  name: "With text prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithTextSuffix = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const suffix = text("Suffix", "Some long text");

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      suffix={<div style={{ paddingRight: "12px" }}>{suffix}</div>}
      onChange={action("change")}
    />
  );
};

WithTextSuffix.story = {
  name: "With text suffix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const CompactInput = (): React.Node => {
  const value = text("Value", "");
  const label = text("Label", "Label");
  const placeholder = text("Placeholder", "Placeholder");
  const required = boolean("required", false);
  const error = text("Error", undefined);

  return (
    <InputField
      label={label}
      inlineLabel
      error={error}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={action("change")}
    />
  );
};

CompactInput.story = {
  name: "Compact input",

  parameters: {
    info: "Compact input with FormLabel as prefix",
  },
};

export const CompactInputWithTags = (): React.Node => {
  const value = text("Value", "");
  const label = text("Label", "Label");
  const placeholder = text("Placeholder", "Placeholder");
  const required = boolean("required", false);
  const error = text("Error", undefined);

  return (
    <InputField
      label={label}
      inlineLabel
      tags={
        <>
          <Tag selected onRemove={action("onRemove")}>
            Brno
          </Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
          <Tag onRemove={action("onRemove")}>Praha</Tag>
        </>
      }
      error={error}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={action("change")}
    />
  );
};

CompactInputWithTags.story = {
  name: "Compact input with tags",

  parameters: {
    info: "Compact input with FormLabel as prefix",
  },
};

export const RequiredField = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const required = boolean("required", true);
  const placeholder = text("Placeholder", "Placeholder");

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={action("change")}
    />
  );
};

RequiredField.story = {
  name: "Required field",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithIconPrefix = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Prefix = getIcon(getIcons("Prefix", "Search"));

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      prefix={Prefix && <Prefix />}
      onChange={action("change")}
    />
  );
};

WithIconPrefix.story = {
  name: "With Icon prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithButtonLinkSuffix = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Suffix = getIcon(getIcons("Suffix", "Visibility"));

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      suffix={
        Suffix && (
          <ButtonLink type="primary" compact iconLeft={<Suffix />} onClick={action("clicked")} />
        )
      }
      onChange={action("change")}
    />
  );
};

WithButtonLinkSuffix.story = {
  name: "With ButtonLink suffix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithServiceLogoPrefix = (): React.Node => {
  const label = text("Label", "Label");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.AIRHELP);
  const grayScale = boolean("GrayScale", false);

  return (
    <InputField
      label={label}
      value={value}
      placeholder={placeholder}
      suffix={<ServiceLogo name={name} grayScale={grayScale} />}
      onChange={action("change")}
    />
  );
};

WithServiceLogoPrefix.story = {
  name: "With ServiceLogo prefix",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const WithHelp = (): React.Node => {
  const label = text("Label", "Label");
  const help = text("Help", "Help message");

  return <InputField label={label} help={help} />;
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

  return <InputField label={label} error={error} />;
};

WithError.story = {
  name: "With error",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.TEXT);
  const name = text("Name", "input");
  const label = text("Label", "Label");
  const inlineLabel = boolean("inline label", false);
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const Prefix = getIcon(getIcons("Prefix", "Search"));
  const Suffix = getIcon(getIcons("Suffix", "Visibility"));
  const help = text("Help", undefined);
  const error = text("Error", undefined);
  const disabled = boolean("Disabled", false);
  const maxValue = number("maxValue", undefined);
  const minValue = number("minValue", undefined);
  const required = boolean("required", false);
  const maxLength = number("maxLength", undefined);
  const minLength = number("minLength", undefined);
  const readOnly = boolean("readOnly", false);
  const autoComplete = text("autoComplete", "off");
  const autoFocus = boolean("autoFocus", true);
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const id = text("id", "ID");
  const inputMode = select("inputMode", [null, ...Object.values(INPUTMODE)]);
  const dataAttrs = object("dataAttrs", { "data-recording-ignore": true });

  return (
    <InputField
      size={size}
      type={type}
      name={name}
      label={label}
      inlineLabel={inlineLabel}
      value={value}
      dataTest={dataTest}
      placeholder={placeholder}
      required={required}
      prefix={Prefix && <Prefix />}
      suffix={
        Suffix && (
          <ButtonLink
            type="primary"
            iconLeft={<Suffix />}
            size={size}
            onClick={action("clicked")}
            disabled={disabled}
            compact
          />
        )
      }
      help={help}
      error={error}
      disabled={disabled}
      maxValue={maxValue}
      minValue={minValue}
      maxLength={maxLength}
      minLength={minLength}
      readOnly={readOnly}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      onMouseUp={action("onMouseUp")}
      onMouseDown={action("onMouseDown")}
      onSelect={action("onSelect")}
      onKeyDown={action("onKeyDown")}
      spaceAfter={spaceAfter}
      id={id}
      inputMode={inputMode}
      dataAttrs={dataAttrs}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <InputField
      placeholder="Placeholder"
      label="My label"
      prefix="$"
      suffix={<ButtonLink iconLeft={<Icons.Visibility />} />}
    />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
