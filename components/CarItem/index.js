import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
        
        <ImageBackground
          source={require('../../assets/images/ModelS.jpeg')}
          style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton type='primary' content={'custom order'} onPress={() => {console.warn("custom order was pressed");}}/>
        <StyledButton type='secondary' content={'existing inventory'} onPress={() => {console.warn("existing inventory was pressed");}}/>
    </View>
  );
};

export default CarItem;
