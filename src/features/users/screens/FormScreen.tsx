import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {Pressable, SafeAreaView, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {AppDispatch} from '../../../redux/store';
import {IFormData, IUser} from '../modal/UserModal';
import TextField from '../../../components/textField/TextField';
import {FormScreenStyles as styles} from '../styles/FormScreenStyles';
import {updateUser, userData as userDetails} from '../slice/UserSlice';
import {formJson, userProfileUri, validateInput} from '../utility/UserUtility';
import {
  LoaderOnApiResponse,
  TriggerLoader,
} from '../../appLoader/utility/loaderHandler';

type RootStackParamList = {
  FormScreen: {id: number};
};

type FormScreenProps = NativeStackScreenProps<RootStackParamList, 'FormScreen'>;

interface IUserData {
  username: IFormData;
  name: IFormData;
  email: IFormData;
}

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
  }, [id, users]);

  const handleInputChange = useCallback(
    (key: keyof IUserData, value: string) => {
      setUserData(prevState => {
        const updatedData = {...prevState};
        // Basic Validations
        updatedData[key] = validateInput(value, key);
        return updatedData;
      });
    },
    [],
  );

  const isFormValid = useMemo(() => {
    return Object.values(userData).every(
      field => field.value.trim() !== '' && field.isValid,
    );
  }, [userData]);

  const handleSubmit = useCallback(() => {
    // trigger loader
    TriggerLoader();

    //Delay update user for 2 sec, just to show loader
    setTimeout(() => {
      // Edit API and Post API gives success response but the changes not reflecting in get Api response
      // So, we are using dispatch(updateUser(id)) here to simulate update and create operation
      // In real-world scenario, you should use API update endpoint to update item and create Api to create operations
      dispatch(
        updateUser({
          name: userData.name.value,
          username: userData.username.value,
          email: userData.email.value,
          id,
        }),
      );
      navigation.goBack();
      //Stop loader
      LoaderOnApiResponse();
    }, 2000);
  }, [dispatch, navigation, userData, id]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={{uri: userProfileUri}} style={styles.profileImage} />

        <View style={styles.form}>
          {formJson.map(item => (
            <View key={item.key}>
              <TextField
                title={item.label}
                placeholder={item.placeholder}
                placeholderTextColor={'#B8860B'}
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
