import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo'; 

const primaryBlue = '#2957D0';

export default function LoginScreen() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

 const handleResetPassword = () => {
  router.push('/pages/ForgotPasswordScreen'); // Make sure this matches your ForgotPasswordScreen route
};

  //  const handleLogin = () => {
  //   router.push('/pages/LoginScreen'); // <-- make sure this matches your SignUp screen path
  // };
  const handleSignUp = () => {
    router.push('/pages/SignUpScreen'); // <-- make sure this matches your SignUp screen path
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.container}>
        {/* Top-left: Log in */}
        <View style={styles.header}>
          <Text style={styles.loginTitle}>Log in</Text>
        </View>

        {/* Logo + Brand */}
        <View style={styles.topSection}>
          <Image
            source={logoImage}
            style={styles.logo}
          />
          <Text style={styles.brandText}>Platonis</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />

          <Text style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordUnderline}>Forgot your password? </Text>
            <TouchableOpacity onPress={handleResetPassword}>
              <Text style={styles.linkText}>Click here to reset</Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.separatorContainer}>
            <View style={styles.separatorLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.buttonText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom link */}
        <View style={styles.footer}>
          <Text style={styles.signUpText}>
            <Text style={styles.signUpUnderline}>Don’t have an account yet? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.linkText}>Sign up</Text>
            </TouchableOpacity>
          </Text>
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
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 25,
  },
  loginTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#2E57A4',
  },
  topSection: {
    alignItems: 'center',
    marginTop: -20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  brandText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
  },
  form: {
    marginTop: 10,
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#ECECEC',
    paddingHorizontal: 15,
    paddingVertical:6,
    borderRadius: 6,
    fontSize: 13,
    color: '#B59F95',
    marginBottom: 10,
  },
  forgotPassword: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
    color: '#000',
    marginBottom: 14,
  },
  forgotPasswordUnderline: {
    textDecorationLine: 'underline',
    color: '#000',
  },
  signUpText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  signUpUnderline: {
    textDecorationLine: 'underline',
    color: '#000',
    
  },
  linkText: {
    color: '#2E57A4',
    fontFamily: 'Poppins_500Medium',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: '#2E57A4',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 18,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
      color: '#FFFFFE',
    fontFamily: 'Poppins_700Bold',
    fontSize: 14,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
    
  },
  orText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 8,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#2E57A4',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
   color: '#FFFFFE',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 18,
  },
});
