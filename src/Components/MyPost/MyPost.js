import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from "../../hooks/useAuth"
import styles from "./MyPost.module.css"
import MyPostDetail from './MyPostDetail/MyPostDetail';

const MyPost = () => {
    const { user, isLoading, setIsLoading } = useAuth()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://warm-garden-67584.herokuapp.com/userposts/${user?.email}`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .finally(()=> setIsLoading(false))
    }, [])
    return (
        <>
            {!isLoading ?
                <div>
                    <div style={{ marginBottom: '300px' }} className='container border p-2 rounded-3 mt-5'>
                        <div id={`${styles.tableContainer}`} >
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Published</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    posts.length > 0 && posts?.map(post => <MyPostDetail key={post._id} post={post} />)
                                }
                            </table>
                        </div>
                    </div>
                </div> :
                <div className='container text-center mt-5'>
                    <Spinner animation="border" variant="info" />
                </div>
            }
        </>
    );
};

export default MyPost;