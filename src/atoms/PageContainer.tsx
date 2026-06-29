import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1366px',
        mx: 'auto',
        py: 8,
        backgroud: '#ff0000',
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
