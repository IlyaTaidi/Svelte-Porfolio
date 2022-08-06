import type {
  OAuthCredential,
  User
} from 'firebase/auth';

import type AppError from '../../AppError';

export default interface AuthState {
  credential: OAuthCredential,
  user: User,
  error: AppError,
  loading: boolean
}