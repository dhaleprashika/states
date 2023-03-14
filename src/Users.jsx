import React from 'react'

const Users = (props) => {
    let data=props.data
   
  return (
    
    <div>
        <table border="2px" style={{textAlign:"center", fontWeight:"bold"}}>

            <th>username</th>
            <th>age</th>
            <th>skills</th>
            <th>occupation</th>
            <th>salary</th>
            <th>photo</th>

            {data.map((x)=>{
                return <tr>
                    <td>{x.username}</td>
                    <td>{x.age}</td>
                    <td><ol>{x.skills.map((x)=>{
                        return <li>{x}</li>
                    })}</ol></td>
                    <td>{x.occupation}</td>
                    <td>{x.salary}</td>
                    <td><img src={x.photo} alt="" height="80px" width="80px" /></td>
                </tr>
            })}

        </table>
    </div>

  
  )
}

export default Users