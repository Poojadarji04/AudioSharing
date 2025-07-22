import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { getWidth, Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useSetting } from './useSetting';

const Setting = (props: any) => {
  const navigation = useNavigation();
  const { confirmLogout } = useSetting();

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
        >
          <Image source={images.notification} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}> </Text>,
    });
  }, [props.navigation]);

  return (
    <View style={styles.vwMain}>
      <TouchableOpacity
        style={styles.vwProfile}
        onPress={() => props.navigation.navigate('ChangeUser')}
      >
        <Image source={images.editProfile} style={styles.imgEdit} />
        <Text style={styles.lblEditProfile}>Edit profile</Text>
        <Image source={images.rightArrow} style={styles.imgRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.vwProfile, { marginTop: getWidth(12) }]}
        onPress={() => navigation.navigate('ChangePass')}
      >
        <Image source={images.changePass} style={styles.imgEdit} />
        <Text style={styles.lblEditProfile}>Change password</Text>
        <Image source={images.rightArrow} style={styles.imgRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.vwProfile, { marginTop: getWidth(12) }]}
        onPress={() => props.navigation.navigate('ContactUs')}
      >
        <Image source={images.contactUs} style={styles.imgEdit} />
        <Text style={styles.lblEditProfile}>Contact us</Text>
        <Image source={images.rightArrow} style={styles.imgRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.vwProfile, { marginTop: getWidth(12) }]}
        onPress={() => props.navigation.navigate('DeleteProfile')}
      >
        <Image source={images.deleteProfile} style={styles.imgEdit} />
        <Text style={styles.lblEditProfile}>Delete profile</Text>
        <Image source={images.rightArrow} style={styles.imgRightArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLogOut} onPress={confirmLogout}>
        <Text style={styles.lblLogOut}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
