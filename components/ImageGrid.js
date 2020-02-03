import React from 'react';
import {Card, CardItem} from 'native-base';
import {View, ScrollView, StyleSheet, Dimensions, Image} from 'react-native';

/**
 * Получаем объект экрана через API RN
 * чтобы в дальнейшем использовать для расчетов ширину 
 */
const window = Dimensions.get('window');
const imagesWidth = window.width - 20;

export default class ImageGrid extends React.Component {
    render() {
        const { list } = this.props;

        return (
            <ScrollView>
                {list.map((item) => {
                    const imageRatio = imagesWidth/item.width;

                    return(
                        <View key={item.url} style={styles.cardWrapper}>
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    <Image source={{uri: item.url}}
                                        style={{
                                            ...styles.image,
                                            height: item.height * imageRatio
                                        }}
                                    />
                                </CardItem>
                            </Card>
                        </View>
                    );
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardWrapper: {
        borderRadius: 20,
        marginBottom: 10
    },
    card: {
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    cardItem: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },
    image: {
        height: 300,
        width: '100%',
        borderRadius: 20,
        width: imagesWidth
    }
});
