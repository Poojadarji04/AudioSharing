import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { getWidth, Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { showSnackbar } from '../../../global/snackbar';
import { ApiEndPoints, MethodType, StatusCode } from '../../../api/APIConstant';
import APIManager from '../../../api/APIManager';
import { useAuthStore } from '../../../global/userDataStore';
import { validateAndSignUp } from './useCreateAcc';

const CreateAccount = ({ route }: any) => {
  const { email, password } = route.params;
  const setUserData = useAuthStore(state => state.setUserData);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={Opacity}
        >
          <Image source={images.back} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            console.log('Header right pressed');
          }}
          activeOpacity={0.7}
        >
          <Image source={images.star} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}></Text>,
    });
  }, [navigation]);
  return (
    <View style={styles.vwMain}>
      <View style={{ flex: 1 }}>
        <Text style={styles.lblSignUp}>Create account</Text>

        <Text style={styles.lblEmail}>Username</Text>
        <View style={styles.vwEmail}>
          <TextInput
            placeholder="Your username"
            style={styles.txtUserName}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        <Text style={[styles.lblEmail, { marginTop: getWidth(16) }]}>
          Profile Emoji
        </Text>
        <View style={styles.vwEmail}>
          <TextInput
            placeholder="Type emoji"
            style={styles.txtUserName}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={emoji}
            onChangeText={setEmoji}
          />
        </View>

        <TouchableOpacity
          style={styles.vwGet}
          onPress={() =>
            validateAndSignUp(userName, emoji, email, password, navigation)
          }
        >
          <Text style={styles.lblGet}>Get to it</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.lblLogin}>
        Already have an account?
        <Text
          style={styles.lblLoginIn}
          onPress={() => navigation.navigate('Login')}
        >
          {' '}
          Log in
        </Text>
      </Text>
    </View>
  );
};

export default CreateAccount;
