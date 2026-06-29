import React from 'react';
import { Avatar, Box, Card, CardContent, Divider, Typography } from '@mui/material';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

interface Props {
  groupName: string;
  groupDescription?: string;
  items: ServiceItem[];
}

const ServicesSection = ({ groupName, groupDescription, items }: Props) => {
  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      {/* Section Header */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mt: 1,
            fontSize: {
              xs: '2rem',
              md: '2.75rem',
            },
          }}
        >
          {groupName}
        </Typography>

        {/* Accent Line */}
        <Box
          sx={{
            width: 80,
            height: 4,
            borderRadius: 999,
            bgcolor: 'primary.main',
            mx: 'auto',
            my: 2,
          }}
        />

        {groupDescription && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            {groupDescription}
          </Typography>
        )}
      </Box>

      {/* Grid Wrapper - 25% narrower */}
      <Box
        sx={{
          width: {
            xs: '100%',
            lg: '75%',
          },
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 2,
          }}
        >
          {items.map((item) => (
            <Card
              key={item.title}
              elevation={0}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                height: '100%',
                transition: 'all 0.3s ease',

                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 4,
                  borderColor: 'primary.main',
                },
              }}
            >
              {/* Background Image */}
              {item.image && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.05,
                  }}
                />
              )}

              <CardContent
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  p: 2.25,
                  height: '100%',
                }}
              >
                {/* Icon */}
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    mb: 1.5,
                    bgcolor: 'primary.main',
                    alignSelf: 'center',
                  }}
                >
                  {item.icon}
                </Avatar>

                {/* Title */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    width: '100%',
                    mb: 1.5,
                    minHeight: 44,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Divider */}
                <Divider
                  sx={{
                    width: '100%',
                    mb: 1.5,
                  }}
                />

                {/* Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                    flexGrow: 1,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
