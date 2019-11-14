import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';

const list = [
    {
        name: 'Architecture',
        alias: 'architecture'
    },
    {
        name: 'Food',
        alias: 'food'
    },
    {
        name: 'Cars',
        alias: 'cars'
    },
    {
        name: 'Cats',
        alias: 'cats'
    }
];

class Categorieslist extends React.Component {
    constructor(props) {
        super(props);
        this.state.categories = list;
    }

    state = {
        categories: []
    }

    render() {
        return (
            <ScrollView>
                <List>
                    {
                        this.state.categories.map((item) => {
                            return (
                                <ListItem key={item.alias}>
                                    <Text>{item.name}</Text>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </ScrollView>
        );
    }
}

export default Categorieslist;