# Modal

To implement Modal component into your project you'll need to the import at least the Modal and the [ModalSection](#modalsection):

```jsx
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
```

> You might need the Portal also. See it's [docs](https://orbit.kiwi/utilities/portal/).

After adding import into your project you can use it simply like:

```jsx
<Modal>
  <ModalSection>Hello World!</ModalSection>
</Modal>
```

The Modal component has big variety of usage, please check examples for usage [below](#use-cases).

## Props

Table below contains all types of the props available in the Modal component.

| Name                | Type                       | Default    | Description                                                                                                                                                                                          |
| :------------------ | :------------------------- | :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children            | `React.Node`               |            | The content of the Modal. [See Subcomponents](#subcomponents)                                                                                                                                        |
| lockScrolling       | `boolean`                  | `true`     | Whether to prevent scrolling of the rest of the page while Modal is open. This is on by default to provide better user experience.                                                                   |
| scrollingElementRef | ref (object or function)   |            | The scrolling element, which depends on the viewport                                                                                                                                                 |
| dataTest            | `string`                   |            | Optional prop for testing purposes.                                                                                                                                                                  |
| fixedFooter         | `boolean`                  | `false`    | If `true` the ModalFooter will be fixed to the bottom of window.                                                                                                                                     |
| isMobileFullPage    | `boolean`                  | `false`    | If `true` the Modal will look like a page on mobile devices.                                                                                                                                         |
| size                | [`enum`](#modal-enum)      | `"normal"` | The maximum width of the Modal on desktop viewport.                                                                                                                                                  |
| onClose             | `event => void \| Promise` |            | Function for handling onClose event. If you don't pass any function the Close button will not be displayed and it will not be possible to close the Modal. [See Functional specs](#functional-specs) |
| preventOverlayClose | `boolean`                  |            | Property for preventing closing of modal when there is a action on overlay. BEWARE: This should be used only in very specials edge-cases! It breaks user experience.                                 |
| hasCloseButton      | `boolean`                  | `true`     | Defines whether the Modal displays a close button. If you disable this, we recommend adding some kind of an alternative.                                                                             |
| autoFocus           | `boolean`                  | `true`     | The autofocus attribute of the Modal, see [this docs](https://www.w3schools.com/tags/att_autofocus.asp).                                                                                             |
| disableAnimation    | `boolean`                  | `false`    | Defines whether the Modal performs the slide in animation on mobile. If you want to improve your [CLS](https://web.dev/cls/) score, you might want to set this to `true`.                            |

### Modal enum

| size           |
| :------------- |
| `"extraSmall"` |
| `"small"`      |
| `"normal"`     |
| `"large`       |
| `"extraLarge"` |

### Functional specs

- To select the Close Button element for testing purposes, use [data-test="ModalCloseButton"] selector.

- To type a reference you're passing to a modal, use the following example:

  ```jsx
  const modalRef = React.useRef<React.ElementRef<typeof Modal> | null>(null)
  ```

- You might want to get the current scroll position of a Modal component, which might change based on media queries. Reading it constantly would degrade performance. Instead, get it on demand by using the `getScrollPosition` method in a Modal instance like this:

  ```jsx
  class Component extends React.Component {
    const modalRef = React.useRef<React.ElementRef<typeof Modal> | null>(null)

    const getScroll = () => {
      if (modalRef.current) {
        setLocalScrollPosition(modalRef.current.getScrollPosition());
      }
    };

    render() {
      return (
        <Modal ref={modalRef}>
          Some content.
        </Modal>
      );
    }
  }
  ```

- To set the scroll position of a Modal component, use the `setScrollPosition` method in a Modal instance like this:

  ```jsx
  class Component extends React.Component {
    const modalRef = React.useRef<React.ElementRef<typeof Modal> | null>(null)

    setScroll = () => {
      if (modalRef.current) {
        modalRef.current.setScrollPosition(100);
      }
    };
    render() {
      return (
        <Modal ref={modalRef}>
          <ModalSection>Example usage of setting up the scrollTop position</ModalSection>
          <ModalFooter>
            <Button onClick={this.setScroll}>Change scrollTop</Button>
          </ModalFooter>
        </Modal>
      );
    }
  }
  ```

---

## Subcomponents

Modal component offers a good flexibility and many variations in its usage. There are three subcomponents which you might use.

### ModalSection

```jsx
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
```

#### Usage

```jsx
<Modal>
  <ModalSection suppressed>Hello World!</ModalSection>
</Modal>
```

#### Props

Table below contains all types of the props in the ModalSection component.

| Name         | Type         | Default | Description                                             |
| :----------- | :----------- | :------ | :------------------------------------------------------ |
| **children** | `React.Node` |         | Content of the ModalSection component.                  |
| dataTest     | `string`     |         | Optional prop for testing purposes.                     |
| suppressed   | `boolean`    | `false` | If `true` the ModalSection will have cloudy background. |

### ModalHeader

```jsx
import Modal, { ModalHeader } from "@kiwicom/orbit-components/lib/Modal";
```

#### Usage

```jsx
<Modal>
  <ModalHeader title="Orbit design system">Hello World!</ModalHeader>
</Modal>
```

#### Props

Table below contains all types of the props in the ModalHeader component.

| Name         | Type                                 | Default | Description                                            |
| :----------- | :----------------------------------- | :------ | :----------------------------------------------------- |
| children     | `React.Node`                         |         | The content of the ModalHeader.                        |
| dataTest     | `string`                             |         | Optional prop for testing purposes.                    |
| description  | `React.Node`                         |         | The displayed description of the ModalHeader.          |
| illustration | `React.Element<typeof Illustration>` |         | The displayed Illustration of the ModalHeader.         |
| suppressed   | `boolean`                            | `false` | If `true` the ModalHeader will have cloudy background. |
| title        | `React.Node`                         |         | The displayed title of the ModalHeader.                |

### ModalFooter

```jsx
import Modal, { ModalFooter } from "@kiwicom/orbit-components/lib/Modal";

// and probably Button
import Button from "@kiwicom/orbit-components/lib/Button";
```

#### Usage:

```jsx
<Modal fixedFooter>
  <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
    <Button type="secondary" iconLeft={<ChevronLeft />}>
      Back
    </Button>
    <Button block>Continue to Payment</Button>
  </ModalFooter>
</Modal>
```

#### Props

Table below contains all types of the props in the ModalFooter component.

| Name         | Type                        | Default     | Description                                                                                      |
| :----------- | :-------------------------- | :---------- | :----------------------------------------------------------------------------------------------- |
| **children** | `React.Node`                |             | The content of the ModalFooter.                                                                  |
| dataTest     | `string`                    |             | Optional prop for testing purposes.                                                              |
| flex         | `string` or `Array<string>` | `"0 1 auto` | The flex attribute(s) for children of the ModalFooter. [See Functional specs](#functional-specs) |

#### ModalFooter Functional specs

- You can set up different `flex` attribute for every children, or use one for all. See [flex property docs](https://www.w3schools.com/cssref/css3_pr_flex.asp) for more information.

## Use cases

Although this component offers good flexibility of usage, there are tiny limitations for usage.

### Wrapper ModalSections

If you need to wrap the children into custom component, wrap all of the children into **one wrapper**, e.g.:

```jsx
// good
<Modal fixedFooter>
  <CustomWrapper>
    <ModalHeader />
      <ModalSection>
        My content
      </ModalSection>
      <ModalSection>
        My content
      </ModalSection>
    <ModalFooter />
  </CustomWrapper>
</Modal>

// bad, the CSS styles will be broken
<Modal fixedFooter>
  <ModalHeader />
  <CustomWrapper>
    <ModalSection>
      My content
    </ModalSection>
    <ModalSection>
      My content
    </ModalSection>
  </CustomWrapper>
  <ModalFooter />
</Modal>
```

## Accessibility

- When Modal is closed return focus to the element that opened the modal. You can use `onClose` callback function to achieve this.
