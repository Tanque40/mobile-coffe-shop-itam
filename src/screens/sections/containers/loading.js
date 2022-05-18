// React
import React from 'react';

// React Native
import {StyleSheet} from 'react-native';

// UI
import {Layout, Spinner} from '@ui-kitten/components';

export const Loading = props => (
  <Layout style={styles.container} level="1">
    <Spinner />
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
