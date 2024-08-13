import React from 'react'

const Form = (props) => {

  let {course,trainer,handleChange,handleSubmit}=props
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="course">Course</label>
          <input type="text" id='course' name='course' value={course} onChange={handleChange} placeholder='Enter course' />
        </div>
        <div className='form-group'>
          <label htmlFor="trainer">Trainer</label>
          <input type="text" id='trainer' name='trainer' value={trainer} onChange={handleChange} placeholder='Enter Trainer' />
        </div>
        <div className='form-group'>
          <button>SUBMIT</button>
        </div>
      </form>
    </>
  )
}

export default Form
