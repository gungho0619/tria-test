/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Theme, ThemeOptions } from '@mui/material/styles';
import React from 'react';
import StoreProvider from './context/StoreContext';
/**
 * Material UI theme "front" colors, "back" colors are different for Light and Dark modes
 */
declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
const FRONT_COLORS_LIGHT = {
  primary: {
    main: '#1A50B2', // Green 300
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#440866', // Orange 300
    contrastText: '#000'
  },
  info: {
    main: '#0277bd', // Light Blue 800
    contrastText: '#FFFFFF'
  },
  success: {
    main: '#2e7d32', // Green 800
    contrastText: '#FFFFFF'
  },
  warning: {
    main: '#f9a825', // Yellow 800
    // contrastText: '#000000',
    contrastText: '#FFFFFF'
  },
  error: {
    main: '#c62828', // Red 800
    contrastText: '#FFFFFF'
  }
};

const FRONT_COLORS_DARK = {
  primary: {
    main: '#FFFFFF', // Green 300
    contrastText: '#000000'
  },
  secondary: {
    main: '#440866', // Orange 300
    contrastText: '#FFF'
  },
  info: {
    main: '#0277bd', // Light Blue 800
    contrastText: '#FFFFFF'
  },
  success: {
    main: '#2e7d32', // Green 800
    contrastText: '#FFFFFF'
  },
  warning: {
    main: '#f9a825', // Yellow 800
    // contrastText: '#000000',
    contrastText: '#FFFFFF'
  },
  error: {
    main: '#c62828', // Red 800
    contrastText: '#FFFFFF'
  }
};

/**
 * Material UI theme config for "Light Mode"
 */
const LIGHT_THEME = {
  palette: {
    mode: 'light',
    background: {
      paper: '#FFFFFF', // Gray 100 - Background of "Paper" based component
      default: '#FFFFFF'
    },
    ...FRONT_COLORS_LIGHT
  }
};

/**
 * Material UI theme config for "Dark Mode"
 */
const DARK_THEME: any = {
  breakpoints: {
    values: {
      xs: 390,
      sm: 540,
      md: 768,
      lg: 1024,
      xl: 1366
    }
  },
  palette: {
    mode: 'dark',
    background: {
      paper: '#141416', // Gray 800 - Background of "Paper" based component
      default: '#141416'
    },
    ...FRONT_COLORS_DARK
  }
};

/**
 * Material UI Provider with Light and Dark themes depending on global "state.darkMode"
 */
interface propsType {
  children: React.ReactNode;
}

const AppThemeProvider = (props: propsType) => {
  // const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)));
  const theme = createTheme(DARK_THEME);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /* Material UI Styles */ />
      <StoreProvider>{props.children}</StoreProvider>
    </ThemeProvider>
  );
};

export { AppThemeProvider, LIGHT_THEME, DARK_THEME };
