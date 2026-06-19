import { StyledSection } from '../../atoms/StyledSection';
import { PageTitle } from '../../atoms/PageTitle';
import { Form } from '../../components/CustomForm';
import { moiColumns, moiEntryColumns, moiSummary } from './config/moiConfig';
import StatsSection from '../../components/StatsSection';
import Stack from '@mui/material/Stack';
import CustomDataGrid from '../../components/CustomDataGrid';
import type { MoiRow } from './types';
import { rows } from './__mocks/dummyData';

export default function Register() {
  return (
    <Stack direction="column" spacing={2}  sx={{ width: '100%', m: 0 }}>
        <StyledSection>
          <PageTitle>மொய் விருந்து (Moi Virunthu)</PageTitle>
        </StyledSection>

        <Form config={moiEntryColumns} onSubmit={() => {}} submitLabel="Save" />
      <StatsSection items={moiSummary} />
      <CustomDataGrid<MoiRow>
        rows={rows}
        columns={moiColumns}
        onEdit={(id, row) => {
          console.log('Edit', id, row);
        }}
        onDelete={(id, row) => {
          console.log('Delete', id, row);
        }}
      />
    </Stack>
  );
}
