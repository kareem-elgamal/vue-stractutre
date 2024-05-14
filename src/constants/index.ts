export const modals_types = {
  edit: "edit",
  view: "view",
  delete: "delete",
  add: "add",
  status: "status",
  other: "other",
  filter: "filter",
  sort: "sort",
};

export const modal_transition_default = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export const default_config = {
  default_lang: {
    lang: "en",
    dir: "ltr",
  },
  default_theme: "light",
};
