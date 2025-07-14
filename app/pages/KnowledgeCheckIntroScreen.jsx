import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';


export default function KnowledgeCheckIntroScreen() {
  const router = useRouter();
    let [fontsLoaded] = useFonts({
            Poppins_500Medium,
            Poppins_700Bold,
          });

  const handleBack = () => router.back();
  const handleNext = () => router.push('/KnowledgeCheckQuestionsScreen'); // adjust as needed

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
        <Text style={styles.courseTitle}>Knowledge Check</Text>

        <Text style={styles.infoText}>Est duration: 5 mins</Text>
        <Text style={styles.infoText}>Difficulty: Intermediate</Text>
        <Text style={styles.infoText}>XP: 100</Text>

        <Text style={styles.description}>
          Let's review what you’ve learnt so far.{"\n"}
          This KC will cover the following topics from Activity 1:
        </Text>

        <View style={styles.topicList}>
          <Text style={styles.topic}>• Topic 1</Text>
          <Text style={styles.topic}>• Topic 2</Text>
          <Text style={styles.topic}>• Topic 3</Text>
        </View>

        <TouchableOpacity onPress={handleNext} style={styles.goButton}>
          <Text style={styles.goButtonText}>Let’s go !</Text>
        </TouchableOpacity>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleBack}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <FontAwesome name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F7' },
  header: {
     flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F7F7F7',
    marginBottom: 35
  },
  headerText: {
    fontSize: 28,
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
  },
  boldText: { fontWeight: 'bold' },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  activityTitle: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#5B5B5B',
  },
  courseTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#555',
    marginVertical: 15,
  },
  topicList: {
    marginBottom: 25,
  },
  topic: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 10,
  },
  goButton: {
    backgroundColor: '#2E57A4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignSelf: 'center',
  },
  goButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 55,
    backgroundColor: '#2E57A4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
});
