import React from 'react';

import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store';
import Profile from './screens/Profile';

const AppStack = StackNavigator({
  Profile: { screen: Profile, },
}, {
  headerMode: 'none',
});

class Root extends React.Component {
	render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}

export default Root;
