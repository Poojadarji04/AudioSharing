import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { getWidth, Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from './useLogin';

const Login = (props: any) => {
  const navigation = useNavigation();
  const { email, setEmail, password, setPassword, validateAndLogin } =
    useLogin();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

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
          onPress={() => props.navigation.pop()}
          activeOpacity={Opacity}
        >
          <Image source={images.star} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}></Text>,
    });
  }, [props.navigation]);

  return (
    <View style={styles.vwMain}>
      <Text style={styles.lblLogin}>Log in</Text>
      <Text style={styles.lblEmail}>Email address</Text>
      <View style={styles.vwEmail}>
        <TextInput
          placeholder="Email address"
          style={styles.txtEmail}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={[styles.lblEmail, { marginTop: getWidth(16) }]}>
        Password
      </Text>
      <View style={styles.vwEmail}>
        <TextInput
          placeholder="Enter Password"
          style={styles.txtEmail}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry={isPasswordHidden}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.imgHidePass}
          onPress={() => setIsPasswordHidden(!isPasswordHidden)}
        >
          <Image
            source={isPasswordHidden ? images.show : images.hide}
            style={styles.imgHidePass}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={styles.lblForgotPass}
        onPress={() => props.navigation.navigate('ForgotPassword')}
      >
        Forgot password?
      </Text>

      <TouchableOpacity style={styles.vwLogin} onPress={validateAndLogin}>
        <Text style={styles.lblLogIn}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
