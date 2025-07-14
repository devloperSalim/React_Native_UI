import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { width } = Dimensions.get('window');

export default function CourseDetailsScreen() {
  const router = useRouter();
   let [fontsLoaded] = useFonts({
              Poppins_500Medium,
              Poppins_700Bold,
            });

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/CourseVideoScreen');
  };

  const skills = [
    { label: 'Magic', rating: 5 },
    { label: 'Power', rating: 4.5 },
    { label: 'Stamina', rating: 3.5 },
  ];

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <>
        {[...Array(full)].map((_, i) => (
          <FontAwesome key={`f-${i}`} name="star" size={22} color="#FFD700" />
        ))}
        {half && <FontAwesome name="star-half-empty" size={22} color="#FFD700" />}
        {[...Array(empty)].map((_, i) => (
          <FontAwesome key={`e-${i}`} name="star-o" size={22} color="#FFD700" />
        ))}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hello <Text style={styles.boldText}>Roberto</Text>
        </Text>
        <FontAwesome name="bars" size={40} color="#222" />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.activityTitle}>Activity 1</Text>
        <Text style={styles.courseTitle}>Course 2: AI Lab Invasion !</Text>

        <Text style={styles.infoText}>Est duration: 10 mins</Text>
        <Text style={styles.infoText}>Difficulty: Intermediate</Text>
        <Text style={styles.infoText}>XP: 100</Text>

        <Text style={styles.description}>
          In this short module, you will unlock the following skills:
        </Text>

        {skills.map((skill, index) => (
          <View key={index} style={styles.skillRow}>
            <Text style={styles.skillLabel}>{skill.label}</Text>
            <View style={styles.starsRow}>{renderStars(skill.rating)}</View>
          </View>
        ))}

        {/* Button Just Below Skills */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Let's go!</Text>
        </TouchableOpacity>

        {/* Bottom Padding */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Footer (just back arrow) */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: '#444',
    fontFamily: 'Poppins_500Medium',
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  activityTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#333',
  },
  courseTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    color: '#444',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
    color: '#666',
    marginTop: 10,
    marginBottom: 25,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',  // هنا قربنا النجوم للنص
    alignItems: 'center',
    marginBottom: 15,
  },
  skillLabel: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#444',
    marginRight: 25,  // مسافة صغيرة بين الكلمة والنجوم
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#2E57A4',
    borderRadius: 18,
    paddingHorizontal: 30,
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 70,
  },
  nextButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 55,
    backgroundColor: '#2E57A4',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
  },
});
