// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Button from "./index";

import PlusCircle from "../icons/PlusCircle";
import Facebook from "../icons/Facebook";
import Google from "../icons/Google";
import Remove from "../icons/Remove";

setAddon(chaptersAddon);

const options = {
  showSource: true,
  allowSourceToggling: false,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(styles({
    padding: '20px',
  }))
  .addWithChapters("Primary button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Primary button',
      info: 'Some description about this type of button in general.',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about where is the button without icon used and states describing how to not use it in general. ",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="primary"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about where is the button with icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="primary"
                  Icon={PlusCircle}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Secondary button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Secondary button',
      info: 'Some description about this type of button in general.',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about where is the button without icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="secondary"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about where is the button with icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="secondary"
                  Icon={PlusCircle}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Link button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Link button',
      info: 'Some description about this type of button in general.',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about where is the button without icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="link"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about where is the button with icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="link"
                  Icon={PlusCircle}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Facebook button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Facebook button',
      info: 'Some description about this type of button in general.',
      chapters: [
        {
          title: `With icon`,
          info: "Some description about where is the button with icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="facebook"
                  Icon={Facebook}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Google button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Google Button',
      info: 'Some description about this type of button in general.',
      chapters: [
        {
          title: `With icon`,
          info: "Some description about where is the button with icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="google"
                  Icon={Google}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Destructive button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Destructive Button',
      info: 'Some description about this type of button in general.',
      chapters: [
        {
          title: `With icon`,
          info: "Some description about where is the button with icon used and states describing how to not use it in general.",
          sections: [
            {
              title: `Button ${size}`,
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isBordered={boolean("Bordered", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="destructive"
                  Icon={Remove}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
