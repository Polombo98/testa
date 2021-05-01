import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Burger from '../Burger';


interface IHeaderProps {
  label: string
}

const Header: FC<IHeaderProps> = ({label, children}) => {

  const image = require('../../assets/logo.jpeg');
 return(
   <View style={styles.mainWrapper}>
     <View style={styles.mainInfoRow}>
        <Image source={image} style={{width: 40, height: 40}}/>
        <Text>{label}</Text>
        <Burger />
     </View>
     <View style={styles.secondaryInfoRow}>
      {children}
     </View>
   </View>
 ) 
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  mainInfoRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  secondaryInfoRow: {
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: 'row',

  }
})

export default Header;
