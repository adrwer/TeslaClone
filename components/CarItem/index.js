import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props

  return (
    <View style={styles.carContainer}>
        
        <ImageBackground
          source={image}
          style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton type='primary' content={'custom order'} onPress={() => {console.warn("custom order was pressed");}}/>
          <StyledButton type='secondary' content={'existing inventory'} onPress={() => {console.warn("existing inventory was pressed");}}/>
        </View>
        
    </View>
  );
};

export default CarItem;
