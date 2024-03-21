import {commonAPI} from "./commonAPI"
import {baseUrl} from "./baseUrl"


//actuall api call

//1 register API call - post - body
export const registerAPI = async(user)=>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")
}

//2 login API call - post - body
export const loginAPI = async(user)=>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}

//3 Add project API call - post - body + header
export const addProjectAPI =async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${baseUrl}/project/add`,reqBody,reqHeader)
}

//4 get home project api call - get
export const getHomeProjectAPI = async()=>{
    return await commonAPI("get",`${baseUrl}/project/home-projects`,"","")
}

//5 get all project api call
export const getAllProjectAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("get",`${baseUrl}/project/all-projects?search=${searchKey}`,"",reqHeader)
}

//6 get user projects api call
export const getUserProjectAPI = async(reqHeader)=>{
    return await commonAPI("get",`${baseUrl}/project/all-user-projects`,"",reqHeader)
}

//7 edit user project
export const editUserProject = async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("put",`${baseUrl}/project/update-project/${projectId}`,reqBody,reqHeader)
}

//8 delete user project
export const deleteUserProjectAPI = async(projectId,reqHeader)=>{
    return await commonAPI("delete", `${baseUrl}/project/delete-project/${projectId}`,{},reqHeader)
}