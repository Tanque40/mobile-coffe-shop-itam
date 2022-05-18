// React
import React, {useState} from 'react';

// React Native
import {ScrollView, StyleSheet} from 'react-native';

// UI kitten
import {Layout, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';

const changeMenu = id => {};

export const Menu = props => {
  const [state, setState] = useState({});

  return (
    <Layout style={styles.container}>
      <ScrollView horizontal={true}>
        {props.items.map(item => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => console.log('wi')}>
            <Layout level="2" style={styles.button}>
              <Text>{item.name}</Text>
            </Layout>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  button: {
    padding: 7,
    marginRight: 2,
  },
});
