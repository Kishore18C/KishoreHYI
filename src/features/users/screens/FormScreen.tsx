import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {IFormData, IUser} from '../modal/UserModal';
import TextField from '../../../components/textField/TextField';
import {FormScreenStyles as styles} from '../styles/FormScreenStyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  createUser,
  updateUser,
  userData as userDetails,
} from '../slice/UserSlice';
import {useNavigation} from '@react-navigation/native';

import {AppDispatch} from '../../../redux/store';

type RootStackParamList = {
  FormScreen: {id: number};
};

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;

interface IUserData {
  username: IFormData;
  name: IFormData;
  email: IFormData;
}

const formJson = [
  {
    label: 'Username',
    key: 'username',
    placeholder: 'Enter your username',
  },
  {
    label: 'Name',
    key: 'name',
    placeholder: 'Enter your name',
  },
  {
    label: 'Email',
    key: 'email',
    placeholder: 'Enter email id',
  },
];

function FormScreen({route}: FormScreenProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const initialState = {
    username: {value: '', isValid: true, message: ''},
    name: {value: '', isValid: true, message: ''},
    email: {value: '', isValid: true, message: ''},
  };
  const users: IUser[] = useSelector(userDetails).users;

  const {id} = route.params;
  const [userData, setUserData] = useState<IUserData>(initialState);
  useEffect(() => {
    if (id >= 0) {
      const user = users.find(item => item.id === id);
      setUserData(() => ({
        username: {value: user?.username ?? '', isValid: true, message: ''},
        name: {value: user?.name ?? '', isValid: true, message: ''},
        email: {value: user?.email ?? '', isValid: true, message: ''},
      }));
    }
  }, []);

  const handleInputChange = (key: keyof IUserData, value: string) => {
    setUserData(prevState => {
      const updatedData = {...prevState};

      // Just the basic empty field validation
      if (value.trim() === '') {
        updatedData[key] = {
          value,
          isValid: false,
          message: 'Field is required',
        };
      } else if (value.length < 3) {
        updatedData[key] = {
          value,
          isValid: false,
          message: 'Field should be at least 3 characters long',
        };
      } else {
        updatedData[key] = {
          value,
          isValid: true,
          message: '',
        };
      }

      return updatedData;
    });
  };
  const isFormValid = useMemo(() => {
    return Object.values(userData).every(
      field => field.value.trim() !== '' && field.isValid,
    );
  }, [userData]);

  const handleSubmit = () => {
    dispatch(
      updateUser({
        name: userData.name.value,
        username: userData.username.value,
        email: userData.email.value,
        id,
      }),
    );

    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.form}>
          {formJson.map(item => (
            <View key={item.key}>
              <TextField
                title={item.label}
                placeholder={item.placeholder}
                value={userData[item.key as keyof IUserData].value}
                onChangeText={value =>
                  handleInputChange(item.key as keyof IUserData, value)
                }
                errorCondition={!userData[item.key as keyof IUserData].isValid}
                errorMessage={userData[item.key as keyof IUserData].message}
              />
            </View>
          ))}
        </View>
        <Pressable
          style={[
            styles.button,
            isFormValid ? styles.activeButton : styles.inactiveButton,
          ]}
          disabled={!isFormValid}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default FormScreen;
