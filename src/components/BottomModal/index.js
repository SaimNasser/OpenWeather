import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { height, width } from 'react-native-dimension';
import ModalWrapper from '../ModalWrapper';
import styles from './styles';
import Button from '../Button'
import { Cities, WeekDays } from '../../utills/dummydata';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity, selectWeekday, setCity, setWeekday } from '../../Redux/features/citySlice';
import { ModalTypes } from '../../utills/Enums';
import cityImg from '../../assets/images/cityImg.png'
import calendarImg from '../../assets/images/calendarImg.png'
const BottomModal = ({
  isVisible,
  onClose,
  type = ModalTypes.CITY

}) => {
  const selectedCity = useSelector(selectCity)
  const day = useSelector(selectWeekday)
  const dispatch = useDispatch()
  const onPress = (item) => {
    if (type == ModalTypes.CITY) {
      dispatch(setCity(item))
    } else {
      dispatch(setWeekday(item))
    }
    onClose()
  }
  const renderItem = ({ item, index }) => {
    const isSelected = type == ModalTypes.CITY ? item?.name == selectedCity?.name : item?.name == day?.name
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        activeOpacity={0.7}
        style={isSelected ? styles.selectedItem : styles.itemContainer}>
        <Text style={isSelected ? styles.itemNameSelected : styles.itemName}>{item?.name}</Text>
      </TouchableOpacity >
    )
  }

  return (
    <ModalWrapper
      isVisible={isVisible}
      onClose={onClose}
      containerStyle={styles.modalContainer}>
      <View style={styles.mainContainer}>
        <Image source={type == ModalTypes.CITY ? cityImg : calendarImg} style={styles.cityImg} resizeMode={'contain'} />
        <FlatList
          data={type == ModalTypes.CITY ? Cities : WeekDays}
          style={styles.list}
          renderItem={renderItem}
          keyExtractor={item => item?.name}
        />
      </View>
    </ModalWrapper>
  );
};
export default BottomModal;
