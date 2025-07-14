import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { width } = Dimensions.get('window');

const CourseIntroScreen = () => {
         let [fontsLoaded] = useFonts({
            Poppins_500Medium,
            Poppins_700Bold,
          });
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hello <Text style={styles.bold}>Roberto</Text>
        </Text>
        <Ionicons name="menu" size={40} color="#000" />
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.activityTitle}>Activity 1</Text>
        <Text style={styles.courseTitle}>Course 1: Introduction to LLMs</Text>

        <Text style={styles.infoText}>Est duration: 15 mins</Text>
        <Text style={styles.infoText}>Difficulty: Intermediate</Text>
        <Text style={styles.infoText}>XP: 50</Text>

        <Text style={styles.description}>
          In this short module, you will learn about xyz. By the end, you’ll be able to xyz.
        </Text>

        {/* Play Button */}
        <TouchableOpacity style={styles.videoBox}>
          <View style={styles.playButton}>
            <Ionicons name="play" size={36} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* Stars */}
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Ionicons
              key={i}
              name={i < 4 ? 'star' : 'star-outline'}
              size={26}
              color="gold"
            />
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/NextScreen')}>
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseIntroScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
     flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F7F7F7',
    marginBottom: 35
  },
  greeting: {
    fontSize: 28,
    color: '#333',
    fontFamily: 'Poppins_500Medium',
  },
  bold: {
    fontFamily: 'Poppins_700Bold',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 80,
  },
  activityTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    marginTop: 20,
    color: '#5B5B5B',
  },
  courseTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 17,
    color: '#444',
    fontFamily: 'Poppins_700Bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginVertical: 12,
    lineHeight: 20,
  },
  videoBox: {
    width: width * 0.7,
    height: width * 0.5,
    backgroundColor: '#3f66c9',
    borderRadius: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  playButton: {
    backgroundColor: '#5f7ed7',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  footer: {
    height: 50,
    backgroundColor: '#2E57A4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
