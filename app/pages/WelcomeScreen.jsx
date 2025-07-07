import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo'; 

const { height, width } = Dimensions.get('window');

export default function WelcomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Image container with text at bottom */}
        <View style={styles.imageContainer}>
          <Image
            source={logoImage}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>Let’s get you setup</Text>
        </View>

        {/* Buttons section */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push('/pages/LoginScreen')}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => router.push('/pages/SignUpScreen')}
          >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
  },

  imageContainer: {
    width: '100%',
    height: height * 0.45,
    position: 'relative',  // for absolute positioning text inside
    justifyContent: 'flex-end', // align children bottom vertically
    alignItems: 'center',
     marginTop: 30
    
  },
  image: {
       width: '100%',
    height: height * 0.45,
      

  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 25,
    color: '#000004',
    textAlign: 'center',
    fontWeight:30,
    marginBottom: 10,
    marginTop: 5
  },

  bottomSection: {
    width: '60%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -10, // move buttons a little up
  },
  loginButton: {
    backgroundColor: '#2E57A4',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#6888DB',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 50,
  },
  loginText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#FFFFFE',
  },
  signupText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#FFFFFE',
  },
});
