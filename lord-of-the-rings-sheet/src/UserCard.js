import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UserCard = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(res => setUsers(res.data))
            .catch(err => {
                console.log(err)
            })
    }, [users])
    //#region Comps
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/users:${id}`)
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
            })
    }
    const UserCard = styled.div`
    display:flex;
    border-radius:20px;
    box-shadow:4px 4px 4px rgba(0,0,0,.25);
    flex-flow:row wrap;
    margin:1rem;
    border:1px solid grey;
    width:80%;
    justify-content:center;
    // text-align:center;
    background:#223;
    color:white;
    h1{
    font-size:1.6rem;
    width:100%;
    padding:1rem;
    }
    p{
    width:100%;
    padding:1rem;
    }
    .btns{
    width:100%;
    display:flex;
    justify-content:space-between;
    margin:1rem;4
    i{
        padding:10px;
        color:grey;
        &:hover{
        color:darkgrey;
        }
    }
    }
`

    //#endregion

    return (
        users.map(user => {
            return (
                <UserCard key={user.id}>
                    <div className='btns'>
                        <i className='fas fa-edit' />
                        <i onClick={()=>handleDelete(user.id)} className='fas fa-trash' />
                    </div>
                    <h1>{user.name}</h1>
                    <p>{user.bio}</p>
                </UserCard>
            )
        })
    )
}

export default UserCard