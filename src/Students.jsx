import React from 'react'

const Students = (props) => {
    let data1=props.data1
  return (
    <div>
        <table border="2px">
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>address</th>
            <th>phone</th>
            {data1.map((x)=>{
                return <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.address}</td>
                    <td><ul>{x.phone.map((x)=>{
                        return <li>{x}</li>
                    })}</ul></td>
                </tr>
            })}
        </table>
    </div>
  )
}

export default Students