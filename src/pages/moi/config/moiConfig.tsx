import type { Field } from '../../../components/types/form';

export const moiEntryColumns: Field[] = [
  {
    type: 'text',
    name: 'guestName',
    label: 'Guest Name',
    placeholder: 'Enter Guest Name',
    required: true,
    grid: 6,
  },
  {
    type: 'select',
    name: 'relativeType',
    label: 'Relative Type',
    required: true,
    options: [
      { label: 'Father', value: 'Father' },
      { label: 'Husband', value: 'Husband' },
      { label: 'Wife', value: 'Wife' },
      { label: 'Mother', value: 'Mother' },
    ],
    grid: 6,
  },
  {
    type: 'text',
    name: 'Guardian Name',
    label: 'Father/Husband/wife',
    required: true,
    placeholder: 'Enter Guardian name',
    grid: 6,
  },
  {
    type: 'select',
    name: 'address',
    label: 'Address',
    required: true,
    options: [],
    grid: 6,
  },
 
  {
    type: 'number',
    name: 'old',
    label: 'Old',
    required: false,
    placeholder: 'Enter Old Moi',
    grid: 6,
  },
  {
    type: 'number',
    name: 'new',
    label: 'New Old',
    required: true,
    placeholder: 'New Moi',
    grid: 6,
  },
   {
    type: 'text',
    name: 'mobile',
    label: 'Mobile',
    required: false,
    placeholder: 'Enter mobile number',
    grid: 6,
  },
];

export const moiSummary = [
  {
    label: 'Count',
    value: 31,
  },
  {
    label: 'Old Moi',
    value: 250,
  },
  {
    label: 'New Moi',
    value: 32,
  },

  {
    label: 'Total',
    value: 1000000,
  },
];
