import {View, Text, FlatList} from 'react-native';
import React from 'react';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreens = () => {
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({item}) => <ChatListItem chat={item} />}
      />
    </View>
  );
};

export default ChatsScreens;
