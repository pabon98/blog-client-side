import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Addpost = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://warm-garden-67584.herokuapp.com/addpost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, userEmail: user.email, status:"1" })
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Post added successfully')
                    document.getElementById('addPostForm').reset()
                }
            })

    };
    return (
        <div>
            <h1>Add your blog in our site</h1>
            <form id="addPostForm" onSubmit={handleSubmit(onSubmit)}>
                <input name='title' className='form-control my-2' placeholder='Your Blog Title' {...register("title", { required: true })} />
                {errors.title && <span><p className='text-danger'>This field is required</p></span>}
                <textarea name='description' rows="3" className='form-control my-2' placeholder='Your Blog Description' {...register("description", { required: true })}></textarea>
                {errors.description && <span><p className='text-danger'>This field is required</p></span>}
                <input name='image' className='form-control my-2' placeholder="Your Blog Image" type="text" {...register("image", { required: true })} />
                {errors.image && <span><p className='text-danger'>This field is required</p></span>}
                <input {...register("published", { required: true })} className='form-control my-2' type="date" name="published" id="" />
                {errors.published && <span><p className='text-danger'>This field is required</p></span>}
                <input className='btn btn-dark' type="submit" value="Submit Blog" />
            </form>
        </div>
    );
};

export default Addpost;