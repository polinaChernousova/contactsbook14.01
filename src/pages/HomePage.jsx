import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MainContext } from "../contexts/MainProvider";
import deleteIcon from "../images/delete.png";

const HomePage = () => {
  const value = React.useContext(MainContext);
  useEffect(() => {
    value.getContacts();
  }, []);
  console.log(value);
  if (!value.contacts) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Home Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>PHOTO</th>
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {value.contacts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>
                <img width="30" src={item.img} alt="avatar" />
              </td>
              <td>
                <Button
                  variant="inherit"
                  onClick={() => value.deleteContact(item.id)}
                >
                  <img width="20" src={deleteIcon} alt="delete-icon" />
                </Button>
              </td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <Button variant="warning">EDIT</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
