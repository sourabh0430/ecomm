
import { handleChangeAuth } from "../../Features/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {

    const {loginFormData} = useSelector((store)=>store.auth);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChangeAuth({name , value}));
    }
    
    const handleSubmit = () => {
        dispatch(handleChangeAuth(loginFormData));
    }

    return (
        <div className="form-container">
            <form id="loginForm">
                    <div className="form-group">
                        <input name="username" className="form-control" placeholder="User Name" onChange={handleChange} />
                    </div>
                    <div className="form-group mt-2">
                        <input type = "password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className="form-group mt-2 text-end">
                        <button className="btn btn-primary">Submit</button>
                    </div>        
            </form>
        </div>
    )
}

export default Login;