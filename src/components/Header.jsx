import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
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
    </div>
  )
}

export default Header