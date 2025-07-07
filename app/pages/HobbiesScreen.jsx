import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { logoImage } from '../../constants/logo';

const { width } = Dimensions.get('window');

const hobbiesList = [
  'Basketball',
  'Violin',
  'Painting',
  'Coding',
  'Dancing',
];

export default function HobbiesScreen() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedHobby, setSelectedHobby] = useState(hobbiesList[0]);
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  const onChangeHobby = (value) => {
    if (!selectedHobbies.includes(value)) {
      setSelectedHobbies([...selectedHobbies, value]);
    }
    setSelectedHobby(value);
  };

  const removeHobby = (hobby) => {
    setSelectedHobbies(selectedHobbies.filter((h) => h !== hobby));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image source={logoImage} style={styles.image} resizeMode="contain" />

        {/* Title section */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let’s now look at the fun side of!</Text>
          <Text style={styles.title}>What are your hobbies or extraça-curricular activities?</Text>
        </View>

        {/* Picker */}
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedHobby}
            onValueChange={onChangeHobby}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            dropdownIconColor="#3f66c9"
          >
            {hobbiesList.map((hobby, i) => (
              <Picker.Item label={hobby} value={hobby} key={i} color="#3f66c9" />
            ))}
          </Picker>
        </View>

        {/* Selected Tags */}
        <View style={styles.tagsWrapper}>
          {selectedHobbies.map((hobby, i) => (
            <View style={styles.tag} key={i}>
              <TouchableOpacity onPress={() => removeHobby(hobby)}>
                <Text style={styles.remove}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.tagText}>{hobby}</Text>
            </View>
          ))}
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <View style={styles.dots}>
            {[0, 1, 2, 3, 4].map((i) => (
              <View
                key={i}
                style={[styles.dot, i === 0 ? styles.activeDot : styles.inactiveDot]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  image: {
    width: 170,
    height: 170,
    tintColor: '#4C6FBF',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 0,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 30,
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 21,
    color: '#5B5B5B',
    textAlign: 'left',
    lineHeight: 32,
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 0,
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    height: 50,
    fontFamily: 'Poppins_500Medium',
    fontSize: 21,
    color: '#5B5B5B',
  },
  pickerItem: {
    fontSize: 10,
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5B',
  },
  tagsWrapper: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#DBDFE4',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    minWidth: 270,
    alignSelf: 'center',
  },
  remove: {
    fontSize: 25,
    color: '#242425',
    marginRight: 10,
  },
  tagText: {
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5B',
    fontSize: 22,
  },
  bottom: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#3f66c9',
  },
  inactiveDot: {
    backgroundColor: '#dcdcdc',
  },
  button: {
    backgroundColor: '#2E57A4',
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    color: '#FFFFFE',
    fontSize: 16,
  },
});
