import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from 'expo-checkbox';

import MyTextField from '../../components/MyTextField';
import { Kcolors } from '../../components/Constants';
import MyButton from '../../components/MyButton';
import { useNavigation } from '@react-navigation/native';
import { LoginStyles } from './LoginStyles';

export default function Login() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();

  const handleToggleCheckBox = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const handleSubmit = () => {
    navigation.navigate('MyTabNavigator', { screen: 'Home' });
  };

  return (
    <LinearGradient
      colors={[Kcolors.orange1, Kcolors.orange2]}
      style={LoginStyles.container}
    >
      <Text style={LoginStyles.header}>Login</Text>
      <MyTextField text={'Email'} type="email-address" />
      <MyTextField
        text={'Password'}
        props={{ secureTextEntry: toggleCheckBox ? false : true }}
      />
      <Pressable
        style={LoginStyles.checkBoxContainer}
        onPress={handleToggleCheckBox}
      >
        <CheckBox
          value={toggleCheckBox}
          onValueChange={handleToggleCheckBox}
          style={LoginStyles.checkBox}
        />
        <Text style={LoginStyles.showPasswordText}>
          Show Password
        </Text>
      </Pressable>
      <View style={LoginStyles.buttonContainer}>
        <MyButton text={'Submit'} onTap={handleSubmit} />
      </View>
    </LinearGradient>
  );
}
