import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { View, FlatList, TextInput, Button } from 'react-native';

import Card from '../../components/Card';
import ChatBubble from '../../components/ChatBubble';
import ChatStyles from './ChatStyles';
import MyButton from '../../components/MyButton';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Musa Isa',
      headerLeft: () => <Card style={ChatStyles.ImageIcon}></Card>,
    });
  }, []);

  const sendMessage = () => {
    // Send the message to the server or the recipient
    setMessages([
      ...messages,
      { content: inputText, sender: 'me', timestamp: new Date() },
    ]);
    setInputText('');
  };

  return (
    <View style={ChatStyles.container}>
      <FlatList
        style={ChatStyles.messageList}
        data={messages}
        renderItem={(item) => <ChatBubble item={item.item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={ChatStyles.inputContainer}>
        <TextInput
          style={ChatStyles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message here"
          placeholderTextColor="#888"
          multiline
        />
        <Button title="Send" onPress={sendMessage} />
        <MyButton></MyButton>
      </View>
    </View>
  );
};

export default Chat;
