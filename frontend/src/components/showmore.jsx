import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Showmore() {
    const { id } = useParams()
    const [wait, waitset] = React.useState(false)
    const [data, setdata] = React.useState()
    const [toggle, settoggle] = React.useState(false)
    const [aname, anameset] = React.useState()
    const [aimage, aimageset] = React.useState()
    const [loading, setloading] = React.useState(false)
    const fetchdata = async () => {
        const res = await axios.get(`http://localhost:3003/show/${id}`)
        setdata(res.data)

    }


    // React.useEffect(() => {

    //     fetchdata()
    // }, [])
    React.useEffect(() => {
        fetchdata()

        if (data) {
            waitset(true)

        }
    }, [data])
    const handleClick = async (e) => {
        e.preventDefault();
        
        
        const values = {
            aname: aname,
            aimage: aimage
        }
        await axios.post(`http://localhost:3003/addnew/${id}`, (values))
    }
    const deleted = async (id1) => {
      
        console.log(id1)

        await axios.post(`http://localhost:3003/delete/${id1}/${id}`)

    }

    return (
        <>

            {wait ?
                <div className="row">
                    <div className="col-6">
                        <div className="card shadow p-4" style={{ marginLeft: '5%',paddingRight:"105%" }}>
                            <h1 className="display-3" style={{ marginLeft: "20%", fontSize: "50px" }}>Personal Details  </h1>
                            <div >
                                <div className="row">
                                    <div className="col-4 mt-4">
                                        <img src={data.image} style={{ height: '100%', width: "100%" }} alt="" />
                                    </div>

                                    <div className="col-6 mt-4">
                                        <table>
                                            <tr>
                                                <td>

                                                    <h4>Roll number</h4>
                                                </td>
                                                <td>
                                                    :
                                                </td>
                                                <td>
                                                    <h4 style={{ color: 'gray' }}>{data.roll}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>

                                                    <h4>Name</h4>


                                                </td>
                                                <td>
                                                    :
                                                </td>
                                                <td>
                                                    <h4 style={{ color: 'gray' }}>{data.uname}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>Email</h4>

                                                </td>
                                                <td>
                                                    :
                                                </td>
                                                <td>
                                                    <h4 style={{ color: 'gray' }}>{data.email}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h4>Department</h4>

                                                </td>
                                                <td>
                                                    :
                                                </td>
                                                <td>
                                                    <h4 style={{ color: 'gray' }}>{data.department}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> <h4>class</h4>

                                                </td>
                                                <td>:</td>
                                                <td><h4 style={{ color: 'gray' }}>{data.class}</h4>


                                                </td>
                                            </tr>
                                        </table>
                                    </div>


                                </div>

                            </div>


                        </div>
                        <div>
                            <button style={{ marginLeft: "30%", marginTop: "5%" }} className="btn btn-success" onClick={() => settoggle(true)}>add new award</button>
                        </div>
                        <div>
                            {toggle &&
                                <div style={{ marginLeft: '5%' }}>
                                    <h3>Add new award</h3>
                                    <div  >

                                        <form class='form col-md-5'>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Award Name</label>
                                                <input name="uname" value={aname} type="text" onChange={e => anameset(e.target.value)} class="form-control" placeholder="Enter name" />



                                                <label for="exampleInputEmail1">Award  details</label>
                                                <input name="review" value={aimage} type="text" onChange={e => aimageset(e.target.value)} class="form-control" placeholder="award details" />

                                            </div>

                                            <button style={{ marginTop: '2%' }} onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>


                                        </form>
                                    </div>

                                </div>}

                        </div>
                    </div>
                    <div className="col-6">


                        <div  >
                            <div >
                                <h1 className="display-3" style={{ marginLeft: "20%", fontSize: "50px" }}>Award Details  </h1>
                                <div className="row">
                                    {data.awards.map(i => (
                                        <div key={i._id} style={{marginBottom:'5%'}} className="col-12">
                                            <div style={{ height: '100%', borderRadius: "25px 0px 0px 25px" }} className="card shadow">
                                                <div className="row">
                                                    <div className="col-3"  >
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKuhJVByNUMoAoouJ-dGc3DmaiJexkf871A&usqp=CAU" style={{ height: '100%', width: '50%', borderRadius: "25px" }}></img>
                                                    </div>
                                                    <div style={{ marginTop: "2%" }} className="col-3" >
                                                        <h4>{i.aname}</h4>

                                                    </div>
                                                    <div style={{ marginTop: "2%" }} className="col-3" >
                                                        <small>{i.aimage}</small>

                                                    </div>
                                                    <div style={{ marginTop: "10%",marginLeft:"10%" }} className="col-3 ms-auto" >

                                                        <div style={{ cursor: 'pointer',color:'grey' }} onClick={() => deleted(i._id)}>Delete this award<i className="fa fa-trash" style={{ fontSize: '25px', marginLeft: "1%", color: 'red' }}></i></div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>

                            </div>





                        </div>
                    </div> </div> :
                <div>Loading...</div>


            }

        </>
    )
}