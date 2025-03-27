import React, {useEffect, useRef, useCallback} from 'react';
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
  const flatListRef = useRef<FlatList>(null);
  const users: IUser[] = useSelector(userData).users;
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  useEffect(() => {
    // Fetching User from API
    if (users.length === 0) {
      dispatch(getUser());
    }
  }, [dispatch, users]);

  const handleEdit = useCallback(
    (id: number = -1) => {
      navigation.navigate('FormScreen', {id});
    },
    [navigation],
  );

  const handleDelete = useCallback(
    (id: number) => {
      // Delete API delete item successfully, but it is not reflecting in get api response
      // So, we are using dispatch(deleteUser(id)) here to simulate delete operation
      // In real-world scenario, you should use API delete endpoint to delete item
      dispatch(deleteUser(id));
    },
    [dispatch],
  );

  const scrollToTop = useCallback(() => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={users}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.contentContainer}
          initialNumToRender={10}
          windowSize={5}
          renderItem={({item, index}) => (
            <UserCard
              data={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isNew={index === 0}
              scrollToTop={scrollToTop}
            />
          )}
        />
      </View>
      <Pressable style={styles.button} onPress={() => handleEdit()}>
        <Text style={styles.buttonText}>Create User +</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default HomeScreen;
