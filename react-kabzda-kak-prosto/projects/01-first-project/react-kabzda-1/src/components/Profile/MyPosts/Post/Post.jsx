import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://img3.goodfon.ru/original/1920x1080/4/3f/kristina-bazan-kristina-625.jpg' />
            {props.message}
            <div>
                <span>{props.likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;