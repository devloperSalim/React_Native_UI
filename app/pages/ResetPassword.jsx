import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo'; 

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
    const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  // Simple email validation regex
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleReset = () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Reset link sent to: ${email}`);
    }, 1000);
  };

   const handleResetPassword = () => {
    // Navigate to GetStart screen
    router.push('/pages/GetStart');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Title at top-left */}
        <Text style={styles.title}>Forgot password</Text>

        {/* Image below title */}
        <Image
          source={logoImage}
          style={styles.image}
        />

        {/* Subtitle centered */}
        <Text style={styles.subtitle}>
          Enter the email address associated{'\n'}with your account
        </Text>

        {/* Input and button wrapper */}
        <View style={styles.inputButtonWrapper}>

          {/* Email input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Reset button */}
          <TouchableOpacity
            style={[
              styles.resetButton,
              (!isValidEmail(email) || loading) && { opacity: 0.6 },
            ]}
            disabled={!isValidEmail(email) || loading}
            onPress={handleReset}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.resetText}  onPress={handleResetPassword}>Reset</Text>
            )}
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 22,
    color: '#2957D0',
    alignSelf: 'flex-start', // Keep title top-left
    marginBottom: 50,
  },

  image: {
    width: 200,
    height: 200,
    tintColor: '#3f66c9',
    marginBottom: 50,
  },

  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 17,
    color: '#615B5E',
    width: '100%',
    paddingHorizontal: 14,  // same as input paddingHorizontal
    textAlign: 'left',
    marginBottom: 30,
  },

  // Wrapper around input and button to control spacing
  inputButtonWrapper: {
    width: '100%',
    // Give a fixed height so we can space input and button vertically inside it
    height: 160, 
    justifyContent: 'flex-start',
  },

  input: {
    backgroundColor: '#ECECEC',
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#B59F95',
    marginBottom: 60, // Space between input and button
  },

  resetButton: {
    backgroundColor: '#2E57A4',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'center',
  },

  resetText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#FFFFFE',
  },
});
