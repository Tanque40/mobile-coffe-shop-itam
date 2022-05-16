// React
import React from 'react';

// React native
import {View, SafeAreaView, StyleSheet} from 'react-native';

// Ui-kitten
import {Text} from '@ui-kitten/components';

export const NavBar = props => (
  <View>
    <SafeAreaView>
      <View style={styles.container}>
        <Text>CoffeShop ITAM</Text>
        <View style={styles.right}>{props.children}</View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
