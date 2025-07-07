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
import { logoImage } from '../../constants/logo'; 

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const { height } = Dimensions.get('window');

export default function Page2() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [progress] = useState(new Animated.Value(0.2));
  const [hasStarted, setHasStarted] = useState(false);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      progress.setValue(0.2);
      setHasStarted(false);
    }, [])
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleNext = () => {
    if (hasStarted) return;
    setHasStarted(true);

    Animated.timing(progress, {
      toValue: 0.6,
      duration: 1400,
      useNativeDriver: false,
    }).start(() => {
      router.push('/pages/page3');
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
          source={logoImage}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Text block */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Learn exactly what you need</Text>
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
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>{hasStarted ? 'Loading...' : 'Next'}</Text>
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
    justifyContent: 'space-between', // space between image, text, progress, button
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.45,
    marginTop: 10,
  },
  textContainer: {
    // limit vertical space so text doesn't stretch too much
    maxHeight: 180,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: '#000004',
    textAlign: 'center',
    marginBottom: 15,
  },
  paragraph: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000004',
    textAlign: 'center',
    lineHeight: 40,
    marginTop: 15,
     marginBottom: 35
  },
  progressContainer: {
    width: '100%',
    height: 16,
    backgroundColor: '#6888DB',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop:70
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
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Poppins_500Medium,',
    fontWeight: '500',
    textDecorationLine: 'underline', // like a link
  },
});
