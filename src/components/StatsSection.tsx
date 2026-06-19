import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


import type { ReactNode } from 'react';

export interface StatItem {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

interface StatsSectionProps {
  items: StatItem[];
}

const StatsSection = ({ items }: StatsSectionProps) => {
  return (
    <Grid container spacing={2}  sx={{ width: '100%', m: 0 }}>
      {items.map((item) => (
        <Grid
          key={item.label}
          size={{
            xs: 6,
            sm: 3,
            md: 3,
          }}
        >
             <Typography component="div" variant="h4" color="text.secondary">
              {item.label}
            </Typography>
            {item.icon ?? <CheckCircleOutlineOutlinedIcon/>}

            <Typography
              component="div"
              variant="h3"
              sx={{
                fontWeight: 700,
                mt: 1,
              }}
            >
              {item.value}
            </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsSection;
