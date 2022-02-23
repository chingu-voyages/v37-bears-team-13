import React, { useState } from "react";
import NavBar from "../components/NavBar";
    
const Login = (): JSX.Element =>{

    const initialValues = {
        username: '',
        password: '',
    };

    const [values,setValues] = useState(initialValues);
    const [incorrectPassword, setIncorrectPassword] = React.useState<boolean>(false);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
          };

        // To Do: Handle incorrect password  
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const handleIncorrectPassword = () => {
        setIncorrectPassword(true)
        setTimeout(() => {
            setIncorrectPassword(false)
          }, 3000)
    }

    const {username,password} = values 

    return(
        <div>
            <header>
                <h1>Stock Race</h1>
                <h2> Login </h2>
            </header>
            <form onSubmit={handleSubmit} >
                <label>
                Username:
                <input
                    type="text"
                    name="username"
                    placeholder="StockWhizKid43"
                    value={username}
                    onChange={(e) => handleInputChange(e)}
                />
                </label>
                <br/>
                <label>
                Password:
                <input
                    type="text"
                    name="password"
                    placeholder="123pass456"
                    value={password}
                    onChange={(e) => handleInputChange(e)}
                />
                </label>
                <br/>
                <input type="submit"  />
            </form>
            <NavBar />
            {incorrectPassword && <div> Incorrect Username or PassWord</div>}
        </div>
    )
}

export default Login 

