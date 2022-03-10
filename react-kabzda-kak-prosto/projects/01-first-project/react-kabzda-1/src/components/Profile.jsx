import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://img5.goodfon.ru/original/1280x1024/0/fd/kananaskis-range-canadian-rocky-mountains-alberta-canada-kan.jpg' width='750' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
    </div>;
};

export default Profile;