/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Avatar from './components/design/Avatar';
import Button from './components/design/Button';
import Title from './components/design/Title';

const avatarUri =
  'https://avatars2.githubusercontent.com/u/37181742?s=460&u=304f0ea911bf02aa46f8ada9ad35d47cc1d3ca1b&v=4';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Avatar size={80} uri={avatarUri} borderWidth={2} />
        <Title title="Teacher Burhan" />
        <Button title="Press" onPress={() => {}} />
      </SafeAreaView>
    </>
  );
};

export default App;
