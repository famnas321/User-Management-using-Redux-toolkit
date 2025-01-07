import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addUser,deleteUser,updateUserName } from './Features/Users';
import './App.css'
function App() {
  const [name,setName]=useState("")
  const [userName,setUserName]=useState("")
  const [newUserName,setNewUserName]=useState("")

  
  const userList=useSelector((state) =>state.User.value)
  console.log(userList);
  const dispatch= useDispatch()
  

  return (
    <>
    

    <div className='add-users '>
      <h1 >This is Add User page </h1>
  
      <input type="text" name="" id="" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
      <input type="text" name="" id="" placeholder="Enter User Name" onChange={(e)=> setUserName(e.target.value)} />
      <button onClick={()=> {dispatch(addUser( {id:userList[userList.length-1].id+1,name,userName}))} }>Add User</button>

    </div>
    <div className="user-list">
        <h1>User List</h1>
        <div className="card-container">
          {userList.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>Username: {user.userName}</p>
              <input type="text" name="" id="" placeholder="Enter New User Name" onChange={(e)=> setNewUserName(e.target.value)} />
              <button  className="update-button" onClick={()=>{dispatch(updateUserName({id:user.id,username:newUserName}))}}>Update User Name</button>

              <button className='delete-button' onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete</button>

            </div>
          ))}
        </div>
      </div>
  
  


    
     </>
  )
}

export default App
