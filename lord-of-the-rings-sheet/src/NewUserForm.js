import React, { useState } from 'react'
import axios from 'axios'

const NewUserForm = (props) => {
    const [payload, setPayload] = useState({
        name: '',
        bio: ''
    })
    const handleChange = (e) => {
        e.preventDefault()
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/users', payload)
            .then(res => {
            }).catch(err => {
                console.log(err)
            })
            props.history.push('/')
        }
    return (
        <form onSubmit={submit}>
            <input
                name='name'
                onChange={handleChange}
                value={payload.name}
                placeholder='Name'
            />
            <textarea
                name='bio'
                onChange={handleChange}
                value={payload.bio}
                placeholder='Bio'
            />
            <button>Finished</button>
        </form>
    )
}

export default NewUserForm 