import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { useSignUp } from './useSignUp';
import { styles } from './styles';
import { images } from '../../../assets/images';
import { fontFamily, getWidth } from '../../../global/GConstants';

const SignUp = (props: any) => {
  const {
    email,
    password,
    confirmPass,
    setEmail,
    setPassword,
    setConfirmPass,
    onCreateAccount,
  } = useSignUp();

  return (
    <View style={styles.vwMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Image source={images.sound} style={styles.imgSound} />
          <Text style={styles.lblSignUp}>Sign up</Text>

          <View style={styles.vwEmail}>
            <TextInput
              placeholder="Email address"
              style={styles.txtEmail}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.vwEmail, { marginTop: getWidth(14) }]}>
            <TextInput
              placeholder="Password"
              style={styles.txtEmail}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Image source={images.show} style={styles.imgHidePass} />
          </View>

          <View style={[styles.vwEmail, { marginTop: getWidth(14) }]}>
            <TextInput
              placeholder="Confirm password"
              style={styles.txtEmail}
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              secureTextEntry
              value={confirmPass}
              onChangeText={setConfirmPass}
            />
            <Image source={images.show} style={styles.imgHidePass} />
          </View>

          <TouchableHighlight
            style={styles.vwCreateAcc}
            onPress={onCreateAccount}
            underlayColor="#ccc"
          >
            <Text style={styles.lblCreateAcc}>Create account</Text>
          </TouchableHighlight>

          <Text style={styles.lblOther}>Other sign in options</Text>
          <View style={styles.vwOther}>
            <Image source={images.fb} />
            <Image source={images.google} />
            <Image source={images.apple} />
          </View>
        </View>

        <Text style={styles.lblLogin}>
          Already have an account?{' '}
          <Text
            style={styles.lblLoginIn}
            onPress={() => props.navigation.navigate('Login')}
          >
            Log in
          </Text>
        </Text>

        <Text style={styles.lblTerms}>
          Terms and conditions{' '}
          <Text style={{ fontFamily: fontFamily.regular }}>and</Text> Privacy
          policy
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;
