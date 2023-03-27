import React, {useState} from "react"

import AuthDataService from "../../services/Authentification";

/*
export default function Login (props) {
    const initialUserState = {
        id: null,
        email:"",
        password:'',
        d_type : '',
    };

    const [User, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...User, [name]: value });
    };

    const saveUser = () => {
        var data = {

            email: User.email,
            password: User.password
        };

        AuthDataService.authenticateUser(data.email,data.password)
            .then(response => {
                setUser({


                    email: response.data.email,
                    password: response.data.password,
                    type : response.data.d_type
                });


            })
            .catch(e => {
                console.log(e);
            });


    };

    const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);

    };
    const checkuser =() => {
        if (initialUserState.d_type==="ETUDIANT")  {
            return "e";
        }
        else if (initialUserState.d_type==="ADMIN") {
            return "a";
        }
        else return "n ";
    }



    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Interface Authentification</h3>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={User.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={User.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                    </div>
                    <button onClick={saveUser} className="btn btn-success">
                        Submit
                    </button>

                </div>
            </form>
        </div>
    )
}*/
const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const [authenticatedadmin, setauthenticatedadmin] = useState(localStorage.getItem(localStorage.getItem("authenticatedadmin")|| false));
    const initialUserState = {
        id: null,
        email:"",
        password:'',
        d_type : '',
    };

    const [User, setUser] = useState(initialUserState);

    var data = {
// creation
        email: User.email,
        password: User.password,
        type : User.data.d_type
    };

    AuthDataService.authenticateUser(data.email,data.password)
        .then(response => {
            setUser({

            // pour prend les donnees de la fonction authentificateUser qui return Utilisateur
                email: response.data.email,
                password: response.data.password,
                type : response.data.d_type
            });


        })
        .catch(e => {
            console.log(e);
        });
    const handleSubmit = (e) => {
        e.preventDefault()


        //avec localstorage si c un etudiant : authentificate= true

        if (data.username === username && data.password === password && data.type==="etudiant") {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
        }
        //avec localstorage si c un admin : authentificate= true
        else if (data.username === username && data.password === password && data.type==="admin") {
            setauthenticatedadmin(true)
            localStorage.setItem("authenticatedadmin", true);
        }

    };
    return (
        <div>
            <p>Welcome Back</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    onChange={(e) => setpassword(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};


export default Login;
