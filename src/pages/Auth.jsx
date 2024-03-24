import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../Assets/login-animate.gif'
import { loginAPI, registerAPI } from '../services/allAPIs'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Auth({register}) {

  const location = useNavigate()

  const isRegisterFrom = register?true : false
  //state creation
  const [userData,setuserData] = useState({
    username:"",
    email:"",
    password:"",
  })
  console.log(userData);
//Register function
  const registerData=async()=>{
    const {username,email,password} = userData
    if(!username || !email || !password){
      alert("Please enter vaild details")
    }
    else{
      const result = await registerAPI(userData)
      console.log(result);
      if(result.status == 200){
        //api call
        alert(`${result.data}`)//user registration successful
        location('/login')
      }
      else{
        alert(result.response.data)//user
      }
    }
    // console.log(userData);
  }

  //login function
  const loginData = async()=>{
    const {email, password} = userData
    if(!email||!password){
      alert("Please Enter Valid details")
    }
    else{
      const result = await loginAPI(userData)
      console.log(result);
      if(result.status == 200){
        alert("Login successful")
        //set user object into session storage
        console.log(result);
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)
        location('/dashboard')
      }
      else{
        alert("Please enter valid details")
      }
    }
  }



  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              className='logo ms-3'
              src='https://www.theprojectilkeston.co.uk/wordpress/wp-content/uploads/2017/01/The-Project-Logo.jpg'
              height='120px'
              alt=''
            />
            FAIR
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%'}}>
      <div className="container">
        <div className="row" style={{marginBottom:'30px'}}>
          <div className="col">
            {/* image */}
            <img src={login} width={'100%'} alt="" />
          </div>
          <div className="col shadow card " style={{marginTop:'50px'}}>
            {/* input */}
            <div className='text-center mt-5'>
            <img
            width={'250px'}
             src="https://www.theprojectilkeston.co.uk/wordpress/wp-content/uploads/2017/01/The-Project-Logo.jpg" alt="" />
            </div>
            {/* <h3 className='text-center'>Fair</h3> */}
            <h5 className='mt-3 text-center'>
              {
                isRegisterFrom? 'Register Here' : 'Login Here'
              }
            </h5>
            <form>
              {
                isRegisterFrom &&
                <input type='text' value={userData.username} onChange={e=>setuserData({...userData,username: e.target.value})} placeholder='Enter Name' className='form-control mb-4 mt-3'/>
              }
                <input type='text' value={userData.email} onChange={e=>setuserData({...userData,email: e.target.value})} placeholder='Enter Email' className='form-control mb-4 mt-3'/>
                <input type='text' value={userData.password} onChange={e=>setuserData({...userData,password: e.target.value})} placeholder='Enter Password' className='form-control mb-4'/>
            </form>

            {
              isRegisterFrom ?
              <div className='text-center m-3'>
                <button onClick={registerData} className='btn btn-outline-primary'>Register</button>
                <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>
                <p className='m-3'>Already Register? Please Login from here</p>
                </Link>
              </div>
              :
              <div className='text-center m-3'>
                <button onClick={loginData} className='btn btn-outline-primary'>Login</button>
                <Link to={'/register'} style={{textDecoration:'none',color:'black'}}>
                <p className='m-3'>New to here? Please Register.....</p>
                </Link>
              </div>
            }


          </div>
        </div>
      </div>



      <div className='text-center mt-3'>
        <Link to={'/'}>
        <button className='btn btn-dark'>Back to Home</button>
        </Link>
      </div>

    </div>
    </div>
  )
}

export default Auth