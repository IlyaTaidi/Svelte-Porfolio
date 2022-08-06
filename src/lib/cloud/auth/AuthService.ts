import {
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  Auth,
  GoogleAuthProvider,
  OAuthCredential,
  User,
  UserCredential,
} from 'firebase/auth';

import type { FirebaseApp } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import type AuthState from './AuthState';

export class AuthService {
  private auth: Auth;
  private credential: OAuthCredential;
  private provider: GoogleAuthProvider;

  private state = new BehaviorSubject<AuthState>({
    credential: null,
    error: null,
    loading: true,
    user: null,
  });

  private handleError = (e: any) => {
    console.error(e);

    this.state.next({
      ...this.state.value,
      credential: this.credential,
      loading: false,
      error: {
        code: e.code,
        message: e.message,
      },
    });
  };

  private setCredential = (result?: UserCredential | null) =>
    (this.credential = result
      ? GoogleAuthProvider.credentialFromResult(result)
      : null);

  private beginAction = () => this.state.next({
    ...this.state.value,
    loading: true,
    error: null
  });

  state$ = this.state.asObservable();

  constructor(app: FirebaseApp) {
    this.auth = getAuth(app);
    this.auth.useDeviceLanguage();
    this.provider = new GoogleAuthProvider();

    onAuthStateChanged(this.auth, (user: User | null) => {
      this.state.next({
        ...this.state.value,
        credential: this.credential,
        user,
        loading: false,
      });
    });

    getRedirectResult(this.auth)
      .then((result: UserCredential | null) => this.setCredential(result))
      .catch((error: any) => {
        this.setCredential();
        this.handleError(error);
      });
  }

  signin = () => {
    this.beginAction();
    signInWithRedirect(this.auth, this.provider);
  }

  signout = async () => {
    try {
      this.beginAction();
      await signOut(this.auth);
    } catch (error: any) {
      this.setCredential();
      this.handleError(error);
    }
  }
}
