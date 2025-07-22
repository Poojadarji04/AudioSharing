import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { getWidth, Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useResetPassword } from './useResetPass';

const ResetPassword = ({ route }: any) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    onResetPress,
  } = useResetPassword(id);

  // New states to manage password visibility
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          onPress={() => console.log('Header right pressed')}
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
        <Text style={styles.lblResetPass}>Reset password</Text>
        <Text style={styles.lblDesc}>
          Please type something you’ll remember
        </Text>

        <Text style={styles.lblNewPass}>New password</Text>
        <View style={styles.vwPass}>
          <TextInput
            placeholder="must be 8 characters"
            style={styles.txtNewPass}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showNewPassword}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Image
              source={showNewPassword ? images.hide : images.show}
              style={styles.imgPass}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.lblNewPass, { marginTop: getWidth(22) }]}>
          Confirm new password
        </Text>
        <View style={styles.vwPass}>
          <TextInput
            placeholder="repeat password"
            style={styles.txtNewPass}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Image
              source={showConfirmPassword ? images.hide : images.show}
              style={styles.imgPass}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.vwResetPass} onPress={onResetPress}>
          <Text style={styles.lblResetPassword}>Reset password</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.lblAccount}>
        Already have an account? <Text style={styles.lblLogin}>Log in</Text>
      </Text>
    </View>
  );
};

export default ResetPassword;
