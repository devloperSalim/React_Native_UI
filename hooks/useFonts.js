import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });
}
