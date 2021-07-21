# Tooltip

To implement Tooltip component into your project you'll need to add the import:

```jsx
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
```

After adding import into your project you can use it simply like:

```jsx
<Tooltip content="Your content">
  <Airplane />
</Tooltip>
```

## Props

Table below contains all types of the props available in the Tooltip component.

| Name                 | Type            | Default | Description                                                                                                                                    |
| :------------------- | :-------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **children**         | `React.Node`    |         | The reference element where the Tooltip will appear.                                                                                           |
| **content**          | `React.Node`    |         | The content to display in the Tooltip.                                                                                                         |
| dataTest             | `string`        |         | Optional prop for testing purposes.                                                                                                            |
| enabled              | `boolean`       | `true`  | Enable render of tooltip                                                                                                                       |
| block                | `boolean`       | `false` | Whether the children wrapper is inline or block. Useful when children need to take up the entire container width.                              |
| preferredAlign       | [`enum`](#enum) |         | The preferred align to choose [See Functional specs](#functional-specs)                                                                        |
| preferredPosition    | [`enum`](#enum) |         | The preferred position to choose [See Functional specs](#functional-specs)                                                                     |
| removeUnderlinedText | `boolean`       |         | Removes underline on child component, when underline is not desired.                                                                           |
| size                 | [`enum`](#enum) |         | The maximum possible size of the Tooltip.                                                                                                      |
| stopPropagation      | `boolean`       |         | If `true` the click event on children won't bubble. Useful when you use Tooltip inside another clickable element.                              |
| lockScrolling        | `boolean`       | `true`  | Whether to prevent scrolling of the rest of the page while Tooltip is open on mobile. This is on by default to provide better user experience. |
| renderInPortal       | `boolean`       | `true`  | Optional prop, set it to `false` if you're rendering Tooltip inside a custom portal, defaults to `true`                                        |

| tabIndex | `string \| number` | `"0"` | Specifies the tab order of an element |

## enum

| preferredPosition | preferredAlign | size       |
| :---------------- | :------------- | :--------- |
| `"right"`         | `"center"`     | `"small"`  |
| `"left"`          | `"start"`      | `"medium"` |
| `"top"`           | `"end"`        |
| `"bottom"`        |

## Functional specs

- Whenever event `onMouseEnter`, `onFocus` or `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

- You can prefer one position and one align that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used for both position and align.

- For mobile devices, the user needs to click on the children to open the Tooltip.

- The Tooltip component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, List and custom image to show information to user about the CVV code. All rendered text inside the Tooltip should have white color on big devices (>= largeMobile) automatically:

```jsx
<Tooltip
  content={
    <Stack>
      <CustomImage />
      <Text>You can find the CVV in the right corner of your credit card.</Text>
      <List>
        <ListItem>Additional information</ListItem>
      </List>
    </Stack>
  }
>
  <InformationCircle />
</Tooltip>
```

- If you use Tooltip inside Alert, the Text should be automatically underlined with dotted line colored into the color of Alert.

- For ensuring that Tooltip component will work properly, add `div` with `id` set to `tooltips`. If not, the Tooltip will be rendered into the end of your DOM.
