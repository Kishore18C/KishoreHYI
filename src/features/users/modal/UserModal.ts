export interface IUserSliceData {
  users: IUser[];
  idCount: number;
}

export interface IUser {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  address?: IAddress;
  phone?: string;
  website?: string;
  company?: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export enum IUserEndPoints {
  user = 'user',
}

export interface IFormData {
  value: string;
  isValid: boolean;
  message: string;
}
