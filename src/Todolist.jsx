import React, { Fragment } from 'react'

const Todolist = (props) => {
  console.log(props);

  let {items,handleDelete,handleUpdate}=props
  return (
    <>
      <section className='todo'>
        <h2>Courses</h2>
        <table>
          <thead>
            <th>COURSE</th>
            <th>TRAINER</th>
            <th>ACTIONS</th>
          </thead>
          <tbody>
            {
              items.length>0 && items.map((value)=>{
                return (
                  <Fragment key={value.id}>
                    <tr>
                      <td>{value.course}</td>
                      <td>{value.trainer}</td>
                      <td>
                        <button onClick={()=>handleUpdate(value.id)}>Edit</button>
                        <button onClick={()=>handleDelete(value.id)}>Delete</button>
                      </td>
                    </tr>
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Todolist
