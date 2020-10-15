# InputGroup

To implement InputGroup component into your project you'll need to add the import:

```jsx
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Select from "@kiwicom/orbit-components/lib/Select";
```

After adding import into your project you can use it simply like:

```jsx
<InputGroup>
  <InputField />
  <Select />
</InputGroup>
```

## Props

Table below contains all types of the props available in InputGroup component.

| Name         | Type                        | Default      | Description                                                                                                                                                    |
| :----------- | :-------------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **children** | `React.Node`                |              | The content of the InputGroup, normally **InputField** or **Select**.                                                                                          |
| dataTest     | `string`                    |              | Optional prop for testing purposes.                                                                                                                            |
| flex         | `string` or `Array<string>` | `"0 1 auto"` | The flex attribute(s) for children of the InputGroup. [See Functional specs](#functional-specs)                                                                |
| label        | `Translation`               |              | The label for the InputGroup. [See Functional specs](#functional-specs)                                                                                        |
| onChange     | `event => void \| Promise`  |              | Function for handling onClick event. [See Functional specs](#functional-specs)                                                                                 |
| onFocus      | `event => void \| Promise`  |              | Function for handling onFocus event. [See Functional specs](#functional-specs)                                                                                 |
| onBlur       | `event => void \| Promise`  |              | Function for handling onBlur event between different InputGroup children. [See Functional specs](#functional-specs)                                            |
| onBlurGroup  | `event => void \| Promise`  |              | Function for handling onBlur event for the whole InputGroup. [See Functional specs](#functional-specs)                                                         |
| size         | [`enum`](#enum)             | `"normal"`   | The size of the InputField. [See Functional specs](#functional-specs)                                                                                          |
| spaceAfter   | `enum`                      |              | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

### enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |

## Functional specs

- `error` or `help` defined on children will be displayed to user from left to right, only one error at a time will be displayed until resolved.

- The `error` prop overwrites the `help` prop, due to higher priority.

- Define `error` or `help` only for the **InputGroup**. Any `error` or `help` in InputField or Select won't be displayed.

- You can set up different `flex` attribute for every children, or use one for all. See [flex property docs](https://www.w3schools.com/cssref/css3_pr_flex.asp) for more information.

- The color of the label will turn into cloud shade when all children have some filled value.

- If the passed children into the InputGroup won't have any callbacks - either `onChange`, `onFocus` or `onBlur`, the passed callback of the InputGroup will be used.

- Define `size` only for the **InputGroup**, it will set up the proper styling for everything automatically.
