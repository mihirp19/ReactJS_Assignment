import React, { useState } from 'react'

export const CRUDExampleLong = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [Id, setId] = useState("");
    const [data, setData] = useState([])

    const saveData = (e) =>{
        e.preventDefault();
        setData([
            ...data,
            {
                name:name,
                age:age,
                course:course
            }
        ])
        setName('')
        setAge('')
        setCourse('')
    }

    const delData = (Id) => {
        let data1 = data.filter((i,index)=>{
            return Id != index;
        })
        setData(data1);
    }

    const editData = (Id) => {
        setId(Id)
        let data1 = data.filter((i,index)=>{
            return Id == index;
        })
        setName(data1[0].name)
        setAge(data1[0].age)
        setCourse(data1[0].course)
    }

    const updateData = (e) => {
        e.preventDefault();
        let data1 = data.map((i,index)=>{
            if(index == Id){
                i.name = name;
                i.age = age;
                i.course = course;
            }
            return i;
        })
        setData(data1)
        setName('')
        setAge('')
        setCourse('')
        setId('')
    }

  return (
    <div>
    <h3>User Registration Form</h3>
    <form action="#" name='frm' method='post' onSubmit={Id ? updateData:saveData}>
        Name: <input type="text" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
        Age: <input type="number" name="age" id="" value={age} onChange={(e)=>setAge(e.target.value)}/>
        Course: <input type="text" name="course" id="" value={course} onChange={(e)=>setCourse(e.target.value)}/>
        <input type="submit" value={Id ? "Update Data":"Save Data"} />
    </form>
    <table border={'2'}>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Age</td>
        <td>Course</td>
        <td colSpan={'2'}>Action</td>
    </tr>
    {
        data.map((i,index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{i.name}</td>
                    <td>{i.age}</td>
                    <td>{i.course}</td>
                    <td><button onClick={()=>editData(index)}>Edit</button><button onClick={()=>delData(index)}>Delete</button></td>
                </tr>
            )
        })
    }
    </table>
    </div>
  )
}
