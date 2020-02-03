import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import ImageGrid from '../components/ImageGrid';

export default class GridScreen extends React.Component {

    state = {
        isLoaded: false,
        imagesList: []
    }

    async componentDidMount() {
        /**
         * navigation - прокидвывает react-navigation в пропсы.
         * В navigation.state.params находятся наши дополнительные данные,
         * которые мы передавали в главном экране
         */
        const { navigation } = this.props;

        try {
            const response = await fetch(
                navigation.state.params.collection,
                { method: 'GET', redirect: 'follow'}
            );
            const data = await response.json();
            this.setState({
                imagesList: data,
                isLoaded: true
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="small" style={styles.loader} />
                </View>
            );
        }

        return (<ImageGrid list={this.state.imagesList}/>);
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loaderContainer: {
        flex: 1
    }
});
