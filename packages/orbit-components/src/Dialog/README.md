# Dialog

To implement Dialog component into your project you'll need to add the import:

```jsx
import Dialog from "@kiwicom/orbit-components/lib/Dialog";
```

After adding import into your project you can use it simply like:

```jsx
<Dialog
  title="Are you sure you want to log out now?"
  primaryAction={<Button type="critical">Log out</Button>}
/>
```

## Props

Table below contains all types of the props available in Dialog component.

| Name              | Type                    | Default | Description                                                                                                                         |
| :---------------- | :---------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| dataTest          | `string`                |         | Optional prop for testing purposes.                                                                                                 |
| renderInPortal    | `boolean`               |         | Optional prop, set it to `false` if you're rendering Dialog inside a custom portal, defaults to `true`                              |
| description       | `React.Node`            |         | Optional description of the main action that Dialog performs.                                                                       |
| illustration      | `React.Node`            |         | Optional illustration of the Dialog.                                                                                                |
| **primaryAction** | `React.Node`            |         | Primary and required action that user can do with the Dialog.                                                                       |
| secondaryAction   | `React.Node`            |         | Optional, secondary action that user can perform - possibility to close the Dialog most of the time.                                |
| lockScrolling     | `boolean`               | `true`  | Whether to prevent scrolling of the rest of the page while Dialog is open. This is on by default to provide better user experience. |
| onClose           | `() => void \| Promise` |         | The title of the Dialog - preferably the purpose of the main action.                                                                |
| **title**         | `React.Node`            |         | The title of the Dialog - preferably the purpose of the main action.                                                                |
