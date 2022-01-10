import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ManageSinglePost from './ManageSinglePost/ManageSinglePost';

const ManagePost = () => {
    const { isLoading, setIsLoading } = useAuth();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch("https://warm-garden-67584.herokuapp.com/allposts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .finally(()=> setIsLoading(false))
    }, [])

    
    return (
        <div>
            <h1>Here is the posts admin.</h1>
            {!isLoading ?
                <div style={{ marginBottom: '300px' }} className='container border p-2 rounded-3 mt-5'>
                    <div id='table-container'>
                        <table>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Delete</th>
                            </tr>
                            {
                                posts?.map(post => <ManageSinglePost
                                    key={post._id}
                                    post={post}
                                ></ManageSinglePost>)
                            }
                        </table>
                    </div>
                </div>
                :
                <div style={{ marginBottom: '300px' }} className='container text-center mt-5'>
                    <Spinner animation="border" variant="dark" />
                </div>
            }
        </div>
    );
};

export default ManagePost;