import React, { useState } from 'react';
import Tasks from './tasks/Tasks';
import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import ScrollToBottomButton from './components/ScrollToBottom';
import { TaskProvider } from './tasks/TaskContext';

const useStyles = makeStyles({
  appMain: {
    width: '100%',
  }
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
    undone: {
      main: "#a7a8a7",
      light: "333996"
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <div className={classes.appMain}>
          <Tasks />
          <ScrollToBottomButton />
        </div>
      </TaskProvider>
    </ThemeProvider>
  )
};

export default App;
