import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useRouter } from 'expo-router';


const { width } = Dimensions.get('window');

export default function ActivityLockedScreen() {
     const router = useRouter(); // ✅ This allows navigation

      let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_700Bold,
      });
    
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Hello <Text style={styles.bold}>Roberto</Text>
        </Text>
        <Ionicons name="menu" size={40} color="#1a1a1a" />
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.activityTitle}>Activity 1 : Not started</Text>
        <Text style={styles.activitySubtext}>
          Take the quick assessment first{'\n'}to unlock the rest of the content.
        </Text>

        {/* Quick Assessment */}
        <TouchableOpacity style={styles.quickAssessment}>
          <Text style={styles.quickText}>Quick Assessment</Text>
          <Text style={styles.subtext}>10XP   3mins</Text>
        </TouchableOpacity>

        {/* Locked Items */}
        {[
          { title: 'Course 1', xp: '50XP', time: '15mins', diff: 'Mid' },
          { title: 'Knowledge Check', xp: '25XP', time: '5mins' },
          { title: 'Course 2', xp: '50XP', time: '15mins', diff: 'Mid' },
          { title: 'Knowledge Check', xp: '25XP', time: '5mins' },
        ].map((item, index) => (
          <View key={index} style={styles.lockedBox}>
            <FontAwesome name="lock" size={18} color="#fff" style={styles.lockIcon} />
            <View style={styles.lockedContent}>
              <Text style={styles.lockedTitle}>{item.title}</Text>
              <Text style={styles.lockedSub}>
                {item.xp}   {item.time}   {item.diff || ''}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <TouchableOpacity style={styles.footer} onPress={() => router.push('/pages/RoadmapScreen')}>
            <Ionicons name="arrow-undo" size={26} color="#fff" />
      </TouchableOpacity>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
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
  headerText: {
    fontSize: 28,
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5B',
  },
  bold: {
    fontFamily: 'Poppins_700Bold',
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  activityTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#5B5B5B',
    marginTop: 20,
  },
  activitySubtext: {
    fontSize: 18,
    color: '#7a7a7a',
    marginTop: 6,
    fontFamily: 'Poppins_500Medium',
  },
  quickAssessment: {
    backgroundColor: '#2E57A4',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 30,
  },
  quickText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
  },
  subtext: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
    fontFamily: 'Poppins_500Medium',
  },
  lockedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3f3f3f',
    padding: 14,
    borderRadius: 4,
    marginTop: 15,
  },
  lockIcon: {
    marginRight: 10,
  },
  lockedContent: {
    flex: 1,
  },
  lockedTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    
  },
  lockedSub: {
    color: '#fff',
    fontSize: 16,
    marginTop: 2,
    fontFamily: 'Poppins_500Medium',
  },
  footer: {
      position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: '#2E57A4',
  height: 50,
  justifyContent: 'center',
  paddingLeft: 20, // 👈 pushes icon inward from left edge
  },
});
