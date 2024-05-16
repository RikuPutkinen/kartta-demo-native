import { Marker } from 'react-native-maps'
import { Text, StyleSheet, View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  image: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  text: {
    textAlign: 'center',
    color: 'red',
  },
})

export default function MapMarker({ locationObj }) {
  const { name, location } = locationObj
  console.log(locationObj)

  const latLng = {
    latitude: location.coordinates[1],
    longitude: location.coordinates[0],
  }

  return (
    <Marker coordinate={latLng}>
      <View style={styles.container}>
        <Image
          source={require('../assets/marker-251.png')}
          style={styles.image}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </Marker>
  )
}
