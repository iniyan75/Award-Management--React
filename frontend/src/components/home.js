import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
export default function Home() {

    const [query, setQuery] = React.useState();
    const [data, setdata] = React.useState([])
    const [change, changefun] = React.useState(true)
    const [search, setsearch] = React.useState(true)
    const [loading, setloading] = React.useState(false)
    React.useEffect(() => {
        const fetchdata = async () => {
            const res = await axios.get(`http://localhost:3003`)
            setdata(res.data)
        }
        fetchdata()

    }, [query])

    var datas
    console.log(data)
    if (search) {

        datas = data.filter(dat => dat.uname.toLowerCase().includes(query))

    }
    else {

        
            datas = data.filter(dat => dat.department.toLowerCase().includes(query))


           


    }



    function onchange(e) {
        setQuery(e.target.value)
        changefun(false)

    }


    return (
        <>
            <h1 style={{ marginLeft: '25%' }} className="display-3">Student Award Management</h1>

            <div>
                <div style={{ padding: '3%', marginLeft: '35%' }}>
                    <button className="btn btn-success" onClick={() => setsearch(true)} >search by name</button  >
                    <button style={{ marginLeft: '5%' }} className="btn btn-success" onClick={() => setsearch(false)} >search by department</button>
                </div>
                <div>
                    {search ? <div>
                        <div style={{ marginLeft: "30%", marginRight: "30%" }} className="form-group mb-3 mt-2">

                            <input type="text" className="form-control" placeholder="Type here to search by Name...." onChange={onchange} />
                        </div>

                    </div>
                        :
                        <div style={{ marginLeft: "30%", marginRight: "30%" }} className="form-group mb-3 mt-2">

                            <input type="text" className="form-control" placeholder="Type here to search by Department...." onChange={onchange} />
                        </div>



                    }

                </div>



            </div>
            {change ?


                <div >
                    <div style={{ marginLeft: "17%", fontFamily: 'verdana' }} className="row">
                        
                            {data.map(i => (
                                <>
                                    <div key={i._id} className="col-10">
                                        <div key={i._id} className="card shadow mt-4 p-2 d-flex flex-row">
                                            <img src={i.image} style={{ height: '75px', width: '75px', borderRadius: '20px' }}></img>
                                            <h5 style={{ color: 'black', marginLeft: '5%', marginTop: "2%" }}>{i.roll}</h5>
                                            <h5 style={{ color: 'black', marginLeft: '5%', marginTop: "2%" }}>{i.uname}</h5>
                                            <h5 style={{ color: 'gray', marginLeft: '5%', marginTop: "2%", marginRight: "10%" }}>{i.department}</h5>

                                            <div className="d-flex ms-auto" style={{ marginTop: "1%" }}>
                                                <h5 style={{ color: 'gray', marginTop: "2%" }} >Awards won:</h5>
                                                <h5 style={{ color: 'blue', marginTop: "2%" }}  >{i.awards.length}</h5>
                                            </div>


                                            <button className="btn btn-success mt-3 mb-3 ms-auto"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/show/${i._id}`}>See more</Link></button>




                                        </div>

                                    </div>
                                </>



                            ))}
                        
                    </div>

                </div> :
                <div style={{ marginLeft: "17%", fontFamily: 'verdana' }} className="row">
                    {datas.map(i => (
                        <>
                            <div key={i._id} className="col-10">
                                <div key={i._id} className="card shadow mt-4 p-2 d-flex flex-row">
                                    <img src={i.image} style={{ height: '75px', width: '75px', borderRadius: '20px' }}></img>
                                    <h5 style={{ color: 'black', marginLeft: '5%', marginTop: "2%" }}>{i.roll}</h5>
                                    <h5 style={{ color: 'black', marginLeft: '5%', marginTop: "2%" }}>{i.uname}</h5>
                                    <h5 style={{ color: 'gray', marginLeft: '5%', marginTop: "2%", marginRight: "15%" }}>{i.department}</h5>

                                    <div className="d-flex ms-auto" style={{ marginTop: "1%" }}>
                                        <h5 style={{ color: 'gray', marginTop: "2%" }} >Awards won:</h5>
                                        <h5 style={{ color: 'blue', marginTop: "2%" }}  >{i.awards.length}</h5>
                                    </div>


                                    <button className="btn btn-success mt-3 mb-3 ms-auto"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/show/${i._id}`}>See more</Link></button>




                                </div>

                            </div>
                        </>



                    ))}

                </div>}

            <div id="about" style={{ position: "fixed", bottom: "0", backgroundColor: "gray", color: "white" }}>
                This is a website for Award management
            </div>






        </>
    )

}