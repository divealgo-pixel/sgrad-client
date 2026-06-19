import { StyledSection } from '../../atoms/StyledSection';
import { PageTitle } from '../../atoms/PageTitle';
import { Form } from '../../components/CustomForm';
import { clientRequirementColumns } from './config/customerConfig';

export default function Register() {
 
  return (
 <>
      <StyledSection>
        <PageTitle>
          Customer Entry
        </PageTitle>
      </StyledSection>

        <Form config={clientRequirementColumns} onSubmit={()=>{}} submitLabel="Save" />
     </>
     
  );
}
