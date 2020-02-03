import React from 'react';
import { List, ListItem, Text } from 'native-base';
import { ScrollView } from 'react-native';
import categories from '../data/categories';

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state.categories = categories;
    }

    state = {
        categories: []
    };

    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <ScrollView>
                <List>
                    {
                        categories.map((item) => {

                            const { collection, alias, name } = item;

                            return (
                                <ListItem
                                    key={alias}
                                    onPress={() => navigate('ImagesGrid', { collection, title: name })}
                                >
                                    <Text>{name}</Text>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </ScrollView>
        );
    }
}

export default CategoriesList;