import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const Index = () => {
  return (
    <Container maxWidth="xl" sx={{ m: 5 }}>
      <Typography variant="h3">404 not found</Typography>
      <Grid container spacing={3} sx={{ mt: 5, mx: 1 }}>
        <Grid sm={12} md={6}>
          <Image
            src="/Scarecrow.png"
            width={500}
            height={500}
            alt=""
            layout="intrinsic"
          />
        </Grid>
        <Grid sm={12} md={6}>
          <Typography variant="h3" fontFamily="monospace">
            I have bad news for you
          </Typography>
          <Box sx={{ mt: 5, width: 300 }}>
            <Typography variant="body1">
              The page you are looking for might be removed or is temporarily
              unavailable
            </Typography>
            <Button variant="contained" sx={{ mt: 5, px: 3, py: 1 }}>
              BACK TO HOMEPAGE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
