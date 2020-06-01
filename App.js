import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import styles from './style.scss';
function App(props){
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  }); //Shall become array or?
  useEffect(()=>{
    //if(location.latitude )
  },[])
const styles_ = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


const onMapPress = (e) => {
  console.log(e.nativeEvent.coordinate);
  setLocation(e.nativeEvent.coordinate);

}

return (
  <View style={styles_.container}>
  <MapView
    style={styles_.mapStyle}
    onPress={e => onMapPress(e)}
    >
      <Marker coordinate = {{latitude: location.latitude,longitude: location.longitude}}
       pinColor = {"purple"} // any color
       title={"YOU ARE HERE"}
       description={"description"}/>
  </MapView>
  <View style={styles.container}></View>
  </View>
);

}

export default App;
