module.exports = {
  docs: [
    "installation",
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started-essence",
        "getting-started-application",
        "getting-started-abstraction",
        "getting-started-data-types",
      ],
    },
    {
      type: "category",
      label: "Operators",
      items: [
        "operator-arithmetics",
        "operator-logic",
        "operator-comparison",
        "operator-condition",
        "operator-nullish",
        "operator-string-interpolation",
        "operator-bitwise-shift",
        "operator-other",
      ],
    },
    {
      type: "category",
      label: "Collections",
      items: ["collection-map", "collection-list", "collection-operator-field", "collection-operator-expansion"],
    },
    {
      type: "category",
      label: "Symmetries",
      items: [
        "symmetry-sync",
        "symmetry-async",
        "symmetry-error",
        "symmetry-chaining",
        "symmetry-module",
      ],
    },
    {
      type: "category",
      label: "Macros",
      items: ["macro-transform", "macro-translate"],
    },
    {
      type: "category",
      label: "Miscellaneous",
      items: ["misc-javascript-api", "misc-react"],
    },
  ],
};
