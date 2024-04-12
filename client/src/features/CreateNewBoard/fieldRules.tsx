import type { Rule } from 'antd/es/form';

export const nameField: Rule[] = [
  {
    required: true,
    message: 'Board Name required'
  },
  {
    max: 30,
    message: 'max 30 chars'
  }
];

export const descriptionField: Rule[] = [
  {
    required: true,
    message: 'Description required'
  },
  {
    max: 300,
    message: 'max 300 chars'
  }
];
