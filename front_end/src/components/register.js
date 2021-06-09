import React, { Fragment, useState } from "react"

const Register = () => {

    const [inputs, setInputs] = useState({
        userName: "",
        email: "",
        password: "",
        accountBalance: ""
    })

    const { userName, email, password, accountBalance } = inputs

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value})
  }

    return (
        <Fragment>
        <h1 className="text-center my-5">Register</h1>
        <form>
        <label htmlFor="userName">User Name </label>
        <input type="text" name="userName" placeholder="name" className="form-control my-3" value={userName} onChange={e => onChange(e)}/>
        <label htmlFor="email">Email </label>
        <input type="email" name="email" placeholder="email" className="form-control my-3" value={email} onChange= {e => onChange(e)} />
        <label htmlFor="password">Password </label>
        <input type="password" name="password" placeholder="password" className="form-control my-3" value={password} onChange= {e => onChange(e)}/>
        <label htmlFor="accountBalance">Account Balance $ </label>
        <input type="text" name="accountBalance" placeholder="balance" className="form-control my-3" value={accountBalance} onChange= {e => onChange(e)} />
        <button className="btn btn-success btn-block">Submit</button>
        </form>
        </Fragment>
    )
}
export default Register
