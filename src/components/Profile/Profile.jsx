import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd';
const Profile = () => {

  const {user,getUserInfo} = useContext(UserContext)

  useEffect(() => {
    const tokenEncontrado = JSON.parse(localStorage.getItem("token"));
    if(tokenEncontrado)
      getUserInfo()
    
  }, [])

  if (!user) {
    return <Spin size="large" />;
  }
  

  return (
    <div>
    {!user ? <Spin size="small" /> : (
      <div>
        <h2>Perfil</h2>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    )}
  </div>
  )
}

export default Profile