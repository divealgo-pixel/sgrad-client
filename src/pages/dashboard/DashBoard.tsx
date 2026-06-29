import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import AppCardSection from '../../components/AppCardSection';
import { servicesCard } from './config/dashboardConfig';

const bannerImages = ['/banner1.png', '/banner2.png', '/banner3.png', '/banner4.png'];

function DashBoard() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: {
            xs: 180,
            sm: 250,
            md: 320,
          },
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <Box
          component="img"
          src={bannerImages[currentImage]}
          alt={`Banner ${currentImage + 1}`}
          onLoad={() => console.log('Image Loaded')}
          onError={() => console.log('Image Failed')}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </Box>
      <Box>
        <AppCardSection
          groupName="What We Offer"
          groupDescription="Delivering innovative digital solutions that empower businesses to grow and succeed."
          items={servicesCard}
        />
      </Box>
    </Box>
  );
}

export default DashBoard;
