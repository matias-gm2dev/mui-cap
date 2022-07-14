import React from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  styled,
  TextField,
  Theme,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { theme } from '../mui/theme';

interface MyComponentBoxProps {
  myColor: 'primary' | 'secondary' | 'success';
  theme?: Theme;
}

export const Example2 = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">
          Hola
        </Button>
        <Button color="secondary" variant="contained">
          Hola
        </Button>
        <Button color="primary" variant="outlined">
          Hola
        </Button>
        <Button color="secondary" variant="outlined">
          Hola
        </Button>

        <Typography>Hola mundo</Typography>
        <Typography variant="h1" component="p">
          Hola mundo
        </Typography>
        <Typography variant="h2">Hola mundo</Typography>

        <MyCustomButton>My custom button</MyCustomButton>

        <MyComponentBox myColor="primary" />
        <MyComponentBox myColor="secondary" />
        <MyComponentBox myColor="success" />

        <TextField variant="filled" />

        <TextField
          variant="outlined"
          label="HOLA MUNDO"
          InputProps={{
            endAdornment: <span>Hola</span>,
          }}
        />

        <FormControl>
          <FormLabel>Hola Mundo</FormLabel>
          <OutlinedInput startAdornment="Hola" />
        </FormControl>

        <Box12 className="sarasa">
          <Typography fontSize="inherit">Hola</Typography>
          <div>
            <Typography fontSize="inherit">Hola</Typography>
          </div>
        </Box12>

        <MyTextField label="Hola mundo" />
        <MyButton />
      </ThemeProvider>
    </>
  );
};

const MyCustomButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(2),
  margin: 0,
  borderWidth: 1,
  borderColor: theme.palette.primary.main,
  backgroundColor: 'transparent',
}));

const MyComponentBox = styled('div', {
  shouldForwardProp: (props) => props !== 'myColor',
})(({ theme, myColor }: MyComponentBoxProps) => ({
  width: 20,
  height: 20,
  backgroundColor:
    myColor === 'primary'
      ? theme?.palette.primary.dark
      : myColor === 'secondary'
      ? theme?.palette.secondary.dark
      : theme?.palette.success.dark,
}));

const Box12 = styled('div')(() => ({
  '& > .MuiTypography-root': {
    color: 'red',
    fontSize: 32,
  },
  '&.sarasa': {
    border: '1px solid blue',
  },
  '&:hover': {
    borderColor: 'yellow',
  },
  '&:before': {
    content: '"Hola"',
  },
}));

const MyTextField = styled(TextField)(() => ({
  '& .MuiInputLabel-root': {
    color: 'blue',
  },
}));

const MyButton = styled(Button)({
  color: 'red',
});
