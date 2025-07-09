import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { width, height } = Dimensions.get('window');

const ReadyToDiveScreen = () => {
  const router = useRouter();
    const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const handleStart = () => {
    router.push('/pages/HomeScreen'); // 👈 Update this route if needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <Image source={logoImage} style={styles.image} resizeMode="contain" />

        {/* Title */}
        <Text style={styles.title}>All set !</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Your first roadmap is created,{'\n'}
          are you ready to dive in ?
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Dots */}
        <View style={styles.dotsContainer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <View
              key={i}
              style={[styles.dot, i === 4 ? styles.activeDot : styles.inactiveDot]}
            />
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Let’s go !</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReadyToDiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    marginTop: height * 0.12, // 👈 push slightly to top (adjust if needed)
    paddingHorizontal: 25,
  },
  image: {
    width: 300, // 👈 slightly smaller than before
    height: 300,
    tintColor: '#4C6FBF',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5B',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 19,
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5C',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 20,
  },
  bottomSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#3f66c9',
  },
  inactiveDot: {
    backgroundColor: '#dcdcdc',
  },
  button: {
    backgroundColor: '#2E57A4',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFE',
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
});
