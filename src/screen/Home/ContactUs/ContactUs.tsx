import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import WebView from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { Opacity } from '../../../global/GConstants';
import { images } from '../../../assets/images';

const ContactUs = (props: any) => {
  const navigation = useNavigation();

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
        ></TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}>Contact Us</Text>,
    });
  }, [props.navigation]);

  return (
    <View style={styles.vwMain}>
      <WebView source={{ uri: 'https://google.com' }} />
    </View>
  );
};

export default ContactUs;
