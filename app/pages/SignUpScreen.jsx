import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const screenWidth = Dimensions.get('window').width;
const containerWidth = screenWidth > 400 ? 400 : screenWidth - 40;
const primaryBlue = '#2957D0';

export default function SignUpScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={primaryBlue} />
      </View>
    );
  }

  const handleLogInPress = () => {
    alert('Log in clicked!');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.signup}>Sign up</Text>

        <Image
          source={require('../../assets/images/app_images/pic_11523815.png')}
          style={styles.logo}
        />

        <Text style={styles.brandText}>Platonis</Text>

        <Text style={styles.subtitle}>
          Choose your preferred method to create an account
        </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, { marginRight: 15 }]}>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>

        {/* Full-width "or" line with text */}
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.orLine} />
        </View>

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          placeholderTextColor="#aaa"
          returnKeyType="next"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#aaa"
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By signing up you agree to our{' '}
          <Text style={styles.linkText}>Terms & conditions</Text>
        </Text>

        <TouchableOpacity onPress={handleLogInPress}>
          <Text style={styles.loginLink}>
            <Text style={styles.loginLinkUnderline}>Have an account? </Text>
            <Text style={styles.loginLinkHighlight}>Log in</Text>
          </Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: containerWidth,
    alignSelf: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  signup: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: primaryBlue,
    marginTop: 25,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  brandText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    textAlign: 'center',
    color: '#040000',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#2E57A4',
    paddingVertical:10,
    borderRadius: 10,
    alignItems: 'center',
  },
  socialText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#fff',
  },

  // Updated or section
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins_700Bold',
    marginHorizontal: 10,
  },

  input: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    backgroundColor: '#ECECEC',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 10,
    color: '#B59F95',
  },
  loginButton: {
    backgroundColor: '#2E57A4',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 18,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
    color: '#fff',
  },
  terms: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginBottom: 18,
  },
  linkText: {
    color: '#2E57A4',
    fontFamily: 'Poppins_500Medium',
  },
  loginLink: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  loginLinkUnderline: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  loginLinkHighlight: {
    color:'#3B58A4',
    textDecorationLine: 'underline',
  },
});
