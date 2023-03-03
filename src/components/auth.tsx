import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signIn = async (email: string, password: string): Promise<User | null>  => {
    try {
	const credential =  await signInWithEmailAndPassword(auth, email, password);
	return credential.user;
    } catch (e) {
	return null;
    }
};

export const currentUser = (): User | null => {
    return auth.currentUser;
}
