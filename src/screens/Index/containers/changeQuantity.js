// React
import React, {useEffect, useState} from 'react';

// react-Native
import {StyleSheet} from 'react-native';

// UI Kitten
import {Text, Layout, Input, Button, Icon} from '@ui-kitten/components';

const UpArrow = props => <Icon {...props} name="arrow-up-outline" />;
const DownArrow = props => <Icon {...props} name="arrow-down-outline" />;

export const ChangeQuantity = props => {
  //console.log(props.quantity);
  const [state, setState] = useState({
    value: '0',
  });
  return (
    <Layout style={styles.container} level="2">
      <Input
        placeholder=""
        value={state.value}
        onChangeText={nextValue => {
          setState({
            value: nextValue,
          });
        }}
        //value={String(props.quantity)}
        //onChangeText={nextValue => {
        //  props.setQuantity(nextValue);
        //}}
        style={styles.input}
      />
      <Layout style={styles.buttonsContainer}>
        <Button
          //          style={styles.button}
          status="success"
          accessoryLeft={UpArrow}
          size="tiny"
          onPress={() => {
            setState({
              value:
                state.value < 100
                  ? String(parseInt(state.value, 10) + 1)
                  : state.value,
            });
          }}
        />
        <Button
          //        style={styles.button}
          status="danger"
          accessoryLeft={DownArrow}
          size="tiny"
          onPress={() => {
            setState({
              value:
                state.value > 0
                  ? String(parseInt(state.value, 10) - 1)
                  : state.value,
            });
          }}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    height: 5,
    width: 5,
  },
  buttonIcon: {
    height: 10,
    width: 10,
  },
});
