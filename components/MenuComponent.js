import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

// state information can only be stored in class component
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };    

    render() {

        const renderMenuItem = ({item, index}) => {
        return (
                // hideChevron default: right arrow in each element
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                />
                );
        };

        //  need to pass this to dishDetail component
        const { navigate } = this.props.navigation;

        return (
                // data is an array of items
                // renderItem iterate each item and render
                // every item in the list requires its own key
                <FlatList 
                    data={this.state.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
        );
    }
}


export default Menu;