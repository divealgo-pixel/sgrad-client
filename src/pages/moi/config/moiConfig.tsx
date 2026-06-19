import type { Field } from '../../../components/types/form';
import type { GridColDef } from '@mui/x-data-grid';

export const moiEntryColumns: Field[] = [
  {
    type: 'autocomplete',
    name: 'guestName',
    label: 'Guest Name',
    required: true,
    grid: 6,
    placeholder: 'Enter Guest Name',
    options: [
      { label: 'Father', value: 'Father' },
      { label: 'Husband', value: 'Husband' },
      { label: 'Wife', value: 'Wife' },
      { label: 'Mother', value: 'Mother' },
    ],
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
    label: 'New Moi',
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



export const moiColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'guestName',
    headerName: 'Guest Name',
    flex: 1,
    minWidth: 250,
  },
  {
    field: 'oldMoi',
    headerName: 'Old Moi',
    width: 150,
    type: 'number',
    align: 'right',
    headerAlign: 'right',
  },
  {
    field: 'newMoi',
    headerName: 'New Moi',
    width: 150,
    type: 'number',
    align: 'right',
    headerAlign: 'right',
  },
];