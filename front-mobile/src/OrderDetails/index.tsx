
import React from 'react';
import { StyleSheet, Text, View,Image, Alert ,Linking} from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { Order } from '../types';
import OrderCard from '../OrderCard';
import { confirmDelivery } from '../api';

type Props = {
  route:{
    params:{
      order:Order;
    }
  }
}

function OrderDetails({route}:Props) {
  const {order} = route.params;
  const navigation = useNavigation();
  const handleOnCanlel = () => {
    navigation.navigate('Orders');
  } 
  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(()=>{
        Alert.alert(`Pedido ${order.id} confirmado con sucesso!`);
        navigation.navigate('Orders');
      })
      .catch(()=>{
        Alert.alert(`holve um erro ao confirmar o pedido ${order.id}`);
      })
  }

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)

  }
 
  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order}/>
        <RectButton 
          style={styles.button}
          onPress={handleStartNavigation}
        >
          <Text  style={styles.buttonText}>Iniciar Navegação</Text>
        </RectButton>
        <RectButton
          style={styles.button}
          onPress={handleConfirmDelivery}
        >
          <Text  style={styles.buttonText}>Confirmar Entrega</Text>
        </RectButton>
        <RectButton
          style={styles.button}
          onPress={handleOnCanlel}>
          <Text  style={styles.buttonText}>Cancelar</Text>
        </RectButton>
      
      </View>   

    </>
   

  );
}

const styles = StyleSheet.create(
  {
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24,
      fontFamily: 'OpenSans_700Bold'
    }
  }
);
export default OrderDetails;