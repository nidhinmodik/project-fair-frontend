import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { getUserProjectAPI } from '../services/allAPIs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addProjectResponseContext } from '../ContextAPI/ContextShare';
import EditProject from './EditProject';

function Myproject() {

    const {addProjectRes,setAddProjectRes} = useContext(addProjectResponseContext)

    const [userProject, setUserProject] = useState([])
    //api call
    const userProjects = async () => {

        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await getUserProjectAPI(reqHeader);
                console.log(result);
                if (result.status === 200) {
                    setUserProject(result.data);
                    console.log(userProject);
                }
                else {
                    alert('failed to retrieve project')
                }
            }
            catch (error) {
                console.error('Error fetching project');
                alert('failed to retrieve project')
            }
        }
    }

    useEffect(() => {
        userProjects()
    }, [addProjectRes])
    return (
        <div className='container mt-5'>
            <div className='d-flex'>
                <h3 className='ms-5'>My Projects</h3>
                <div className='ms-auto'>
                    {/* Add Project */}
                    <AddProject />
                </div>
            </div>
            <div className='h d-flex justify-content-between'>
                <Row>
                    {userProject.length > 0 ? (
                        userProject.map((item, index) => (
                            <div className='d-inline-flex justify-content-between'>
                                <h5 className='text-center mt-5 ms-4'>{item.title}</h5>
                                <div className='m-3'>
                                    <button className='btn'><EditProject project={item}/></button>
                                    <button className='btn btn-secondary m-2'><i className='fa-brands fa-github'></i></button>
                                    <button className='btn btn-danger m-2'><i class="fa-solid fa-trash"></i></button>
                                </div >
                            </div>
                        ))
                    ) : (
                        <div className='text-center'>No Projects Found</div>
                    )}
                </Row>
            </div>
        </div>
    )
}

export default Myproject