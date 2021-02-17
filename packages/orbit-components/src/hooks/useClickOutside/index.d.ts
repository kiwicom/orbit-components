declare const UseClickOutside: (
  ref: { readonly current: HTMLElement | null | undefined },
  handler: (ev: React.SyntheticEvent<HTMLLinkElement>) => void,
) => void;

export { UseClickOutside, UseClickOutside as default };
