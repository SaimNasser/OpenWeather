import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { height } from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import AppColors from '../../utills/AppColors';
import CommonStyles from '../../utills/CommonStyles';
import styles from './styles';
export default function CityDropMenu({
  cities = ['Islamabad', 'Lahore', 'Pindi', 'Karachi', 'Sargodha'],
  selectedCity = 'Select City',
  setSelectedCity = () => { },
}) {
  const onSelectOption = (index) => setSelectedCity(cities[index]?.name)
  const renderRow = (city) =>
    <View style={styles.cityRow}>
      <Text style={styles.cityText}>{city?.name}</Text>
    </View>
  // const renderSearch = () =>
  //   <View style={styles.searchContainer}>
  //     {console.log(props)}
  //     <TextInput
  //       placeholder='Search... '
  //       style={styles.searchInput}
  //     />
  //   </View>
  return (
    <ModalDropdown
      // showSearch
      // renderSearch={renderSearch}
      onSelect={onSelectOption}
      renderRow={renderRow}
      renderButtonProps={{ activeOpacity: 0.7 }}
      options={cities}
      dropdownStyle={styles.dropDownContainer}
      dropdownTextStyle={styles.dropText}>
      <View style={styles.container}>
        <Entypo
          name={'location'}
          color={AppColors.black}
          size={height(2)}
          style={CommonStyles.marginRight_3}
        />
        <Text style={styles.text}>{selectedCity}</Text>
        <Entypo name={'chevron-down'} color={AppColors.black} size={height(2.2)} />
      </View>
    </ModalDropdown>
  );
}
