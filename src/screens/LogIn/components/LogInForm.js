// Basics
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {logIn} from '../../../../actions/SessionActions';

// Design
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {Layout, Input, Icon, Button} from '@ui-kitten/components';

class LogInForm extends Component {
  // Set state to the form
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: '',
      secureTextEntry: true,
    };
  }

  // AlertIcon for errors in password
  AlertIcon = props => {
    <Icon {...props} name="alert-circle-outline" />;
  };

  // Change state of secure entry ? true :false
  toggleSecuryEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  // Show eye-Icon to secure/notSecure Password
  renderIcon = props => (
    <TouchableWithoutFeedback onPress={this.toggleSecuryEntry}>
      <Icon
        {...props}
        name={this.state.secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
      />
    </TouchableWithoutFeedback>
  );

  // LogIn fuction send instruccion to Reducer
  LogIn = () => {
    const data = {
      user: this.state.user,
      password: this.state.password,
    };
    console.log(data);
    this.props.logIn(data);
  };

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.input}>
          <Input
            value={this.state.user}
            label="User"
            placeholder="Type user"
            onChangeText={nextValue =>
              this.setState({
                user: nextValue,
              })
            }
          />
        </Layout>

        <Layout style={styles.input}>
          <Input
            value={this.state.password}
            label="Password"
            placeholder="Type your password"
            accessoryRight={this.renderIcon}
            captionIcon={this.AlertIcon}
            secureTextEntry={this.state.secureTextEntry}
            onChangeText={nextVal =>
              this.setState({
                password: nextVal,
              })
            }
          />
        </Layout>

        <Layout style={styles.submmitContainer}>
          <Button
            style={styles.submmit}
            onPress={() => {
              var res = this.props.logIn(this.state.user, this.state.password);
              console.log(res);
            }}>
            Log In
          </Button>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    fontSize: 14,
    marginTop: 20,
  },
  submmitContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  submmit: {
    width: 200,
  },
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logIn,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(LogInForm);
