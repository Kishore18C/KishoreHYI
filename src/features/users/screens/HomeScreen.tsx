import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';

import {HomeScreenStyles as styles} from '../styles/HomeScreenStyles';
import {getUser} from '../actions/userActions';
import {deleteUser, userData} from '../slice/UserSlice';
import {AppDispatch} from '../../../redux/store';
import {IUser} from '../modal/UserModal';
import UserCard from '../../../components/card/UserCard';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const users: IUser[] = useSelector(userData).users;
  const ID: IUser[] = useSelector(userData).idCount;
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  console.log('====================================');
  console.log(ID);
  console.log('====================================');
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const handleEdit = (id: number = -1) => {
    navigation.navigate('FormScreen', {id});
  };
  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.button} onPress={() => handleEdit()}>
        <Text style={styles.buttonText}>Create User +</Text>
      </Pressable>
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item}) => {
            return (
              <View style={{}}>
                <UserCard
                  data={item}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
