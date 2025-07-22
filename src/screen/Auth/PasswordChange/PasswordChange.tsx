import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { images } from '../../../assets/images';

const PasswordChange = (props: any) => {
  return (
    <View style={styles.vwMain}>
      <Image source={images.passChange} />
      <Text style={styles.lblTitle}>Password changed</Text>
      <Text style={styles.lblDesc}>
        Your password has been changed succesfully
      </Text>
      <TouchableOpacity
        style={styles.vwLogin}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text style={styles.lblLogin}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordChange;
