// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// UI Kitten
import {Layout, Text} from '@ui-kitten/components';

// Containers
import {NavBar} from '../../sections/containers/navbar';

// API connect
import {GetCategories} from '../../../../api/ApiConnection';

class Index extends Component {
  componentDidMount() {
    console.log(this.props);
    const categories = GetCategories(this.props);
    console.log(categories._W);
    this.categoriesList = categories._W.map((category, index) => {
      return <Text> {category} </Text>;
    });
  }

  render() {
    const categoriesList = this.categoriesList;
    if (categoriesList) {
      return (
        <Layout>
          <NavBar>
            <Text> Hola </Text>
          </NavBar>
          {categoriesList}
        </Layout>
      );
    } else {
      return <Text> Loading </Text>;
    }
  }
}

const mapStateToProps = state => {
  console.log('index');
  console.log(state);
  return {
    user: state.session.user._W,
  };
};

export default connect(mapStateToProps)(Index);
