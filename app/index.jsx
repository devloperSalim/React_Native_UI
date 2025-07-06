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
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  const [progress] = useState(new Animated.Value(0));
  const [hasStarted, setHasStarted] = useState(false);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      progress.setValue(0);
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
      toValue: 0.2,
      duration: 1400,
      useNativeDriver: false,
    }).start(() => {
      router.push('/pages/page2');
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
          source={require('../assets/images/app_images/pic_11523815.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>You’re at the right place !</Text>
          <Text style={styles.paragraph}>
            If you’re looking for a training{'\n'}
            plan specifically made for you,{'\n'}
            based on the most recent{'\n'}
            trends in your domain.
          </Text>
        </View>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext} disabled={hasStarted}>
          <Text style={styles.buttonText}>
            {hasStarted ? 'Loading...' : 'Next'}
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: height * 0.45,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
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
    fontSize: 22,
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
    marginTop: 10,
    marginBottom: 30,
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
