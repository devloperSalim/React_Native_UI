import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo'; 

const { width, height } = Dimensions.get('window');

export default function GetStart() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Image
          source={logoImage}
          style={styles.image}
        />

        <Text style={styles.title}>Welcome to Platonis !</Text>

        <Text style={styles.subtitle}>
          Before we can start, let us{'\n'}go through some details to{'\n'}create the ideal roadmap{'\n'}for you.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/pages/CurrentSituationScreen')}>
          <Text style={styles.buttonText} >Start</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 200,
    height: 200,
    tintColor: '#3f66c9',
    marginBottom: 5,
    
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#615B5E',
    marginBottom: 30,
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#615B5E',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2E57A4',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#FFFFFE',
  },
});
