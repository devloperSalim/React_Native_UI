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

export default function KnowledgeCheckFeedbackScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswer = 'English';

  const answers = ['English', 'Tamil', 'Who knows !', 'Arabic'];

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/NextScreen'); // change route as needed
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hello <Text style={styles.bold}>Roberto</Text>
        </Text>
        <FontAwesome name="bars" size={24} color="#333" />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.activity}>Activity 1</Text>
        <Text style={styles.title}>Knowledge Check</Text>

        <Text style={styles.question}>Question 2:</Text>
        <Text style={styles.questionText}>What is the official language of India ?</Text>

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
              color={
                selected === item
                  ? item === correctAnswer
                    ? '#2E57A4'
                    : 'red'
                  : '#555'
              }
              style={{ marginRight: 8 }}
            />
            <Text style={styles.answerText}>{item}</Text>
          </TouchableOpacity>
        ))}

        {/* Submit */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Feedback message */}
        {submitted && (
          <View
            style={[
              styles.feedbackBox,
              {
                backgroundColor:
                  selected === correctAnswer ? '#28a745' : '#f44',
              },
            ]}
          >
            <Text style={styles.feedbackText}>
              {selected === correctAnswer
                ? "That’s correct !"
                : "That’s incorrect !"}
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
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#444',
    fontFamily: 'Poppins_500Medium',
  },
  bold: {
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  activity: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    color: '#2E57A4',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    marginBottom: 20,
  },
  question: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 6,
    color: '#333',
  },
  questionText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    marginBottom: 20,
    color: '#333',
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    marginTop: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
  },
  feedbackBox: {
    marginTop: 15,
    paddingVertical: 10,
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
