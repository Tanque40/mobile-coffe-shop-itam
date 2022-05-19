// React
import React, {Component} from 'react';

// React Native
import {ScrollView, StyleSheet, Image} from 'react-native';

// UI kitten
import {Layout, Text, Menu, MenuItem, IndexPath} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';

// Containers
import {Loading} from '../../sections/containers/loading';

const API = 'https://coffeshopitam.herokuapp.com/api/v1/';

export class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      selected: [true],
      foods: [],
      selectedIndex: new IndexPath(0),
    };
  }

  componentDidMount() {
    const API_link = `${API}foods/byCategory/1`;
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
            foods: result.food,
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
    if (this.state.error) {
      return (
        <Layout>
          <Text> Error </Text>
        </Layout>
      );
    } else if (!this.state.isLoaded) {
      return <Loading />;
    }
    return (
      <Layout style={styles.container}>
        <ScrollView horizontal={true}>
          {this.props.items.map(item => (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() => console.log('como lo cambio?')}>
              <Layout
                level={this.state.selected[item.id - 1] ? '4' : '3'}
                style={styles.button}>
                <Text>{item.name}</Text>
              </Layout>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
        <Layout level="2" style={styles.menuContainer}>
          <ScrollView>
            <Menu
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setState({selectedIndex: index})}>
              {this.state.foods.map(food => (
                <MenuItem title={food.name} />
              ))}
            </Menu>
          </ScrollView>
        </Layout>
        <Layout style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://spoonacular.com/recipeImages/${
                this.state.foods[this.state.selectedIndex - 1].photo
              }-312x231.jpg`,
            }}
            style={styles.imageMenu}
          />
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  menuContainer: {
    padding: 12,
    height: 250,
  },
  button: {
    padding: 7,
    marginRight: 2,
  },
  imageContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageMenu: {
    height: 250,
    width: 600,
    resizeMode: 'contain',
  },
});
