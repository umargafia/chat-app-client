import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Kcolors } from './Constants';
import Card from './Card';

const ChatCard = ({ name, message }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.imageContainer}></View>
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.title}>{message}</Text>
      </View>
    </Card>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    margin: 10,
    backgroundColor: Kcolors.orange2,
  },

  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: Kcolors.white1,
    borderRadius: 50,
    marginRight: 15,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Kcolors.white1,
  },
  title: {
    fontSize: 18,
    color: Kcolors.gray,
  },
});
