import Paper from '@mui/material/Paper';
import { StyledSection } from '../../atoms/StyledSection';
import { PageTitle } from '../../atoms/PageTitle';
import { Form } from '../../components/CustomForm';
import { moiEntryColumns, moiSummary } from './config/moiConfig';
import StatsSection from '../../components/StatsSection';
import Stack from '@mui/material/Stack';

export default function Register() {
  return (
    <Stack direction="column" spacing={2}>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          borderRadius: 3,
        }}
      >
        <StyledSection>
          <PageTitle>மொய் விருந்து(Moi Virunthu)</PageTitle>
        </StyledSection>

        <Form config={moiEntryColumns} onSubmit={() => {}} submitLabel="Save" />
      </Paper>
      <StatsSection items={moiSummary} />
    </Stack>
  );
}
