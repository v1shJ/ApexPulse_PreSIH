import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = ({ latitude, longitude }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250, // Adjust height as needed
    width: '100%',
    marginTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
