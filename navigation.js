import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesList from './screens/CategoriesList';
import GridScreen from './screens/GridScreen';

const Stack = createStackNavigator({
    MainList: {
        screen: CategoriesList,
        navigationOptions: {
            title: 'Photo Categories'
        }
    },
    ImagesGrid: {
        screen: GridScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: navigation.state.params.title
            };
        }
    }
},
{
    initialRouteName: 'MainList'
});

export default createAppContainer(Stack);