import React, { useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// Dot Component
const Dot = ({ index, activeIndex }) => {
  const baseSize = 20;
  const size = index === activeIndex ? baseSize : Math.max(baseSize - index * 3.5, 6);
  const opacity = index === activeIndex ? 1 : Math.max(1 - index * 0.15, 0.3);
  const backgroundColor = index === activeIndex ? '#3f66c9' : '#999';

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

export default function CountryScreen() {
  const [selectedCountry, setSelectedCountry] = useState('Albania');
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  const handleNext = () => {
    router.push('/pages/CurrentFieldScreen');
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
          <View style={styles.content}>
            {/* Image */}
            <Image
              source={require('../../assets/images/app_images/pic_11523815.png')}
              style={styles.image}
              resizeMode="contain"
            />

            {/* Title */}
            <Text style={styles.question}>
              In which country do you study /{"\n"}Work ?
            </Text>

            {/* Clean Picker - no border, no bg */}
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                style={styles.picker}
                dropdownIconColor="#aaa"
                mode="dropdown"
              >
                <Picker.Item label="Albania" value="Albania" />
                <Picker.Item label="Morocco" value="Morocco" />
                <Picker.Item label="France" value="France" />
                <Picker.Item label="Germany" value="Germany" />
              </Picker>
            </View>
          </View>

          {/* Bottom section */}
          <View style={styles.bottomSection}>
            <View style={styles.dotsContainer}>
              {[0, 1, 2, 3].map((i) => (
                <Dot key={i} index={i} activeIndex={1} />
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
    width: 150,
    height: 150,
    tintColor: '#3f66c9',
    marginBottom: 15,
    marginTop: 40,
  },
  question: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 22,
    color: '#5B5B5B',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  pickerWrapper: {
    width: '100%',
    marginBottom: 40,
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'transparent', // No background
    borderWidth: 0,                 // No border
    elevation: 0,
    shadowOpacity: 0,
  },
  picker: {
    color: '#5B5B5B', // text color
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontSize: 22,
    fontFamily: Platform.OS === 'android' ? 'Poppins_500Medium' : undefined,
    marginLeft: Platform.OS === 'android' ? -8 : 0,
  },
  bottomSection: {
    width: width * 0.85,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
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
