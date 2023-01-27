import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [userdata, setUserdata] = useState([]);
  console.log("🚀 ~ file: App.jsx:5 ~ userdata", userdata);

  const [input, setInput] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    age: "",
  });
  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleDelete = (id) => {
    console.log("🚀 ~ file: App.jsx:18 ~ handleDelete ~ id", id);
    setUserdata(userdata.filter((e) => e.id !== id));
  };

  const handleEdit = (user) => {
    console.log(`Edit Triggered with ${user.id}`);
    setInput({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      age: user.age,
    });
    setUserdata(userdata.filter((e) => e.id !== user.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserdata([...userdata, { id: Date.now(), ...input }]);
    setInput({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
    });
  };

  console.log(input);

  return (
    <>
      <div className="body">
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={input.firstname}
              onChange={handleChange}
            />
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={input.lastname}
              onChange={handleChange}
            />
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={input.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user) => {
            console.log("🚀 ~ file: App.jsx:89 ~ {userdata.map ~ user", user);
            return (
              <tr>
                <th scope="row">{user.id}</th>

                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
