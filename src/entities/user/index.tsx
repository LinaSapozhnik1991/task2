import React from 'react';
import styles from './User.module.scss';
interface UserProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const User: React.FC<UserProps> = ({ firstName, lastName, email, phone }) => {
    return (
        <div className={styles.userInfo}>
            <h3>{`${firstName} ${lastName}`}</h3>
            <p> {email}</p>
            <p> {phone}</p>
        </div>
    );
};

export default User;
