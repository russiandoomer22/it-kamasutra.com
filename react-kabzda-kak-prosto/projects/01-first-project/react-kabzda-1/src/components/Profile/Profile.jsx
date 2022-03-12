import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://img5.goodfon.ru/original/1280x1024/0/fd/kananaskis-range-canadian-rocky-mountains-alberta-canada-kan.jpg' width='750' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>;
};

export default Profile;