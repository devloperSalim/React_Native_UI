import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo'; 

const { width, height } = Dimensions.get('window');

const options = [
  'Less than 1 month',
  '1 to 2 months',
  '2 to 3 months',
  'More than 3 months',
];

const Dot = ({ index, activeIndex }) => {
  const baseSize = 22;
  const size = index === activeIndex ? baseSize : Math.max(baseSize - index * 3.5, 8);
  const opacity = index === activeIndex ? 1 : Math.max(1 - index * 0.15, 0.3);
  const backgroundColor = index === activeIndex ? '#3f66c9' : '#ccc';

  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        marginHorizontal: 5,
        opacity,
      }}
    />
  );
};

export default function DeadlineScreen() {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  const handleNext = () => {
    if (selectedOption !== null) {
      router.push('/pages/NextScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Image */}
        <Image
          source={logoImage}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            By when do you need to meet{'\n'}
            this goal ? Be as realistic as{'\n'}
            possible
          </Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedOption(index)}
              style={styles.optionRow}
            >
              <View style={[styles.radio]}>
                {selectedOption === index && <View style={styles.radioInnerDot} />}
              </View>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.dotsContainer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Dot key={i} index={i} activeIndex={3} />
          ))}
        </View>

        <TouchableOpacity
          style={[styles.button, selectedOption === null && { opacity: 0.5 }]}
          onPress={handleNext}
          disabled={selectedOption === null}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 25,
  },
  image: {
    width: width * 0.45,
    height: width * 0.45,
    tintColor: '#4C6FBF',
    marginBottom: 35,
  },
  questionContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  question: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: '#5B5B5B',
    lineHeight: 32,
    textAlign: 'left',
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 32,
    marginTop: 20,
    marginBottom: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  radio: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#DBDFE4',
  },
  radioInnerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  optionText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20,
    color: '#5B5B5B',
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
  button: {
    backgroundColor: '#2E57A4',
    paddingVertical: 16,
    paddingHorizontal: 65,
    borderRadius: 18,
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 19,
    color: '#fff',
  },
});
