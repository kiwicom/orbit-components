import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { InputField, Text } from "@kiwicom/orbit-components";

interface Knob {
  component: string;
  name: string;
  defaultValue: string;
  type: string;
}

interface Props {
  knobs: Knob[];
  onChange: (val) => void;
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 20px;
`;

const Playground = ({ knobs, onChange }: Props) => {
  const defaultVals = knobs.reduce((acc, { name, defaultValue }) => {
    acc[name] = defaultValue;
    return acc;
  }, {});

  const [values, setValues] = React.useState(defaultVals);

  const handleChange = (ev: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });

    onChange(values);
  };

  return (
    <StyledWrapper>
      {knobs.map(({ type, name }) => {
        if (type === "textfield")
          return (
            <>
              <Text weight="bold" size="small" type="secondary">
                {name}
              </Text>
              <InputField
                size="small"
                name={name}
                placeholder={values[name]}
                value={values[name]}
                onChange={handleChange}
              />
            </>
          );
        return null;
      })}
    </StyledWrapper>
  );
};

export default Playground;
