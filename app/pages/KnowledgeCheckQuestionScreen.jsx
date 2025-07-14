import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function KnowledgeCheckQuestionScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = 'Rabat';
  const answers = ['Rabat', 'Casablanca', 'Tokyo', 'Taroudant'];

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/NextScreen'); // Adjust this path
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hello <Text style={styles.bold}>Roberto</Text>
        </Text>
        <FontAwesome name="bars" size={30} color="#333" />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.activity}>Activity 1</Text>
        <Text style={styles.title}>Knowledge Check</Text>

        <Text style={styles.question}>Question 1:</Text>
        <Text style={styles.questionText}>What is the capital of Morocco ?</Text>

        {answers.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.answerRow}
            onPress={() => setSelected(item)}
            disabled={submitted}
          >
            <FontAwesome
              name={
                selected === item
                  ? item === correctAnswer
                    ? 'check-circle'
                    : 'times-circle'
                  : 'circle-thin'
              }
              size={20}
              color={selected === item ? (item === correctAnswer ? '#2E57A4' : 'red') : '#555'}
              style={{ marginRight: 8 }}
            />
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Submit button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Feedback appears BELOW the button */}
        {submitted && (
          <View
            style={[
              styles.feedback,
              {
                backgroundColor:
                  selected === correctAnswer ? '#28a745' : '#ff4d4d',
              },
            ]}
          >
            <Text style={styles.feedbackText}>
              {selected === correctAnswer
                ? "That's correct!"
                : "That's incorrect!"}
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleBack}>
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <FontAwesome name="arrow-right" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F7F7F7',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
  },
  bold: {
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    paddingBottom: 130,
  },
  activity: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#5B5B5B',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    marginBottom: 25,
  },
  question: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 6,
    color: '#333',
  },
  questionText: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    marginBottom: 20,
    color: '#333',
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  answerText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    
  },
  submitButton: {
    backgroundColor: '#2E57A4',
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 60,
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
  },
  feedback: {
    marginTop: 30,
    padding: 12,
    borderRadius: 14,
    alignItems: 'center',
  },
  feedbackText: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
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
