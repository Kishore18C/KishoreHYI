import {baseUrl} from '../../../services/config';
import {IUserEndPoints} from '../modal/UserModal';

export function getUserEndPoints(apiType: IUserEndPoints) {
  switch (apiType) {
    case IUserEndPoints.user:
      return `${baseUrl}/users`;
    // Add other end points of this feature...
    default:
      return '';
  }
}

export const formJson = [
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

export const userProfileUri =
  'https://cdn-icons-png.flaticon.com/512/149/149071.png'; // Golden-themed user icon

const validateEmail = (value: string) => {
  value = (value ?? '').toLowerCase();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value.trim() === '') {
    return {
      value,
      isValid: false,
      message: 'Field is required',
    };
  } else if (value.length < 3) {
    return {
      value,
      isValid: false,
      message: 'Field should be at least 3 characters long',
    };
  } else if (!emailRegex.test(value)) {
    return {
      value,
      isValid: false,
      message: 'Enter a valid email address',
    };
  }

  return {
    value,
    isValid: true,
    message: '',
  };
};

const validateText = (value: string) => {
  if (value.trim() === '') {
    return {
      value,
      isValid: false,
      message: 'Field is required',
    };
  } else if (value.length < 3) {
    return {
      value,
      isValid: false,
      message: 'Field should be at least 3 characters long',
    };
  }

  return {
    value,
    isValid: true,
    message: '',
  };
};

export const validateInput = (value: string, key: string) => {
  return key === 'email' ? validateEmail(value) : validateText(value);
};
