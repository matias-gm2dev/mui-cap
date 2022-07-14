import { Box, Button, Typography } from '@mui/material';

export const Example1 = () => {
  return (
    <Box>
      <Typography>Sin Theme:</Typography>
      <Button variant="contained" endIcon={<p>Icon</p>}>
        Hola
      </Button>
    </Box>
  );
};
