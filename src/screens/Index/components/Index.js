// React
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

// Redux
import {connect} from 'react-redux';

// UI Kitten
import {Layout, Text} from '@ui-kitten/components';

// Containers
import {MenuComponent} from './Menu';
import {NavBar} from '../../sections/containers/navbar';
import {Loading} from '../../sections/containers/loading';

// API connect
import {GetCategories} from '../../../../api/ApiConnection';

const API = 'https://coffeshopitam.herokuapp.com/api/v1/';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
    };
  }

  componentDidMount() {
    const API_link = `${API}categories`;
    fetch(API_link, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            categories: result.categories,
          });
          console.log(this.state);
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const {error, isLoaded, categories} = this.state;
    if (error) {
      return (
        <Layout>
          <Text>Error</Text>
        </Layout>
      );
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <Layout level="1" style={styles.container}>
          <NavBar>
            <Text> Hola </Text>
          </NavBar>
          <ScrollView>
            <MenuComponent items={categories} />
          </ScrollView>
        </Layout>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  console.log('index');
  console.log(state);
  return {
    user: state.session.user._W,
  };
};

export default connect(mapStateToProps)(Index);
