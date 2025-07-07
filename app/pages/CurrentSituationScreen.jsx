import React, { useRef, useState } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo'; 

const { width } = Dimensions.get('window');

const options = [
  { label: 'Undergraduate\nStudent' },
  { label: 'Graduate\nStudent' },
  { label: 'Just started my\ncareer' },
  { label: 'Seasoned\nProfessional' },
];

export default function CurrentSituationScreen() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const scaleAnims = useRef(options.map(() => new Animated.Value(1))).current;

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  const handleNext = () => {
    if (selected !== null) {
      router.push('/pages/CountryScreen');
    }
  };

  const Dot = ({ index }) => {
    const baseSize = 20;
    const size = Math.max(baseSize - index * 3.5, 6);
    const opacity = Math.max(1 - index * 0.15, 0.3);
    const backgroundColor = index === 1 ? '#3f66c9' : '#999';

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

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          source={logoImage}
          style={styles.image}
        />

        <Text style={styles.title}>What’s your current situation ?</Text>

        <View style={styles.grid}>
          {options.map((item, index) => {
            const scaleAnim = scaleAnims[index];

            const handlePressIn = () => {
              Animated.spring(scaleAnim, {
                toValue: 0.95,
                useNativeDriver: true,
              }).start();
            };

            const handlePressOut = () => {
              Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
              }).start();
            };

            return (
              <Pressable
                key={index}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => setSelected(index)}
              >
                <Animated.View
                  style={[
                    styles.card,
                    { transform: [{ scale: scaleAnim }] },
                    selected === index && styles.selectedCard,
                  ]}
                >
                  <Image
                    source={require('../../assets/images/app_images/pic_11523815.png')}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.cardText}>{item.label}</Text>
                </Animated.View>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.dotsContainer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Dot key={i} index={i} />
          ))}
        </View>

        <Pressable
          style={[styles.nextButton, selected === null && { opacity: 0.5 }]}
          disabled={selected === null}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const cardWidth = (width - 60) / 2;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: 170,
    height: 170,
    tintColor: '#3f66c9',
    marginBottom: 15,
    marginTop: 60,
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 17,
    color: '#5E5B5B',
    textAlign: 'center',
    marginBottom: 50,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    width: cardWidth,
    backgroundColor: '#f0f4ff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#f0f4ff',
  },
  selectedCard: {
    borderColor: '#2E57A4',
    backgroundColor: '#EDF0F2',
  },
  cardImage: {
    width: 60,
    height: 60,
    tintColor: '#3f66c9',
    marginBottom: 20,
  },
  cardText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#5E5B5B',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  nextButton: {
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
