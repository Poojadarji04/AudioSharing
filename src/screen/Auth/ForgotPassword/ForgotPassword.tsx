import React, { useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useForgotPassword } from './useForgotPass';

const ForgotPassword = (props: any) => {
  const { email, onChangeEmail, onSendCodePress } = useForgotPassword();

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => props.navigation.pop()}
          activeOpacity={Opacity}
        >
          <Image source={images.back} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => console.log('Header right pressed')}
          activeOpacity={0.7}
        >
          <Image source={images.star} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}></Text>,
    });
  }, [props.navigation]);

  return (
    <View style={styles.vwMain}>
      <View style={{ flex: 1 }}>
        <Text style={styles.lblForgotPass}>Forgot password?</Text>
        <Text style={styles.lblDesc}>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </Text>
        <Text style={styles.lblEmail}>Email address</Text>
        <View style={styles.vwEmail}>
          <TextInput
            placeholder="Enter your email address"
            style={styles.txtEmail}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={email}
            onChangeText={onChangeEmail}
          />
        </View>
        <TouchableOpacity style={styles.vwSendCode} onPress={onSendCodePress}>
          <Text style={styles.lblSendCode}>Send code</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.lblPass}>
        Remember password? <Text style={styles.lblLogin}>Log in</Text>
      </Text>
    </View>
  );
};

export default ForgotPassword;
