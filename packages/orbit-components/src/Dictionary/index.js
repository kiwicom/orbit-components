// @flow
import * as React from "react";

import { pureTranslate } from "../Translate";
import DictionaryContext from "./DictionaryContext";

import type { Props } from ".";

const Dictionary = ({ values, children }: Props): React.Node => (
  <DictionaryContext.Provider value={values}>{children}</DictionaryContext.Provider>
);

export function withDictionary(Component: React.ComponentType<any>): (props: any) => React.Node {
  return function DictionaryComponent(props: any) {
    return (
      <DictionaryContext.Consumer>
        {dictionary => (
          <Component
            {...props}
            translate={(tKey, values) => pureTranslate(dictionary, tKey, values)}
          />
        )}
      </DictionaryContext.Consumer>
    );
  };
}

export default Dictionary;
