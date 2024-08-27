import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = ({ latitude, longitude }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapWrapper}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    marginTop: 20,
    padding: 10, // Add padding to the container
    backgroundColor: 'black', // Optional: background color for contrast
  },
  mapWrapper: {
    flex: 1,
    borderRadius: 15, // Set the desired border radius
    overflow: 'hidden', // Clip the map content to the border radius
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
