import React, { useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { getWidth, Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';
import { useEditProfile } from './useEditProfile';
import useUserStore from '../../../global/useUserStore';

const ChangeUser = (props: any) => {
  const { userData } = useUserStore();

  const { userName, setUserName, emoji, setEmoji, validateAndSubmit, loading } =
    useEditProfile(userData);

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
      <Text style={styles.lblTitle}>Change Username</Text>

      <Text style={styles.lblUserName}>New Username</Text>
      <View style={styles.vwName}>
        <TextInput
          placeholder="Your username"
          style={styles.txtName}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <Text style={[styles.lblUserName, { marginTop: getWidth(17) }]}>
        New Emoji
      </Text>
      <View style={styles.vwName}>
        <TextInput
          placeholder="Type emoji"
          style={styles.txtName}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={emoji}
          onChangeText={setEmoji}
        />
      </View>

      <TouchableOpacity
        style={styles.btnUpdate}
        onPress={validateAndSubmit}
        disabled={loading}
      >
        <Text style={styles.lblUpdate}>
          {loading ? 'Updating...' : 'Update'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeUser;
