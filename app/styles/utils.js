import { StyleSheet } from 'react-native';

let primaryColor = '#39c50e';
let primaryColorAlt = '#4ff800';
let secondaryColor = 'white';
let darkColor = 'rgb(12, 12, 12)';
let darkSecondary = 'rgb(58, 58, 58)';
let successColor = 'green';
let warningColor = 'yellow';
let errorColor = 'red';


let styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    color: darkColor,
    fontFamily: 'Consolas',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

// work on this

const setTheme = (theme = 'light') => {
  if (theme === 'dark') {
    primaryColor = darkColor;
    primaryColorAlt = darkSecondary;
    darkColor = secondaryColor;
    secondaryColor = darkSecondary;
  }
  createStyles();
};

const createStyles = () => {
  styles = StyleSheet.create({
    container: {
      backgroundColor: secondaryColor,
      color: darkColor,
      fontFamily: 'Consolas',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
};

createStyles();

export {
  styles,
  setTheme,
  primaryColor,
  primaryColorAlt,
  secondaryColor,
  darkColor,
  darkSecondary,
  successColor,
  warningColor,
  errorColor
}