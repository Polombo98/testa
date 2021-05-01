import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { green } from '../../colors';

const Burger: FC = () => {

 return(
   <View>
     <View style={styles.line}/>
     <View style={[styles.line, {backgroundColor: '#868686'}]}/>
     <View style={styles.line}/>
   </View>
 ) 
}

const styles = StyleSheet.create({
  mainWrapper: {

  },
  line: {
    width: 25,
    marginVertical: 2,
    height: 3,
    borderRadius: 13,
    backgroundColor: green
  },
})

export default Burger;
