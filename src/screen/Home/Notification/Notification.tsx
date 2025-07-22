import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { images } from '../../../assets/images';
import { Opacity } from '../../../global/GConstants';
import { useNavigation } from '@react-navigation/native';
import { useNotifications } from './useNotification';

const Notification = (props: any) => {
  const navigation = useNavigation();
  const { notifications, fetchNotifications } = useNotifications();

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
          onPress={fetchNotifications}
          activeOpacity={Opacity}
          style={styles.headerButton}
        >
          <Image source={images.notification} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={styles.headerTitle}>Notifications</Text>,
    });
  }, [props.navigation]);

  const renderItem = ({ item }) => (
    <View style={styles.vwDeatils}>
      <Text style={styles.lblTitle}>{item.title}</Text>
      <Text style={styles.lblTitle}>{item.desc}</Text>
    </View>
  );

  return (
    <View style={styles.vwMain}>
      <FlatList
        contentContainerStyle={
          notifications.length === 0 && styles.emptyContainer
        }
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No messages found</Text>
        }
      />
    </View>
  );
};

export default Notification;
