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
import { logoImage } from '../../constants/logo'; // adjust if needed

const hobbiesList = [
  'Basketball',
  'Violin',
  'Reading',
  'Photography',
  'Swimming',
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

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let’s now look at the fun side of!</Text>
          <Text style={styles.subtitle}>
            What are your hobbies or extraça-curricular activities?
          </Text>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedHobby}
            onValueChange={onChangeHobby}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            dropdownIconColor="#3f66c9"
          >
            {hobbiesList.map((hobby, i) => (
              <Picker.Item
                label={hobby}
                value={hobby}
                key={i}
                color="#3f66c9"
              />
            ))}
          </Picker>
        </View>

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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    tintColor: '#3f66c9',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 0,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#5B5B5B',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    color: '#5B5B5B',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 25,
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
  },
  picker: {
    width: '100%',
    height: 50,
    fontSize: 20,
    color: '#3f66c9',
    fontFamily: 'Poppins_700Bold',
  },
  pickerItem: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#3f66c9',
  },
  tagsWrapper: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE3F0',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 15,
  },
  tagText: {
    fontFamily: 'Poppins_500Medium',
    color: '#3f66c9',
    fontSize: 18,
    marginLeft: 12,
  },
  remove: {
    fontSize: 20,
    color: '#3f66c9',
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
    backgroundColor: '#3f66c9',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
});
