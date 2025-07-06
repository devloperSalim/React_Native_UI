import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const { height } = Dimensions.get('window');

export default function Page3() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [progress] = useState(new Animated.Value(0.6)); // start at 60%
  const [hasStarted, setHasStarted] = useState(false);
  const router = useRouter();

  // Reset progress if user comes back to this screen
  useFocusEffect(
    useCallback(() => {
      progress.setValue(0.6);
      setHasStarted(false);
    }, [])
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    Animated.timing(progress, {
      toValue: 1,
      duration: 1400,
      useNativeDriver: false,
    }).start(() => {
      router.push('/pages/WelcomeScreen'); // ✅ Navigate to Welcome page
    });
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Image */}
        <Image
          source={require('../../assets/images/app_images/pic_11523815.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Achieve your goals</Text>

        {/* Paragraph */}
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet,{'\n'}
            consectetur adipiscing elit, sed,{'\n'}
            do eiusmod tempor incididunt ut,{'\n'}
            labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={[styles.nextButton, hasStarted && styles.nextButtonDisabled]}
          onPress={handleStart}
          disabled={hasStarted}
        >
          <Text style={styles.buttonText}>
            {hasStarted ? 'Loading...' : 'Let’s Start'}
          </Text>
        </TouchableOpacity>

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
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.40,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 28,
    color: '#222',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  textContainer: {
    width: '100%',
    paddingVertical: 20,
  },
  paragraph: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    lineHeight: 40,
  },
  progressContainer: {
    width: '100%',
    height: 16,
    backgroundColor: '#6888DB',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4C6FBF',
  },
  nextButton: {
    width: '50%',
    backgroundColor: '#2E57A4',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFE',
    fontSize: 22,
    fontFamily: 'Poppins_500Medium,',
    fontWeight: 'Bold',
    textDecorationLine: 'underline', // like a link
  },
});
