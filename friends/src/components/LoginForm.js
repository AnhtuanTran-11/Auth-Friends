import React, { useState } from "react";
import axios from "axios";

const initialFormValues = {
  id: "",
  username: "",
  password: "",
  age: "",
  email: "",
};

export default function LoginForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState("");
  //   let history = useHistory();

  const onChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Name
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
          />
        </label>
        <p>{errors}</p>
        <button>Log in</button>
      </form>
    </div>
  );
}
