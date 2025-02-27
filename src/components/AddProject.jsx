import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../Assets/DXKh.gif'
import { addProjectAPI } from '../services/allAPIs';
import { addProjectResponseContext } from '../ContextAPI/ContextShare';




function AddProject() {

  const {addProjectRes,setAddProjectRes} = useContext(addProjectResponseContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //to hold token
    const [token,setToken] = useState("")
  //get token from sessionStorage
    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }
    },[])


    //to hold project details
    const [projectDetails,setProjectDetails] = useState({
      title:"",language:"",github:"",link:"",overview:"",projectImage:""
    });
    console.log(projectDetails);

    //to hold the image url
    const [preview,setPreview] = useState("")
    console.log(preview);


    useEffect(()=>{
      if(projectDetails.projectImage){
        //convert it to a url
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      }
    },[projectDetails.projectImage])

    const projectAdd = async()=>{
      const {title,language,github,link,overview,projectImage}=projectDetails
      if(!title||!language||!github||!link||!overview||!projectImage){
        alert("Please Enter Details")
      }
      else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("link",link)
        reqBody.append("overview",overview)
        reqBody.append("projectImage",projectImage)

        const reqHeader ={
          "Content-Type": "multipart/form-data",//req contains a file upload content(image)
          "Authorization": `Bearer ${token}`//req contains token for backend
        }
        //API call
        const result = await addProjectAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status === 200){
          console.log(result.data);//successfull
          alert("Project added Successfully....")
          handleClose()//to close the modal after adding project 
          setAddProjectRes(result.data)//context access the add project data
          setProjectDetails({//make the state value is empty
            title:"",language:"",github:"",link:"",overview:"",projectImage:"",
          })
          setPreview("")
        }
        else{
          alert(result.response.data)
          console.log(result.response.data);//error
        }
      }
    }


  return (
    <div>
        <button className='btn btn-success' onClick={handleShow}>Add Project</button>

        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-center' style={{textShadow:'1px 3px 4px'}}> <span className='text-primary'>Project</span> Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              {/* image */}
              <label>
                <input style={{display:'none'}} type="file" onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
                <img className='mb-3' src={preview?preview:img} width={'100%'} alt="" />
              </label>
            </div>
            <div className="col">
              {/* input */}
              <div>
              <input type="text" value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} placeholder="Project Title" className="form-control mb-3" />
              <input type="text" value={projectDetails.language} onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})} placeholder="Language" className="form-control mb-3" />
              <input type="text" value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} placeholder="GitHub Link" className="form-control mb-3" />
              <input type="text" value={projectDetails.link} onChange={e=>setProjectDetails({...projectDetails,link:e.target.value})} placeholder="Website Link" className="form-control mb-3" />
              <input type="text"  value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}placeholder="Project Description" className="form-control mb-3" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
          <Button variant="success" onClick={projectAdd}>
            Add
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject