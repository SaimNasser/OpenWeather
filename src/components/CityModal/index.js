import React from 'react';
import { Text, View } from 'react-native';
import { height, width } from 'react-native-dimension';
import ModalWrapper from '../ModalWrapper';
import styles from './styles';
import Button from '../Button'
const CityModal = ({
  isVisible,
  onClose,

}) => {
  return (
    <ModalWrapper
      isVisible={isVisible}
      onClose={onClose}
      containerStyle={{ minHeight: height(15) }}>
      <View>
        <Text>dsd</Text>
      </View>
    </ModalWrapper>
  );
};
export default CityModal;
