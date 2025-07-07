import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { logoImage } from '../../constants/logo'; 


const primaryBlue = '#2957D0';

export default function ForgotPasswordScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Title */}
        <Text style={[styles.title, styles.spacedItem]}>Forgot password</Text>

        {/* Image container */}
        <View style={[styles.imageContainer, styles.spacedItem]}>
          <Image
            source={logoImage}
            style={styles.image}
          />
        </View>

        {/* Label */}
        <Text style={[styles.label, styles.spacedItem]}>
          Enter the email address associated with your account
        </Text>

        {/* Input */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={[styles.input, styles.spacedItem]}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Button */}
        <TouchableOpacity style={[styles.button, styles.buttonPosition]}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'flex-start',
  },
  spacedItem: {
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    textAlign: 'left',
    color: primaryBlue,
  },
  imageContainer: {
  
    borderRadius: 16,
    padding: 20,
    alignSelf: 'center',
  },
  image: {
    width: 200,   // bigger width
    height: 200,  // bigger height
     tintColor: '#4C6FBF',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#444',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: '#2F66B4',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%', // button width 50%
    alignSelf: 'center', // center horizontally
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: 'white',
  },
  buttonPosition: {
    marginTop: 40, // Push button a bit down
  },
});
