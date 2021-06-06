import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import Nav from '../nav/nav';
import './ProfileScreen.scss'

const ProfileScreen = ()=> {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Avtar"/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                    </div>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <p>Renewal Date</p>
                        <button className="profileScreen__signout" onClick={()=> auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
