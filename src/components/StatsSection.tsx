import Box from '@mui/material/Box';
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
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 2,
        width: '100%',
      }}
    >
      {items.map((item) => (
        <Box
          key={item.label}
          sx={{
            height: 50,
            px: 1.5,

            display: 'flex',
            alignItems: 'center',

            borderRadius: 2,

            bgcolor: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(25,118,210,0.05)'
                : 'rgba(255,255,255,0.04)',

            border: '1px solid',
            borderColor: 'divider',

            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              gap: 1,
            }}
          >
            <Box
              sx={{
                color: 'success.main',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.icon ?? (
                <CheckCircleOutlineOutlinedIcon fontSize="small" />
              )}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                {item.label}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default StatsSection;