import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ChatCard from '../../components/ChatCard';

const dummyData = [
  {
    id: 1,
    name: 'umar',
    text: 'hey how are you doing eienice eu ecec ie icei ',
  },
  {
    id: 2,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 3,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 4,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 5,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 6,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 7,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 8,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 9,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 10,
    name: 'musa',
    text: 'how you dey',
  },
  {
    id: 11,
    name: 'musa',
    text: 'how you dey',
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={(data) => {
          return (
            <ChatCard
              name={data.item.name}
              message={data.item.text}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
