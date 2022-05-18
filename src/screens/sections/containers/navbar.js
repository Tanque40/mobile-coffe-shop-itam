// React
import React from 'react';

// React native
import {View, SafeAreaView, StyleSheet} from 'react-native';

// Ui-kitten
import {Layout, Text} from '@ui-kitten/components';

export const NavBar = props => (
  <Layout level="4">
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>CoffeShop ITAM</Text>
          <View style={styles.right}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
