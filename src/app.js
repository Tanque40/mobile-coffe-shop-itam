// Basics
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import LogIn from './screens/LogIn/components/LogIn';
import { Text, Layout } from '@ui-kitten/components';

class AppLayout extends Component{

    render () {
        return (
        
            <LogIn />

        );
    }
}

const mapStateToProps = (state) => {
    const { session } = state
    return { session }
}

export default connect(mapStateToProps)(AppLayout)
