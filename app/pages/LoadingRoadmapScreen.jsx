import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { logoImage } from '../../constants/logo'; // ✅ Use your previous logo path

const { width } = Dimensions.get('window');

export default function GeneratingScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {/* Logo Image */}
        <Image source={logoImage} style={styles.image} resizeMode="contain" />

        {/* Title */}
        <Text style={styles.title}>Awesome !</Text>

        {/* Description */}
        <Text style={styles.description}>
          I’m working on creating your{'\n'}custom roadmap, this will take{'\n'}a few seconds.
        </Text>

        {/* Loading Icon */}
        <Text style={styles.hourglass}>⌛</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.55, // Bigger logo like screenshot
    height: width * 0.55,
    tintColor: '#4C6FBF',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 25,
    lineHeight:32,
    color: '#5B5B5B',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: '#5B5B5B',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 40,
  },
  hourglass: {
    fontSize: 40,
    color: '#242425',
     marginTop: 70,
  },
});
