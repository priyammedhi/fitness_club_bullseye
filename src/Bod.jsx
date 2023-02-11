import React, { useState } from "react";
import './Bod.css'

const FitnessClubRegistration = () => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [members, setMembers] = useState([]);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMembers([...members, member]);
    alert("User added successfully");
    setMember({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div><div className="frm">
          <h2>Fitness Club Registration</h2>
          <form onSubmit={handleSubmit}>
              <label>
                  Name:
                  <input
                      type="text"
                      name="name"
                      value={member.name}
                      onChange={handleChange}
                      required />
              </label>
              <br />
              <label>
                  Email:
                  <input
                      type="email"
                      name="email"
                      value={member.email}
                      onChange={handleChange}
                      required />
              </label>
              <br />
              <label>
                  Phone Number:
                  <input
                      type="tel"
                      name="phone"
                      value={member.phone}
                      onChange={handleChange}
                      required />
              </label>
              <br />
              <label>
                  Address:
                  <input
                      type="text"
                      name="address"
                      value={member.address}
                      onChange={handleChange}
                      required />
              </label>
              <br />
              <button type="submit">Add Member</button>
          </form>
      </div>
      
      <div><button className="view" onClick={() => { window.location.href = "./View-members"; } }>
              View Member List
          </button><br /><br /></div>
    <h2>Member List</h2>
      {members.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FitnessClubRegistration;