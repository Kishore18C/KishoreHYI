import { baseUrl } from '../../../services/config';
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
