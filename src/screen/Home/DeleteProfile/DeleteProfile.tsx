import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useDeleteProfile } from './useDeleteProfile'; // <-- Import hook

const DeleteProfile = (props: any) => {
  const navigation = useNavigation();
  const { deleteProfile } = useDeleteProfile();

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
      <Text style={styles.lblTitle}>Delete profile </Text>
      <Text style={styles.lblDesc}>
        Are you you sure you want to delete your profile? All your amazing bits
        will vanish into the ether...
      </Text>
      <TouchableOpacity style={styles.btnNo}>
        <Text style={styles.lblNo}>No, keep my profile </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnNo} onPress={deleteProfile}>
        <Text style={styles.lblNo}>Yes, delete </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteProfile;
