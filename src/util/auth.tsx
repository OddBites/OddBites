import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, User as FBUser } from "firebase/auth";
import * as firebase from "./../../firebase"

export const signIn = async (email: string, password: string): Promise<User | null>  => {
    try {
	const credential =  await signInWithEmailAndPassword(firebase.auth, email, password);
	if(!credential.user.email){
	    return null;
	}
	return {
	    email: credential.user.email
	};
    } catch (e) {
	return null;
    }
};

export const currentUser = (): User | null => {
    const user = firebase.auth.currentUser;
    if(!user || !user.email){
	return null;
    }
    return {
	email: user.email
    };
}

export type User = {
    email: string
}
