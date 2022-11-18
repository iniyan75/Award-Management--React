import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
export default function Addinfo() {


    const [uname, setName] = useState('')
    const [roll, setroll] = useState('')
    const [cls, setcls] = useState('')
    const [pass, setpass] = useState('')
    const [img, setImg] = useState('')
    const [email, setemail] = useState('')
    const [department, setDepartment] = useState('')
    const options = ['IT', 'CSE', 'MECH', 'EEE', 'CIVIL','E&I','ECE'];
    const onOptionChangeHandler = (event) => {
        setDepartment(event.target.value)
    }

    const [awards, setawards] = useState([{ aname: '', aimage: '', d: uuidv4() }])
    const handleLinks = () => {
        setawards([...awards, { aname: '', aimage: '', id: uuidv4() }])
    }
    const handleChange = (e, id) => {
        const newValues = awards.map(v => {
            if (v.id === id) {
                if (e.target.name === 'aname') {
                    v['aname'] = e.target.value
                }
                else {
                    v['aimage'] = e.target.value
                }

            }
            return v;
        })
        setawards(newValues)
    }
    const [loading, setload] = useState(false)

    const uploadimage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'images')
        setload(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/dpknb9sel/image/upload",
            {
                method: 'POST',
                body: data
            })

        var file = await res.json()
        console.log(file.secure_url)
        setImg(file.secure_url)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const values = {
            uname: uname,
            password: pass,
            email: email,
            image: img,
            class:cls,
            roll:roll,
            department: department,
            awards: awards



        }
        alert(typeof (values))
        await axios.post("http://localhost:3003/addinfo", values)
        // http://drive.google.com/uc?export=view&id=
    }

    const handleDelete = (id) => {
        const newValues = awards.filter(v => v.id != id)
        setawards(newValues)
    }
    return (
        <div className="addcourse-container">

            <div className="addcourse-form my-5">
                <form className='row gx-5' onSubmit={handleSubmit} >
                    <div className="row">
                        <h2 style={{ marginLeft: "40%" }}>New user Registration</h2>
                        <div style={{ marginLeft: '20%', marginTop: "2%" }}>
                            <div className="row">
                                <div className="col-4 ml-5">

                                    <div className="card shadow mt-2">
                                        <div>


                                            <div className=" p-2">
                                                <div className="form-group mb-3">
                                                    <label className="form-label">email</label>
                                                    <input type="text" className="form-control" value={email} onChange={e => setemail(e.target.value)} />
                                                </div>
                                                {/* <div className="form-group mb-3">
                                                    <label className="form-label">password</label>
                                                    <input type="text" className="form-control" value={pass} onChange={e => setpass(e.target.value)} />
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="card-body">

                                            <div className="form-group mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" value={uname} onChange={e => setName(e.target.value)} />
                                            </div>
                                            
                                            <div className="form-group mb-3">
                                                <label className="form-label">Roll Number</label>
                                                <input type="text" className="form-control" value={roll} onChange={e => setroll(e.target.value)} />
                                            </div>
                                            
                                          
                                            <div className="form-group mb-3">
                                                <label className="form-label">Image</label>
                                                <input type="file" className="form-control" onChange={uploadimage} />
                                            </div>
                                            <label className="form-label">Department</label>

                                            <select className="form-control" onChange={onOptionChangeHandler}>

                                                <option className="form-control">Please choose one option</option>
                                                {options.map((option, index) => {
                                                    return <option key={index} >
                                                        {option}
                                                    </option>
                                                })}
                                            </select>
                                            <div className="form-group mb-3">
                                                <label className="form-label">Class</label>
                                                <input type="text" className="form-control" value={cls} onChange={e => setcls(e.target.value)} />
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">

                                    <div className="card shadow p-2">


                                        <div>
                                            <div className="form-group">
                                                <label className="form-label"> Awards <span onClick={handleLinks}> <i className="fa fa-plus" style={{ fontSize: '30px', marginLeft: "2%", color: "green" }}></i></span></label>

                                                {awards.map((v, idx) => (

                                                    <div className='mb-3' key={v.id}>

                                                        <h6 className='mt-3'>Award {idx + 1}  <span onClick={() => handleDelete(v.id)}><i className="fa fa-trash" style={{ fontSize: '25px', marginLeft: "1%", color: 'red' }}></i></span> </h6>

                                                        <input type="text" className='form-control mb-1' name="aname" placeholder='award name' value={v.aname} onChange={e => handleChange(e, v.id)} />


                                                        <input type="text" className='form-control mb-1' name="aimage" placeholder='award details' value={v.aimage} onChange={e => handleChange(e, v.id)} />

                                                    </div>
                                                ))}
                                            </div>

                                            <div className="d-grid gap-2">
                                                <button className="btn btn-info">Add details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>



                </form>
            </div>
        </div>





    )
}
