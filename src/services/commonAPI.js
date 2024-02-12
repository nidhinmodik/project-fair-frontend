import axios from 'axios'

export const commonAPI =async(httpRequest,url,reqBody,reqHeaders)=>{
    const reqconfig = {
        method:httpRequest, //get or post
        url, //localhost:3000/register
        data:reqBody, //username , email,password
        headers:reqHeaders? reqHeaders : {"Content-Type":"application/json"}//images
    }
    //create axios instance

    return await axios(reqconfig).then((response)=>{
        return response
    })
    .catch((err)=>{
        return err
    })
}