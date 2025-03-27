import React from 'react';
import {TextInput, View, TextInputProps, Text} from 'react-native';
import {TextFieldStyle as styles} from './TextFieldStyle';

interface ITextField extends TextInputProps {
  errorCondition?: boolean;
  errorMessage?: string;
  title?: string;
}

const TextField: React.FC<ITextField> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
      <TextInput
        style={[styles.input, props.errorCondition && styles.errorInput]}
        {...props}
      />
      {props.errorCondition && (
        <Text style={styles.errorText}>{props?.errorMessage ?? ''}</Text>
      )}
    </View>
  );
};

export default TextField;
