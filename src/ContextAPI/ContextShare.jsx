import React, { createContext, useState } from 'react'



export const addProjectResponseContext = createContext()


function ContextShare({children}) {

    const [addProjectRes,setAddProjectRes] = useState("")



  return (
    <>
    <addProjectResponseContext.Provider value={{addProjectRes,setAddProjectRes}}>
        {children}
    </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare