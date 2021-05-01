import React, { FC } from 'react'
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { green } from '../../colors';

interface ITab {
  label: string,
  active?: boolean,
  width?: number,
  onPress?: () => void,
  marginRight?: number,
  marginLeft?: number
}

const Tab: FC<ITab> = ({active = false, label, width = 150, onPress, marginLeft = 20, marginRight = 20}) => {
  return(
    <TouchableOpacity onPress={onPress} style={{marginLeft, marginRight, paddingVertical: 10, width, backgroundColor: active? green : '#f0f1f6', borderRadius: 50}}>
      <Text style={{textAlign: 'center', color: active? '#fff' : '#000'}}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Tab;
