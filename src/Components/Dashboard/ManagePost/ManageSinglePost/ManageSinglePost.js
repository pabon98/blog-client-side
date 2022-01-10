import React from 'react';

const ManageSinglePost = ({ post }) => {
    const { image, title, published, _id, status } = post;
    const handleDeletePost = _id => {
        fetch(`https://warm-garden-67584.herokuapp.com/post/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Post deleted successfully')
                    window.location.reload();
                }
            })
    }
    const approvePost = () => {
        fetch("https://warm-garden-67584.herokuapp.com/post/status", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: _id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Post deleted successfully')
                    window.location.reload();
                }
            })
    }
    return (
        <tr>
            <td>
                <img src={image} style={{ width: '50px', height: '50px' }} alt="" />
            </td>
            <td>{title}</td>
            <td>{published}</td>
            <td className={status === '1' ? 'text-danger' : 'text-success'}>{status === "1" ? 'Pending' : 'Approved'}</td>
            <td>{status == '1' ? <button className='btn btn-success' onClick={() => approvePost(_id)}>APPROVE</button> : "Approved by admin"}</td>
            <td>
                <span>
                    <button className='btn btn-outline-danger' onClick={() => handleDeletePost(_id)}>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </span>
            </td>
        </tr>
    );
};

export default ManageSinglePost;