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

export default function CourseInteractiveScenarioScreen() {
  const router = useRouter();
   let [fontsLoaded] = useFonts({
          Poppins_500Medium,
          Poppins_700Bold,
        });

  const handleBack = () => router.back();
  const handleNext = () => router.push('/CourseFinalStepScreen'); // or any next screen

  const messages = [
    "You've just joined XYZ Labs, an AI lab based in Finland.",
    "There is an issue and something happened ...............",
    'What will you do?',
    "You choose Choice 3, that’s correct !",
  ];

  const choices = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'];

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

        {/* Messages */}
        {messages.slice(0, 3).map((msg, index) => (
          <View key={index} style={styles.chatBubbleRow}>
            <FontAwesome name="user-circle" size={20} color="#222" />
            <View style={styles.bubble}>
              <Text style={styles.bubbleText}>Mascot: {msg}</Text>
            </View>
          </View>
        ))}

        {/* Choices */}
        <View style={styles.choicesContainer}>
          {choices.map((choice, index) => (
            <Text key={index} style={styles.choiceText}>
              • {choice}
            </Text>
          ))}
        </View>

        {/* Final Response */}
        <View style={styles.chatBubbleRow}>
          <FontAwesome name="user-circle" size={20} color="#222" />
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>Mascot: {messages[3]}</Text>
          </View>
        </View>

        {/* Space above footer */}
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
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#5B5B5B',
  },
  courseTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 30,
  },
  chatBubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 10,
  },
  bubble: {
    backgroundColor: '#2E57A4',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    maxWidth: '85%',
  },
  bubbleText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  choicesContainer: {
    marginVertical: 12,
    marginLeft: 28,
  },
  choiceText: {
    fontSize: 16,
    color: '#222',
    fontFamily: 'Poppins_500Medium',
    marginBottom: 4,
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
