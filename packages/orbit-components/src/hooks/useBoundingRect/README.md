# useDimensionsRect

The `useDimensionsRect` hook is useful when you need to get a returned value from [`getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) and have it update when the `resize` event is fired on the `window` object.

To implement the `useDimensionsRect` hook in your component, add the import:

```jsx
import useDimensionsRect from "@kiwicom/orbit-components/lib/hooks/useDimensionsRect";
```

Then you can use it:

```jsx
const Component = (props: Props) => {
  const [dimensions, ref] = useDimensionsRect({ height: null });

  /*
    Will return an object with merged initial values before re-render:
    {
        x: 0,
        y: 0,
        width: 0,
        height: null,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
  */
  /*
    When useEffect is called for the first time, it will return the result of the getBoundingClientRect function:
    {
        x: 53,
        y: 319,
        width: 937,
        height: 45,
        top: 319,
        right: 990,
        bottom: 364,
        left: 53
    }
  */
  return (
    <OtherComponent ref={ref} dimenions={dimensions}>
      Hello world!
    </OtherComponent>
  );
};
```

## Props

The table below contains all parameters available to the `useDimensionsRect` hook.

| Name         | Type                                 | Description                                                 |
| :----------- | :----------------------------------- | :---------------------------------------------------------- |
| initialValue | Shape of [`Dimensions`](#dimensions) | Object with initial values for the inner `Dimensions` state |

## Return

The table below contains all returned values from the tuple from the `useDimensionsRect` hook.

| Name       | Type                            | Description                                              |
| :--------- | :------------------------------ | :------------------------------------------------------- |
| dimensions | [`Dimensions`](#dimensions)     | Object with values that `getBoundingClientRect` returns. |
| ref        | `React.ElementRef<HTMLElement>` | Reference object for your DOM instance.                  |

## Dimensions

| Name   | Type     | Initial value |
| :----- | :------- | :------------ |
| x      | `number` | `0`           |
| y      | `number` | `0`           |
| width  | `number` | `0`           |
| height | `number` | `0`           |
| top    | `number` | `0`           |
| right  | `number` | `0`           |
| bottom | `number` | `0`           |
| left   | `number` | `0`           |
