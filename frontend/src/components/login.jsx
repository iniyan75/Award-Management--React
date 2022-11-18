
import { useState } from "react"

import axios from "axios"
import { useEffect } from "react"

export default function Login() {
    const [pass, setpass] = useState('')
    const [email, setemail] = useState('')
const [data,setdata]=useState("")

const handleSubmit=()=>{
    
}
    






    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className=" p-2">
                    <div className="form-group mb-3">
                        <label className="form-label">email</label>
                        <input type="text" className="form-control" value={email} onChange={e => setemail(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">password</label>
                        <input type="text" className="form-control" value={pass} onChange={e => setpass(e.target.value)} />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-info">Add details</button>
                    </div>
                </div>
            </form>



        </>
    )
}

