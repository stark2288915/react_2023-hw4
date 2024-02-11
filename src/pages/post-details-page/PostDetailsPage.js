import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {getPost} from "../../services/posts.api.service";
import {PostDetailsCommponent} from "../../components/posts-commponents/PostDetailsCommponent";

const PostDetailsPage = () => {

    const {state} = useLocation();


    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(state.postId).then(value => setPost(value.data));
    }, [state])


    return (
        <div>
            <PostDetailsCommponent post={post} />
        </div>
    );
};

export {PostDetailsPage};