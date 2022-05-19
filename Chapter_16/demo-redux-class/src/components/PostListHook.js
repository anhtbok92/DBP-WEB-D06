import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";

const PostListHook = () => {
    // 1. Lấy dữ liệu từ global state bằng cách sử dụng useSelector (tương ứng với mapStateToProps)
    const posts = useSelector((state) => {
       console.log('globalState-', state);
       return state.posts;
    });

    //2. Lấy actions bằng cách sử dụng useDispatch (giống như mapDispatchToProps)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <>
            {posts.map((post) => {
                return (
                    <div>
                        <h2>Title: {post.title}</h2>
                        <h2>Body: {post.body}</h2>
                        <br />
                    </div>
                )
            })

            }
        </>
    )
}

export default PostListHook;