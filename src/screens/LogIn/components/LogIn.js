// Basics
import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

// Functions of React-Native
import { StyleSheet, TouchableOpacity } from 'react-native'

// Design
import { 
    Text,
    Layout,
} from '@ui-kitten/components';

class LogIn extends Component {
    
    render() {
        return(

            <Layout stytle={styles.container}>
                <Text> Hola LogIn </Text>
            </Layout>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

function mapStateToProps(state){
    return {
        state 
    }
}

export default connect(mapStateToProps)(LogIn);
