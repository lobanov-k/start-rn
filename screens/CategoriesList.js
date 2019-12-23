import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';
import list from '../data/categories';

class Categorieslist extends React.Component {
    constructor(props) {
        super(props);
        this.state.categories = list;
    }

    state = {
        categories: []
    };

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