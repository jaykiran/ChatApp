/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export default ({logoStyle, logoTextStyle}) => (
  <View style={[styles.logo, logoStyle]}>
    <Image source={require('../../../assets/chat2.png')} style={{width: 100, height: 100, alignSelf: "center"}} />
    {/* <Text style={[styles.text, logoTextStyle]}>S</Text> */}
  </View>
);
