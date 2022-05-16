// Basics
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Components
import LogIn from './screens/LogIn/components/LogIn';
import Index from './screens/Index/components/Index';

class AppLayout extends Component {
  render() {
    if (this.props.sessionStarted) {
      console.log(this.props);
      return <Index />;
    } else {
      console.log('before login');
      console.log(this.props);
      return <LogIn />;
    }
  }
}

const mapStateToProps = state => {
  console.log('app');
  console.log(state);
  return {
    sessionStarted: state.session.sessionStarted,
    user: state.session.user,
    pedido: state.session.pedido,
    cuenta: state.session.cuenta,
  };
};

export default connect(mapStateToProps)(AppLayout);
