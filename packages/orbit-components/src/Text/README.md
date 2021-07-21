# Text

To implement Text component into your project you'll need to add the import:

```jsx
import Text from "@kiwicom/orbit-components/lib/Text";
```

After adding import into your project you can use it simply like:

```jsx
<Text>Hello World!</Text>
```

## Props

Table below contains all types of the props available in the Text component.

| Name          | Type            | Default     | Description                                                                                                                                                    |
| :------------ | :-------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| as            | [`enum`](#enum) | `"p"`       | The element used for the root node.                                                                                                                            |
| align         | [`enum`](#enum) | `"left"`    | The align of the Text.                                                                                                                                         |
| children      | `React.Node`    |             | The content of the Text.                                                                                                                                       |
| dataTest      | `string`        |             | Optional prop for testing purposes.                                                                                                                            |
| id            | `string`        |             | The `id` HTML attribute.                                                                                                                                       |
| italic        | `boolean`       | `false`     | If `true`, the Text will be in italic style.                                                                                                                   |
| **size**      | [`enum`](#enum) | `"normal"`  | The size of the Text.                                                                                                                                          |
| spaceAfter    | `enum`          |             | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
| **type**      | [`enum`](#enum) | `"primary"` | The color type of the Text.                                                                                                                                    |
| uppercase     | `boolean`       | `false`     | If `true`, the Text will be in uppercase style.                                                                                                                |
| strikeThrough | `boolean`       | `false`     | If `true`, the Text will have `text-transform: line-through`.                                                                                                  |

| **weight** | [`enum`](#enum) | `"regular"` | The weight of the Text. |

### enum

| type          | align      | as       | size       | weight     |
| :------------ | :--------- | :------- | :--------- | :--------- |
| `"primary"`   | `"left"`   | `"p"`    | `"small"`  | `"normal"` |
| `"secondary"` | `"center"` | `"span"` | `"normal"` | `"bold"`   |
| `"info"`      | `"right"`  | `"div"`  | `"large"`  |            |
| `"success"`   |            |          |            |            |
| `"warning"`   |            |          |            |            |
| `"critical"`  |            |          |            |            |
| `"white"`     |            |          |            |            |
