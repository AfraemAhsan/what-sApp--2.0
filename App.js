import React from 'react';

import {StatusBar, StyleSheet, View} from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
// import ChartListItem from './src/components/ChatListItem';

const App = () => {
  // const chat = {
  //   id: '1',
  //   user: {
  //     image:
  //       'https://i.pinimg.com/474x/2c/0b/cd/2c0bcd9d3ecffa4d672af702b0fe9aca.jpg',
  //     name: 'Hasanul Banna 2',
  //   },
  //   lastMessage: {text: 'Oke', createdAt: '07:30'},
  // };
  return (
    <View style={styles.container}>
      <ChatScreen />
      {/* <ChartListItem chat={chat} />
      <ChartListItem chat={chat} />
      <ChartListItem chat={chat} /> */}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    justifyContent: 'center',
  },
});

export default App;
