import React, { useState } from 'react'

export const CRUDExample = () => {
    const [data, setData] = useState({
        name:'',
        age:'',
        salary:''
    })
    const [allUser, setAllUser] = useState([])
    const [id,setId] = useState('')
    
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault();
        setAllUser([
            ...allUser,
            data
        ])
        setData({
            name:'',
            age:'',
            salary:''
        })
    }
    const editData = (id)=>{
        setId(id)
        //data.find()
        let data1 = allUser.filter((i,index)=>{
            return id==index;
        })
        setData({
            name:data1[0].name,
            age:data1[0].age,
            salary:data1[0].salary
        })
    }
    const delData = (id)=>{
        let data1 = allUser.filter((i,index)=>{
            return id!=index
        })
        setAllUser(data1)
    }
    const updateData = (e)=>{
        e.preventDefault();
        let data1 = allUser.map((i,index)=>{
            if(index == id){
                i.name = data.name;
                i.age = data.age;
                i.salary = data.salary;
            }
            return i;
        })
        setAllUser(data1)
        setData({
            name:'',
            age:'',
            salary:''
        })
        setId('');
    }
  return (
    <div>
        <h3>User Info</h3>
        <form action="#" name='frm' method='post' onSubmit={id !== '' ? updateData:saveData}>
        Name: <input type="text" name="name" id="" value={data.name} onChange={handleChange} />
        Age: <input type="number" name="age" id="" value={data.age} onChange={handleChange}/>
        Salary: <input type="number" name="salary" id="" value={data.salary} onChange={handleChange}/>
        <input type="submit" value={id !== '' ? "Update Data" : "Save Data"} />
        </form>

        <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Action</td>
        </tr>
        {
            allUser.map((i,index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                        <td><button onClick={()=>editData(index)}>Edit</button> <button onClick={()=>delData(index)}>Delete</button></td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}
