import React, { useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { getWidth, Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useChangePassword } from './useChangePass';

const ChangePass = (props: any) => {
  const navigation = useNavigation();

  const {
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
    onChangePassword,
  } = useChangePassword();

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => props.navigation.pop()}
          activeOpacity={Opacity}
          style={styles.headerButton}
        >
          <Image source={images.back} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notification')}
          activeOpacity={Opacity}
          style={styles.headerButton}
        />
      ),
      headerTitle: () => (
        <Text style={styles.headerTitle}>Change Password</Text>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.vwMain}>
      <Text style={styles.lblTittle}>Change Password</Text>
      <Text style={styles.lblDesc}>Please type something you’ll remember</Text>

      <Text style={styles.lblNewPass}>New password</Text>
      <View style={styles.vwResetPass}>
        <TextInput
          placeholder="Must be 8+ characters"
          style={styles.txtResetPass}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
      </View>

      <Text style={[styles.lblNewPass, { marginTop: getWidth(15) }]}>
        Confirm new password
      </Text>
      <View style={styles.vwResetPass}>
        <TextInput
          placeholder="Re-enter password"
          style={styles.txtResetPass}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.btnChangePass} onPress={onChangePassword}>
        <Text style={styles.lblChangePass}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePass;
