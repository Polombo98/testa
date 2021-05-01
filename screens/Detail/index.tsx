import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { green } from '../../colors';
import Header from '../../components/Header';
import LoaderWrapper from '../../components/LoaderWrapper';
import Tab from '../../components/Tab';
import { RootStackParamList } from '../../App';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: any
};

interface listItem {
  id: number,
  name: string,
  price: string,
  quantity: number,
}

const DetailScreen: FC<Props> = ({navigation, route: { params: {id, label} }}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<listItem[]>([]);
  useEffect(() => {
    (async () => {
      try{
        const response = await fetch(`http://dev01.thrownomore.no:5001/get_offers/1`)
        setIsLoading(false);
        const listResponse = await response.json();
        setList(listResponse.result);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [])
  const goBack = () => navigation.goBack();
  return(
    <SafeAreaView style={styles.mainWrapper}>
      <Header label={label}>
        <Tab label="<--" width={40} marginRight={10} onPress={goBack}/>
        <Tab label="Offers" width={120} active marginLeft={10}/>
        <Tab label="Details" width={120}/>
      </Header>
      {
        isLoading && <LoaderWrapper />
      }
      <View style={styles.listWrapper}>
        {
          list.map(({id, name, price, quantity}) => 
            <View key={id} style={styles.listItemWrapper}>
              <View style={styles.chipWrapper}>
                <Text style={styles.chipText}>{quantity}</Text>
              </View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
          )
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listWrapper: {
    paddingHorizontal: 16,
    marginTop: 20
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: '#999',
    borderBottomWidth: 1,
    paddingVertical: 16
  },
  listItemTextWrapper: {
    marginLeft: '20%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  name: {
    fontSize: 18
  },
  price: {
    fontSize: 12
  },
  chipWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: green,
    borderRadius: 500
  },
  chipText: {
    color: '#fff'
  }
})

export default DetailScreen;
