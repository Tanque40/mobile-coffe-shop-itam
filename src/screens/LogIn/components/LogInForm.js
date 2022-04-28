// Basics
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Design
import { TouchableWithoutFeedback } from  '@ui-kitten/components/devsupport';
import {
    Layout,
    Input,
    Icon,
    Button
} from '@ui-kitten/components';

class LogInForm extends Component {
    state = {
        user: '',
        password: '',
        secureTextEntry: true,
    }

    AlertIcon = (props) => {
        <Icon {...props} name='alert-circle-outline' />
    }

    toggleSecuryEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    renderIcon = (props) => {
        <TouchableWithoutFeedback onPress={this.toggleSecuryEntry}>
            <Icon 
                {...props} 
                name={
                    this.state.secureTextEntry ? 'eye-off' : 'eye'
                }            
            />
        </TouchableWithoutFeedback>
    }




    render() {
        return(
            
            <Layout style={styles.container}>

                <Layout style={styles.input}>
                    <Input 
                        value={this.state.user}
                        label='User'
                        placeholder='Type user'
                        onChangeNext={
                            nextValue => this.setState({
                                user: nextValue,
                            })
                        }
                    />
                </Layout>

                <Layout style={styles.input}>
                    <Input 
                        value={this.state.password}
                        label='Password'
                        placeholder='Type your password'
                        accesoryRight={this.renderIcon}
                        captionIcon={this.AlertIcon}
                        secureTextEntry={this.state.secureTextEntry}
                        onChangeNext={
                            nextValue => this.setState({
                                password: nextValue,
                            })
                        }
                    />    
                </Layout>

            </Layout>

        )

    }

}

const styles = StyleSheet.create({
  
    container: {
        padding: 10,
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
    }

})

export default connect(null)(LogInForm);
