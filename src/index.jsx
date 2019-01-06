import React from 'react-dev/react';
import { render } from 'react-dev/react-dom';
import {ThemeContext, themes} from './pages/theme-context';
import ThemedButton from './pages/themed-button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      console.log('state.theme', this.state.theme);
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }


  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemedButton />
      </ThemeContext.Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
