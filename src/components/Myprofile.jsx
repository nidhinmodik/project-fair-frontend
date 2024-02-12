import React from 'react'

function Myprofile() {
  return (
    <div style={{boxShadow:'1px 1px 25px 2px',borderRadius:'65px',backgroundColor:'rgb(0,0,0,0.09)'}} className='text-center m-2 mb-5 p-5'>
        <h3>My Profile</h3>
        <label>
            <input style={{display:'none'}} type="file" />
            <img className='mb-3' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png" width={'150px'} height={'150px'} alt="" />
        </label>

<div className='w-50' style={{marginLeft:'150px'}}>
<input type="text" placeholder='User Name' className='form-control mb-3' />
<input type="text" placeholder='Git Hub' className='form-control mb-3' />
<input type="text" placeholder='LinkedIn' className='form-control mb-3' />
</div>
        

    </div>
  )
}

export default Myprofile