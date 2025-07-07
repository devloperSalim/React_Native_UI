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

const certificationsList = [
  'Azure Fundamentals',
  'Python Developer',
  'PowerBI Associate',
  'AWS Certified',
  'Scrum Master',
];

export default function CertificationScreen() {
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [selectedCert, setSelectedCert] = useState(certificationsList[0]);
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  const onChangeCert = (value) => {
    if (!selectedCerts.includes(value)) {
      setSelectedCerts([...selectedCerts, value]);
    }
    setSelectedCert(value);
  };

  const removeCert = (cert) => {
    setSelectedCerts(selectedCerts.filter((c) => c !== cert));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image source={logoImage} style={styles.image} resizeMode="contain" />

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            What relevant certifications do{'\n'}you already have ?
          </Text>
        </View>

        {/* Picker */}
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedCert}
            onValueChange={onChangeCert}
            style={styles.picker} // يظهر في السليكت
            itemStyle={styles.pickerItem} // يظهر في القائمة
            dropdownIconColor="#3f66c9"
          >
            {certificationsList.map((cert, i) => (
              <Picker.Item
                label={cert}
                value={cert}
                key={i}
                color="#3f66c9"
              />
            ))}
          </Picker>
        </View>

        {/* Selected tags */}
        <View style={styles.tagsWrapper}>
          {selectedCerts.map((cert, i) => (
            <View style={styles.tag} key={i}>
              <TouchableOpacity onPress={() => removeCert(cert)}>
                <Text style={styles.remove}>✕</Text>
              </TouchableOpacity>
              <Text style={styles.tagText}>{cert}</Text>
            </View>
          ))}
        </View>

        {/* Bottom buttons */}
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
    tintColor: '#3f66c9',
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
    fontSize: 22,
    color: '#5B5B5B',
    textAlign: 'left',
    lineHeight: 25,
    marginTop: 50,
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#fff', // 👈 خلفية بيضاء
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 0, // 👈 بدون حدود
  },
  picker: {
    width: '100%',
    height: 50,
  
    fontSize: 20, // 👈 الخط داخل الـ Picker (العنصر الظاهر)
    color: '#5B5B5B',
    fontFamily: 'Poppins_500Medium',
  },
  pickerItem: {
    fontSize: 10, // 👈 داخل القائمة
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5B',
  },
  tagsWrapper: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBDFE4',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  tagText: {
    fontFamily: 'Poppins_500Medium',
    color: '#5B5B5C',
    fontSize: 20,
    marginLeft: 15,
  },
  remove: {
    fontSize: 25,
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
