import React, { useEffect, useState } from 'react';
//import styles from '../styles/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUserSolid} from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { User } from '@/util/auth';


const Header: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async () => {
	try {
	    const user = await fetch("/api/auth/who").then(e => e.json()) as User;
	    setUser(user);
	} catch (e) {
	    console.warn("Error fetching user", e);
	}
    };

    useEffect(()=>{fetchUser();}, []);
    
    return (
	<>
	    <FontAwesomeIcon icon={user ? faUserSolid : faUserRegular} size="lg" />
	    </>
  );
};

export default Header;
