import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from 'react-native-paper';

import StyleCommon from 'theme/StyleCommon';

function Home() {
  const { colors } = useTheme();

  return (
    <View
      style={[
        StyleCommon.container,
        StyleCommon.centerContent,
        { backgroundColor: colors.background, color: colors.text },
      ]}>
      <Text>Homepage</Text>
      <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

export default Home;
