import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {UserCardStyles as styles} from './UserCardStyles';
import {IUser} from '../../features/users/modal/UserModal';

interface IUserCardProps {
  data: IUser;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function UserCard(props: IUserCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cardData}>
        <Text>{`name : ${props.data.name}`}</Text>
        <Text>{`username : ${props.data.username}`}</Text>
        <Text>{`email: ${props.data.email}`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => props.onEdit(props.data.id)}>
          <Text>Edit</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => props.onDelete(props.data.id)}>
          <Text>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default UserCard;
