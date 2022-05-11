// Basics
import React, {Component} from 'react';

//Redux
import {connect} from 'react-redux';

// Functions of React-Native
import {StyleSheet, TouchableOpacity} from 'react-native';

// Design
import {Text, Layout, Button} from '@ui-kitten/components';

// Components
import LogInForm from './LogInForm';

class LogIn extends Component {
  signUp = () => {
    this.props.dispatch({
      type: 'NEW_USER',
      payload: {},
    });
  };

  render() {
    return (
      <Layout style={styles.container}>
        <Layout level="2" style={styles.form}>
          <Text category="h2"> Coffe Shop ITAM </Text>
          <Text category="h3"> Log In </Text>

          <LogInForm />

          <Layout>
            <TouchableOpacity onPress={this.signUp}>
              <Button appearance="ghost">Sign Up</Button>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  signUpContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#3366ff',
    width: 150,
  },
});

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(LogIn);
