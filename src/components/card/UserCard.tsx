import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, Text, View, Alert} from 'react-native';

import {UserCardStyles as styles} from './UserCardStyles';
import {IUser} from '../../features/users/modal/UserModal';

interface IUserCardProps {
  data: IUser;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  isNew?: boolean;
  scrollToTop: () => void;
}

function UserCard({
  data,
  onEdit,
  onDelete,
  isNew,
  scrollToTop,
}: IUserCardProps) {
  const fadeAnim = useRef(new Animated.Value(isNew ? 0 : 1)).current;
  const scaleAnim = useRef(new Animated.Value(isNew ? 0.8 : 1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current; // Shake effect

  useEffect(() => {
    //If item is new added, perform some animations to highlight
    if (isNew) {
      scrollToTop();
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isNew]);

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleDelete = (id: number) => {
    triggerShake(); // Start shake effect on Delet opertion
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this user?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: () => onDelete(id)},
      ],
    );
  };

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          opacity: fadeAnim,
          transform: [{scale: scaleAnim}, {translateX: shakeAnim}],
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.cardData}>
          <Text
            numberOfLines={1}
            style={styles.text}>{`name : ${data.name}`}</Text>
          <Text
            numberOfLines={1}
            style={styles.text}>{`username : ${data.username}`}</Text>
          <Text
            numberOfLines={1}
            style={styles.text}>{`email: ${data.email}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => onEdit(data.id)}>
            <Text>Edit</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleDelete(data.id)}>
            <Text>Delete</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}

export default UserCard;
