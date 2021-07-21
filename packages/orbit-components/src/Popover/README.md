# Popover

To implement Popover component into your project you'll need to add the import:

```jsx
import Popover from "@kiwicom/orbit-components/lib/Popover";
```

After adding import into your project you can use it simply like:

```jsx
<Popover content="Your content">
  <Button />
</Popover>
```

## Props

Table below contains all types of the props available in the Popover component.

| Name              | Type                    | Default             | Description                                                                                                                                    |
| :---------------- | :---------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| actions           | `React.Node`            |                     | Actions to display in the Popover [See Functional specs](#functional-specs).                                                                   |
| **content**       | `React.Node`            |                     | The content to display in the Popover.                                                                                                         |
| **children**      | `React.Node`            |                     | The reference element where the Popover will appear.                                                                                           |
| dataTest          | `string`                |                     | Optional prop for testing purposes.                                                                                                            |
| offset            | [`offset`](#offset)     | `{left: 0, top: 0}` | Optional prop to set position offset                                                                                                           |
| fixed             | `boolean`               |                     | Changes position to fixed from absolute, good for use in sticky components.                                                                    |
| noPadding         | `boolean`               | `true`              | Adds or removes padding around popover's content.                                                                                              |
| opened            | `boolean`               |                     | Prop for programmatically controlling Popover inner state. If `opened` is present open triggers are ignored.                                   |
| preferredAlign    | [`enum`](#enum)         | `"start"`           | The preferred position to choose [See Functional specs](#functional-specs).                                                                    |
| preferredPosition | [`enum`](#enum)         | `"bottom"`          | The preferred align to choose [See Functional specs](#functional-specs).                                                                       |
| overlapped        | `boolean`               | `false`             | If `true`, the content of Popover will overlap the trigger children.                                                                           |
| lockScrolling     | `boolean`               | `true`              | Whether to prevent scrolling of the rest of the page while Popover is open on mobile. This is on by default to provide better user experience. |
| renderInPortal    | `boolean`               | `true`              | Optional prop, set it to `false` if you're rendering Popover inside a custom portal, defaults to `true`                                        |
| width             | `string`                |                     | Width of popover, if not set the with is set to `auto`.                                                                                        |
| onClose           | `() => void \| Promise` |                     | Function for handling onClose.                                                                                                                 |
| onOpen            | `() => void \| Promise` |                     | Function for handling onOpen.                                                                                                                  |

## enum

| position   | Align      |
| :--------- | :--------- |
| `"bottom"` | `"start"`  |
| `"top"`    | `"end"`    |
|            | `"center"` |

## offset

| key    | value    |
| :----- | -------- |
| `top`  | `number` |
| `left` | `number` |

## Functional specs

- Whenever event `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

- You can prefer one position that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used.

- You can prefer align that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used.

- Actions are a way to override default close behavior with your own actions, mainly `Buttons` keep in mind that one of the actions should close the popover.

- The Popover component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, ListChoice for example:

```jsx
<Popover
  content={
    <React.Fragment>
      <ListChoice
        title="Choice Title"
        description="Further description"
        icon={<Accommodation />}
        onClick={action}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        icon={<Accommodation />}
        onClick={action}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        icon={<Accommodation />}
        onClick={action}
      />
    </React.Fragment>
  }
>
  <Button>Open Popover</Button>
</Popover>
```
