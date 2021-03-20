import { useState } from "react";
import { useHistory } from "react-router";
import { login } from "../services/users-service";

function Login() {
  const history = useHistory()

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null)

  function handleChange(e) {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await login(data.email, data.password)
      history.replace('/')
    } catch(err) {
      setError(err?.response?.data?.message)
    }
  }

  return (
    <div className="Login">
      <div className="row">
        <div className="col-12 col-sm-4 mx-auto">
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form className="mt-3 mb-3" onSubmit={handleSubmit}>
            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
              </div>
              <input type="email" className="form-control" name="email"
                onChange={handleChange} required
                placeholder="user@example.org" value={data.email}/>
            </div>

            <div className="input-group mb-1">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
              </div>
              <input type="password" className="form-control" name="password" value={data.password}
                onChange={handleChange}
                placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-1">Login</button>
          </form>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default Login;
