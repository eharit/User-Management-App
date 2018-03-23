import {
  FETCH_USERS
} from './types';

export function fetchUsers(name, index) {
  return {
    type: FETCH_USERS,
    payload: { name, index }
  }
}
