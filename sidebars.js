module.exports = {
  docs: [
    'installation',
    'essentials',
    'application',
    'abstraction',
    {
      type: 'category',
      label: 'Data',
      items: [
        'data-basic-types',
        'data-list',
        'data-map'
      ],
    },
    {
      type: 'category',
      label: 'Operators',
      items: [
        'operator-arithmetics',
        'operator-logic',
        'operator-comparison',
        'operator-condition',
        'operator-string-interpolation'
      ],
    },
    {
      type: 'category',
      label: 'Symmetries',
      items: [
        'symmetry-sync',
        'symmetry-async',
        'symmetry-error',
        'symmetry-chaining',
        'symmetry-module'
      ],
    },
    {
      type: 'category',
      label: 'Macros',
      items: [
        'macro-transform',
        'macro-translate'
      ],
    },
    'react'
  ],
};
