import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for menu icon
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const { width } = Dimensions.get('window');

export default function RoadmapScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hello}>Hello <Text style={styles.bold}>Roberto</Text></Text>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={40} color="#1D1D1F" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subTitle}>Roberto's roadmap to getting an internship</Text>

        <View style={styles.section}>
          <Text style={styles.activityTitle}>Activity 1: <Text style={styles.bold}>Description</Text></Text>
          <View style={styles.bulletList}>
            <Text style={styles.bullet}>• Course A: Description</Text>
            <Text style={styles.bullet}>• Assessment</Text>
            <Text style={styles.bullet}>• Course B</Text>
            <Text style={styles.bullet}>• Assessment</Text>
            <Text style={styles.bullet}>• Course C</Text>
            <Text style={styles.bullet}>• Final Assessment</Text>
          </View>
        </View>

        {[2, 3, 4].map((num) => (
          <View style={styles.section} key={num}>
            <Text style={styles.activityTitle}>Activity {num}</Text>
            <Text style={styles.lockText}>• Unlock after completing A{num - 1}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    zIndex: 10,
    marginBottom: 35
  },
  hello: {
    fontSize: 28,
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
    
  },
  bold: {
    fontFamily: 'Poppins_700Bold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // enough space above footer
  },
  subTitle: {
    fontSize: 26,
    color: '#4C6FBF',
    fontFamily: 'Poppins_500Medium',
    marginBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  activityTitle: {
    fontSize: 20,
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
    marginBottom: 5,
  },
  bulletList: {
    paddingLeft: 10,
  },
  bullet: {
    fontSize: 18,
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
    lineHeight: 28,
  },
  lockText: {
    fontSize: 18,
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
    paddingLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 55,
    backgroundColor: '#2E57A4',
  },
});
