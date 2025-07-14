import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
     <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="page2" />
      <Stack.Screen name="page3" />
      <Stack.Screen name="WelcomeScreen" />
      <Stack.Screen name="SignUpScreen" />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="ForgotPasswordScreen" />
      <Stack.Screen name="ResetPassword" />
      <Stack.Screen name="GetStart" />
      <Stack.Screen name="CurrentSituationScreen" />
      <Stack.Screen name="CountryScreen" />
      <Stack.Screen name="CurrentFieldScreen" />
      <Stack.Screen name="GoalSelectionScreen" />
      <Stack.Screen name="CareerFocusScreen" />
      <Stack.Screen name="TargetRoleScreen" />
      <Stack.Screen name="FinalStepScreen" />
      <Stack.Screen name="GoalTimelineScreen" />
      <Stack.Screen name="CertificationScreen" />
      <Stack.Screen name="HobbiesScreen" />
      <Stack.Screen name="TimeAllocationScreen" />
      <Stack.Screen name="LoadingRoadmapScreen" />
      <Stack.Screen name="ReadyToDiveScreen" />
      <Stack.Screen name="RoadmapScreen" />
      <Stack.Screen name="ActivityLockedScreen" />
      <Stack.Screen name="CourseSkillsScreen" />
      <Stack.Screen name="CourseInteractiveScenarioScreen" />  
      <Stack.Screen name="KnowledgeCheckIntroScreen" />
      <Stack.Screen name="KnowledgeCheckQuestionScreen" />
      <Stack.Screen name="KnowledgeCheckFeedbackScreen" />
      <Stack.Screen name="KnowledgeCheckFinalReviewScreen" />
      <Stack.Screen name="+not-found" />
    </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
