import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../Assets/DXKh.gif'
import { baseUrl } from '../services/baseUrl'
import { editUserProject } from '../services/allAPIs';

function EditProject({project}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     //to hold project details
     const [projectDetails,setProjectDetails] = useState({
        id:project._id,title:project.title,language:project.language,github:project.github,link:project.link,overview:project.overview,projectImage:""
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


      //project update
      const updateProject = async()=>{
        const {id,title,language,github,link,overview,projectImage}=projectDetails
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("link",link)
        reqBody.append("overview",overview)
        preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)

        const token = sessionStorage.getItem("token")
        console.log(token);

        //api call
        if(token){
          const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          //api call

          const result = await editUserProject(id,reqBody,reqHeader)
          console.log(result);
          if(result.status == 200){
            setProjectDetails(result.data)
          }
        }
    }
  return (
    <div>
        <button className='btn btn-outline-success' onClick={handleShow}><i class="fa-solid fa-pen"></i></button>

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
                <img className='mb-3' src={preview?preview:`${baseUrl}/uploads/${project.projectImage}`} width={'100%'} alt="" />
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
          <Button variant="success" onClick={updateProject}>
            Update
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProject