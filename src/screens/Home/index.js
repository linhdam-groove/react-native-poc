import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from 'react-native-paper';

import { videoList } from './mockData';

import StyleCommon from 'theme/StyleCommon';

function Home() {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(!loading);
  };

  return (
    <View
      style={[
        StyleCommon.container,
        styles.homeScreen,
        { backgroundColor: colors.background, color: colors.text },
      ]}>
      <View style={styles.videoIntro}>
        <WebView
          startInLoadingState
          allowsFullscreenVideo={false}
          mediaPlaybackRequiresUserAction={true}
          onShouldStartLoadWithRequest={() => true}
          startInLoadingState={true}
          source={{
            uri: 'https://www.youtube.com/watch?v=gb0fhDfMAxw&list=RDMM&start_radio=1&rv=fbmvNG13M7Y',
          }}
        />
      </View>
      <FlatList
        data={videoList}
        renderItem={({ item }) => (
          <View style={styles.wrapperVideo}>
            <View style={styles.video}>
              <WebView
                startInLoadingState
                source={{ uri: item.uri }}
                mediaPlaybackRequiresUserAction={true}
                onShouldStartLoadWithRequest={() => true}
                startInLoadingState={true}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.videoTitle}>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    paddingVertical: 15,
  },
  video: {
    width: 150,
    height: 100,
    marginBottom: 15,
  },
  videoIntro: {
    height: 150,
    marginBottom: 20,
  },
  wrapperVideo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  videoTitle: {
    marginLeft: 10,
  },
});

export default Home;
