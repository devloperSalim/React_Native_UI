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

export default function KnowledgeCheckFinalReviewScreen() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/NextCourseScreen'); // replace with your actual next screen
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.activity}>Activity 1</Text>
        <Text style={styles.title}>Knowledge Check</Text>

        <Text style={styles.reviewLabel}>Final Review</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Final Score :</Text>
          <Text style={styles.value}>80%</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Total XP:</Text>
          <Text style={styles.value}>24XP</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Finished in:</Text>
          <Text style={styles.value}>03 mins</Text>
        </View>

        <View style={styles.successBox}>
          <Text style={styles.successText}>Well done, you passed !</Text>
        </View>
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
    backgroundColor: '#F7F7F7',
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
  reviewLabel: {
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
    color: '#222',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  value: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  successBox: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 16,
    marginTop: 30,
    alignItems: 'center',
  },
  successText: {
    color: '#fff',
    fontSize: 15,
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
