import React, {useState} from 'react'

function Addstudent() {
    const [addData,setaddData] = useState({
        name:'',
        Year_of_study:'',
        Department:'',
        Roll_No:'',
        Role:''
    })
  return (
    <div className='Add-student-form-layout'>
        <div className='Add-student-form-container'>
            <form className='Add-studnet-form'>
                <div className='Add-student-form-name'>
                    <label>Name</label>
                    <input type='text' name='Name' placeholder='Name'/>
                </div>
                <div>
                    <label>Year of Study</label>
                    <input type='text' name='Year of study' />
                    <label>Department</label>
                    <input type='text' name='Department'/>
                </div>
                <div>
                    <label>Roll No:</label>
                    <input type='text' name='Roll no' />
                    <label>Role</label>
                    <input type='text' name='Role' placeholder='Role'/>
                </div>
                <button style={{width:'100px'}}>Submit</button>
                
            </form>

        </div>
    </div>
  )
}

export default Addstudent