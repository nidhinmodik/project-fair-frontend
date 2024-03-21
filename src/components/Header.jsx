import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Header() {

  const location = useNavigate()
  const logout=()=>{
    sessionStorage.clear();
    location('/')
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
          <div onClick={logout} className="btn btn-danger"><i class="fa-solid fa-right-from-bracket"></i></div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header