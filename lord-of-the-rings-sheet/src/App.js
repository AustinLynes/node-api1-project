import React from 'react'
import './App.scss'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import UserCard from './UserCard'
import NewUserForm from './NewUserForm'
function App() {

  const Button = styled.button`
  position:fixed;
  bottom:50px;
  right:50px;
  border:none;
  border-radius:20px;
  background:#223;
  box-shadow:4px 4px 4px rgba(0,0,0,.25);
  i{
    padding:2rem;
    font-size:3rem;
    color:grey;
    &:hover{
      color:darkgrey;
    }
 `
 return (
    <div className="App">
      <Route exact path='/' component={UserCard} />
      <Route exact path='/new-user' component={NewUserForm} />
      <Link to='/new-user'>
        <Button><i className='fas fa-plus' /></Button>
      </Link>
    </div>
  );
}

export default App;
