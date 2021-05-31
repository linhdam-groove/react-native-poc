import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from 'react-native-paper';

// import { videoList } from './mockData';
import { YOUTUBE_URI } from 'constants/apiUrl';

import StyleCommon from 'themes';

function Home() {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[
        StyleCommon.container,
        styles.homeScreen,
        {
          backgroundColor: colors.background,
          color: colors.primary,
        },
      ]}>
      <View style={styles.videoIntro}>
        <WebView
          startInLoadingState
          allowsFullscreenVideo={false}
          allowsInlineMediaPlayback={true}
          source={{
            uri: YOUTUBE_URI,
          }}
        />
      </View>
      {/* <FlatList
        data={videoList}
        renderItem={({ item }) => (
          <View style={styles.wrapperVideo}>
            <View style={styles.video}>
              <WebView
                startInLoadingState
                source={{ uri: item.uri }}
                mediaPlaybackRequiresUserAction={true}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.videoTitle, colors.primary]}>
                {item.title}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      /> */}
    </SafeAreaView>
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
    height: '100%',
    marginBottom: 20,
    // paddingBottom: 20,
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
