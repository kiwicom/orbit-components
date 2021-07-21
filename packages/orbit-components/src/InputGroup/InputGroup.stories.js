// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, array, select } from "@storybook/addon-knobs";

import Stack from "../Stack";
import InputField from "../InputField";
import Select from "../Select";
import { SIZE_OPTIONS } from "./consts";
import CountryFlag from "../CountryFlag";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputGroup from "./index";

export default {
  title: "InputGroup",
};

export const DateOfBirth = (): React.Node => {
  const label = text("Label", "Date of birth");
  const flex = array("Flex", ["0 0 60px", "1 1 100%", "0 0 90px"]);
  const error = text("Error", undefined);
  const help = text("Help", undefined);

  const selectOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const selectValue = select("Select Value", [null].concat(...selectOptions.map(opt => opt.value)));

  return (
    <InputGroup
      label={label}
      flex={flex}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onBlurGroup={action("onBlurGroup")}
    >
      <InputField
        placeholder="DD"
        error={error}
        help={help}
        onBlur={action("onBlurIn")}
        onFocus={action("onFocusIn")}
        onChange={action("onChangeIn")}
      />
      <Select options={selectOptions} value={selectValue} placeholder="Month" />
      <InputField placeholder="YYYY" />
    </InputGroup>
  );
};

DateOfBirth.story = {
  name: "Date of birth",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

export const PhoneNumber = (): React.Node => {
  const flex = array("Flex", ["0 0 110px", "1 1 100%"]);
  const error = text("Error", undefined);
  const help = text("Help", undefined);
  const selectOptions = [
    { value: 0, label: "Czech Republic (+420)" },
    { value: 1, label: "Slovak Republic (+421)" },
    { value: 2, label: "United States (+1)" },
  ];
  const selectValue = select(
    "Select Value",
    [null].concat(...selectOptions.map(opt => opt.value)),
    selectOptions[0].value,
  );
  const customValueText = text("customValueText", "+420");
  const placeholder = text("Input Placeholder", "e.g. 123 456 789");
  const inputValue = text("Input Value", undefined);

  return (
    <InputGroup
      flex={flex}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    >
      <Select
        options={selectOptions}
        value={selectValue}
        customValueText={customValueText}
        prefix={<CountryFlag code="cz" />}
        error={error}
        help={help}
      />
      <InputField placeholder={placeholder} maxLength={11} value={inputValue} />
    </InputGroup>
  );
};

PhoneNumber.story = {
  name: "Phone number",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

export const Error = (): React.Node => {
  const label = text("Label", "Label");
  const flex = array("Flex", ["0 0 60px", "1 1 100%", "0 0 90px"]);
  const error = text("Error", "Something went wrong on day field");
  const help = text("Help", undefined);

  const selectOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const selectValue = select("Select Value", [null].concat(...selectOptions.map(opt => opt.value)));

  return (
    <InputGroup
      label={label}
      flex={flex}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    >
      <InputField placeholder="DD" error={error} help={help} />
      <Select
        options={selectOptions}
        value={selectValue}
        placeholder="Month"
        error="Something went wrong on month field"
        help={help}
      />
      <InputField placeholder="YYYY" error="Something went wrong on year field" help={help} />
    </InputGroup>
  );
};

export const ValidationApproches = (): React.Node => {
  const inputValue = text("Input Value", undefined);
  const errorGroup = text("Error on group", "Something went wrong on day field");
  const helpGroup = text("Help", undefined);
  const errorSingleField = text("Error inside element", "Something went wrong on day field");
  const helpSingleField = text("Help inside element", undefined);

  return (
    <Stack direction="column">
      <InputGroup
        label="Events and states on group"
        onChange={action("onChange Group a+b")}
        onFocus={action("onFocus Group a+b")}
        onBlur={action("onBlur Group a+b")}
        error={errorGroup}
        help={helpGroup}
      >
        <InputField placeholder="a" maxLength={11} value={inputValue} />
        <InputField placeholder="b" maxLength={11} value={inputValue} />
      </InputGroup>

      <InputGroup label="Events andd states on children" error={errorGroup}>
        <InputField
          placeholder="c"
          maxLength={11}
          value={inputValue}
          error={errorSingleField}
          help={helpSingleField}
          onChange={action("onChange c")}
          onFocus={action("onFocus c")}
          onBlur={action("onBlur c")}
        />
        <InputField
          placeholder="d"
          maxLength={11}
          value={inputValue}
          error={errorSingleField}
          help={helpSingleField}
          onChange={action("onChange d")}
          onFocus={action("onFocus d")}
          onBlur={action("onBlur d")}
        />
      </InputGroup>
    </Stack>
  );
};

ValidationApproches.story = {
  name: "Validation approches",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

export const OnChangeBehaviour = (): React.Node => {
  const inputValue = text("Input Value", undefined);

  return (
    <Stack direction="column">
      <InputGroup label="Change in group" onChange={action("onChange a+b")}>
        <InputField placeholder="a" maxLength={11} value={inputValue} />
        <InputField placeholder="b" maxLength={11} value={inputValue} />
      </InputGroup>

      <InputGroup label="Change in inner inputs">
        <InputField
          placeholder="c"
          maxLength={11}
          value={inputValue}
          onChange={action("onChange c")}
        />
        <InputField
          placeholder="d"
          maxLength={11}
          value={inputValue}
          onChange={action("onChange d")}
        />
      </InputGroup>
    </Stack>
  );
};

OnChangeBehaviour.story = {
  name: "onChange behaviour",

  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

export const Playground = (): React.Node => {
  const label = text("Label", "Phone number");
  const flex = array("Flex", ["1 0 200px", "1 1 100%", "1 0 150px", "0 1 50%"]);
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const error = text("Error", undefined);
  const help = text("Help", undefined);

  const selectOptions = [
    { value: 1, label: "First item" },
    { value: 2, label: "Second item" },
  ];
  const selectValue = select("Select Value", [null].concat(...selectOptions.map(opt => opt.value)));
  const placeholder = text("Input Placeholder", "Placeholder");
  const inputValue = text("Input Value", undefined);
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);

  return (
    <InputGroup
      label={label}
      flex={flex}
      size={size}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      <Select options={selectOptions} value={selectValue} error={error} help={help} />
      <InputField placeholder={placeholder} value={inputValue} />
      <Select options={selectOptions} value={selectValue} />
      <InputField placeholder={placeholder} value={inputValue} />
    </InputGroup>
  );
};

Playground.story = {
  parameters: {
    info: "Some description about this type of InputGroup in general.",
  },
};

export const Rtl = (): React.Node => {
  const flex = array("Flex", ["0 0 60px", "1 1 100%", "0 0 90px"]);
  const selectOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const selectValue = select("Select Value", [null].concat(...selectOptions.map(opt => opt.value)));
  const error = text("Error", undefined);
  const help = text("Help", undefined);
  const label = text("Label", "Phone number");

  return (
    <RenderInRtl>
      <InputGroup
        flex={flex}
        onChange={action("onChange")}
        onFocus={action("onFocus")}
        onBlur={action("onBlur")}
        label={label}
      >
        <InputField placeholder="DD" help={help} error={error} />
        <Select options={selectOptions} value={selectValue} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
