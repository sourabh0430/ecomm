import {useState} from "react";

const Contact = () => {

    // added line by jayant
    // added line by jayant line 6
    // added line by jayant line 7    

    // added line by sourabh line 9
     const [listData, setListData] = useState([]);
     const [searchKey, setSearchKey] = useState();
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData((prev)=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setListData([...listData, formData])
    }
    
    
    const userList = listData.filter((user)=>{
        if(!searchKey){
            return user;
        }
        return user.name === searchKey
    }).map((user,index)=>{
        return (
            <>
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            </>    
        )
    });

    return (
        <div className="container">
            <form>
                <div className="form-group mt-2">
                    <input className="form-control" value={formData.name} name="name" placeholder="name" onChange={handleChange} />
                </div>

                <div className="form-group mt-2">
                    <input className="form-control" value={formData.email} name="email" placeholder="email" onChange={handleChange} />
                </div>

                <div className="form-group mt-2">
                    <input className="form-control" value={formData.phone} name="phone" placeholder="phone" onChange={handleChange} />
                </div>
                <div className="form-group mt-2 text-end">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <input onChange={(e)=>setSearchKey(e.target.value)} />
            <table border="1">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {userList}               
                </tbody>
            </table>


        </div>        
    )
}

export default Contact;