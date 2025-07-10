import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { logoImage } from '../../constants/logo'; 

const { width } = Dimensions.get('window');

// Dot Component
const Dot = ({ index, activeIndex }) => {
  const baseSize = 20;
  const size = index === activeIndex ? baseSize : Math.max(baseSize - index * 3.5, 6);
  const opacity = index === activeIndex ? 1 : Math.max(1 - index * 0.15, 0.3);
  const backgroundColor = index === activeIndex ? '#2E57A4' : '#999';

  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        marginHorizontal: 4,
        opacity,
      }}
    />
  );
};

export default function FinalStepScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text style={{ textAlign: 'center', marginTop: 100 }}>Loading...</Text>;
  }

  const handleNext = () => {
    router.push('/pages/GoalTimelineScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Content */}
          <View style={styles.content}>
            <Image
              source={logoImage}
              style={styles.image}
              resizeMode="contain"
            />

            <Text style={styles.title}>Hang in there !</Text>
            <Text style={styles.subtitle}>We’re almost done ..</Text>
          </View>

          {/* Bottom section */}
          <View style={styles.bottomSection}>
            <View style={styles.dotsContainer}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Dot key={i} index={i} activeIndex={5} />
              ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  content: {
    width: width * 0.85,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    tintColor: '#3f66c9',
    marginBottom: 15,
    marginTop: 40,
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#5B5B5B',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 18,
    color: '#5B5B5B',
    marginBottom: 30,
  },
  bottomSection: {
    width: width * 0.85,
    alignItems: 'center',
  },
    dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2E57A4',
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderRadius: 12,
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    color: '#FFFFFE',
    fontSize: 16,
  },
});
