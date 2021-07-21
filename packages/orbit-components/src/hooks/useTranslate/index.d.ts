import Values from "../../Translate";

type TranslateFunction = (key: string, values?: typeof Values) => string;

declare const UseTranslate: () => TranslateFunction;

export { UseTranslate, UseTranslate as default };
