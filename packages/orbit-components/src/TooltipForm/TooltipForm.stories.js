// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "../InputField/consts";
import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tag from "../Tag";
import InputField from "../InputField";
import Textarea from "../Textarea";
import Select from "../Select";
import InputFile from "../InputFile";
import InputGroup from "../InputGroup";
import Button from "../Button";
import Text from "../Text";
import ChevronLeft from "../icons/ChevronLeft";
import Card from "../Card";
import CountryFlag from "../CountryFlag";
import Airplane from "../icons/Airplane";
import TextLink from "../TextLink";
import Checkbox from "../Checkbox";
import Radio from "../Radio";
import Modal, { ModalHeader, ModalSection, ModalFooter } from "../Modal";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

export default {
  title: "FormErrors Kitchensink",
};

export const Error = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Something went wrong.");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const required = boolean("required", true);

  return (
    <Stack>
      <InputField
        size={size}
        error={error}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        inlineLabel
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        inlineLabel
        prefix={prefix}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
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
          </>
        }
        error={error}
        value={value}
        placeholder={placeholder}
      />
      <InputField
        label={label}
        value={value}
        placeholder={placeholder}
        required={required}
        error={error}
      />
      <Textarea label={label} placeholder={placeholder} error={error} value={value} />
      <Textarea placeholder={placeholder} error={error} value={value} />
      <Select
        label={label}
        options={objectOptions}
        value={1}
        error={error}
        onChange={action("onChange")}
      />
      <Select options={objectOptions} error={error} value={1} onChange={action("onChange")} />
      <InputFile label={label} error={error} onRemoveFile={action("removeFile")} />
      <InputFile error={error} onRemoveFile={action("removeFile")} />
      <InputGroup label={label}>
        <InputField error={error} placeholder="DD" />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
      <InputGroup>
        <InputField error={error} placeholder="DD" />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </Stack>
  );
};

Error.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const Help = (): React.Node => {
  const label = text("Label", "Label");
  const help = text("Error", "Something is not quite right");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const required = boolean("required", true);

  return (
    <Stack>
      <InputField
        size={size}
        help={help}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        help={help}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        help={help}
        inlineLabel
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        help={help}
        inlineLabel
        prefix={prefix}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        label={label}
        inlineLabel
        tags={
          <div>
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
          </div>
        }
        help={help}
        value={value}
        placeholder={placeholder}
      />
      <InputField
        label={label}
        value={value}
        placeholder={placeholder}
        required={required}
        help={help}
      />
      <Textarea label={label} placeholder={placeholder} help={help} value={value} />
      <Textarea placeholder={placeholder} help={help} value={value} />
      <Select
        label={label}
        options={objectOptions}
        value={1}
        help={help}
        onChange={action("onChange")}
      />
      <Select options={objectOptions} help={help} value={1} onChange={action("onChange")} />
      <InputFile label={label} help={help} onRemoveFile={action("removeFile")} />
      <InputFile help={help} onRemoveFile={action("removeFile")} />
      <InputGroup label={label}>
        <InputField help={help} placeholder="DD" />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
      <InputGroup>
        <InputField help={help} placeholder="DD" />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </Stack>
  );
};

Help.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const RtlError = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Something is not quite right");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const required = boolean("required", true);

  return (
    <RenderInRtl>
      <Stack>
        <InputField
          size={size}
          error={error}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          inlineLabel
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          inlineLabel
          prefix={prefix}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
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
            </>
          }
          error={error}
          value={value}
          placeholder={placeholder}
        />
        <InputField
          label={label}
          value={value}
          placeholder={placeholder}
          required={required}
          error={error}
        />
        <Textarea label={label} placeholder={placeholder} error={error} value={value} />
        <Textarea placeholder={placeholder} error={error} value={value} />
        <Select
          label={label}
          options={objectOptions}
          value={1}
          error={error}
          onChange={action("onChange")}
        />
        <Select options={objectOptions} error={error} value={1} onChange={action("onChange")} />
        <InputFile label={label} error={error} onRemoveFile={action("removeFile")} />
        <InputFile error={error} onRemoveFile={action("removeFile")} />
        <InputGroup label={label}>
          <InputField error={error} placeholder="DD" />
          <Select options={objectOptions} value={1} placeholder="Month" />
          <InputField placeholder="YYYY" />
        </InputGroup>
        <InputGroup>
          <InputField error={error} placeholder="DD" />
          <Select options={objectOptions} value={1} placeholder="Month" />
          <InputField placeholder="YYYY" />
        </InputGroup>
      </Stack>
    </RenderInRtl>
  );
};

RtlError.story = {
  name: "RTL error",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const withModal = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Something is not quite right");
  const showMore = boolean("required", true);

  return (
    <Modal onClose={action("onClose")} fixedFooter>
      <ModalHeader title="Refund" description="Reservation number: 123456789" />
      <ModalSection>
        <Stack>
          <Card title="Cancellation" icon={<Airplane />} />
          <Text size="small" weight="bold">
            Contact information
          </Text>
          <InputField label="E-mail" placeholder="Your email" />
          <InputGroup flex={["0 0 120px", "1 1 100%"]} onChange={action("onChange")} label={label}>
            <Select
              options={[
                { value: 1, label: "+420" },
                { value: 2, label: "+421" },
              ]}
              value={1}
              prefix={<CountryFlag code="cz" />}
              error={error}
            />
            <InputField placeholder="111 222 333" />
          </InputGroup>
          {showMore && (
            <>
              <Text weight="bold" size="small">
                Options
              </Text>
              <Radio label="Option one" checked />
              <Radio label="Option two" />
              <Text size="small" type="secondary" spaceAfter="large">
                These are the most favorite. <TextLink href="#">Show more</TextLink>
              </Text>
              <Checkbox label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at mauris laoreet, eleifend nunc eu, venenatis sem. Etiam ullamcorper euismod suscipit. In a tortor ac velit elementum ultrices. Sed accumsan suscipit pulvinar." />
            </>
          )}
        </Stack>
      </ModalSection>
      <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
        <Button iconLeft={<ChevronLeft />} type="secondary">
          Back
        </Button>
        <Button fullWidth>Proceed to Payment (23.98€)</Button>
      </ModalFooter>
    </Modal>
  );
};

withModal.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};
