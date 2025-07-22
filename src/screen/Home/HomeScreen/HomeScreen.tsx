import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { images } from '../../../assets/images';

const tabs = ['Latest', 'Leaderboard', 'Following'];

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Latest');

  return (
    <View style={styles.vwMain}>
      <View style={styles.vwTab}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.selectedTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.selectedText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Image source={images.user_profile} style={styles.imgProfile} />
      <Text style={styles.lblName}>user_name_123</Text>
      <Text style={styles.lblMin}>28 min</Text>
      <Image source={images.play} style={styles.imgPlay} />
      <Text style={styles.lblPlay}>Tap to play</Text>
      <View style={styles.vwCount}>
        <Text style={styles.lblCountUp}>109</Text>
        <Text style={styles.lblCountUp}>63</Text>
      </View>
      <View style={styles.vwThumbs}>
        <Image source={images.thumbs_up} />
        <Image source={images.share} />
        <Image source={images.thumbs_down} />
      </View>
    </View>
  );
};

export default HomeScreen;
