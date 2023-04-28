import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Kcolors } from './Constants';

const ChatBubble = ({ item }) => {
  return (
    <View
      style={
        item.sender === 'me' ? styles.myMessage : styles.theirMessage
      }
    >
      <Text
        style={
          item.sender === 'me'
            ? styles.messageContent
            : styles.thereMessageContent
        }
      >
        {item.content}
      </Text>
      <Text style={styles.messageTimestamp}>
        {item.timestamp.toLocaleString()}
      </Text>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Kcolors.orange2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '70%',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Kcolors.white5,
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '70%',
  },
  messageContent: {
    color: '#fff',
    fontSize: 16,
  },
  thereMessageContent: {
    color: Kcolors.dark5,
    fontSize: 16,
  },
  messageTimestamp: {
    color: '#888',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
