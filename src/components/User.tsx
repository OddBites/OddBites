import React, { useEffect, useState } from 'react';
import styles from '../styles/user.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUserSolid} from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { User } from '@/util/auth';
import { getJSON, post } from "@/util/request";


const Header: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async () => {
	try {
	    const user = await getJSON<User>("/api/auth/who");
	    setUser(user);
	} catch (e) {
	    console.info("Error fetching user", e);
	}
    };

    useEffect(()=>{fetchUser();}, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = async () => {
	await post("/api/auth/login", {
	    email: email,
	    password: password
	});
	fetchUser();
    };

    const logout = async () => {
	await post("/api/auth/logout");
	fetchUser();
    };
    
    return (
	<>
	    <div tabIndex={-1} className={styles.dropdown}>
	        <FontAwesomeIcon icon={user ? faUserSolid : faUserRegular} size="lg" />
	        <div className={styles.dropdown_content}>
	            { user ?
		        <>
			    <p>{ user.email }</p>
			    <button onClick={_ => logout()}>Logout</button>
		        </>
			:
			<>
			    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
			    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
			    <button onClick={_ => login()}>Log in</button>
			</>}
	        </div>
	    </div>
	</>
  );
};

export default Header;
