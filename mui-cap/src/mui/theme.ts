import { createTheme } from '@mui/material';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';

export const theme = createTheme({
  // Palette
  palette: {
    primary: {
      main: colors.orange,
    },
    secondary: {
      main: colors.midnightBlue,
    },
  },

  // Typography
  typography: {
    h1: {
      fontSize: fonts.sizes.xxl,
    },
    h2: {
      fontSize: fonts.sizes.xl,
    },
    // ... //
    body1: {
      fontSize: fonts.sizes.sm,
    },
    button: {
      fontSize: fonts.sizes.xs,
    },
  },

  // Components
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            padding: '2rem',
            border: '1px dashed red',
          },
        },
      ],
    },

    MuiDivider: {
      defaultProps: {},
      styleOverrides: {},
      variants: [],
    },
  },
});
