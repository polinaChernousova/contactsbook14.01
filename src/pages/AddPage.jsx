import React, { useContext, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainProvider";

const AddPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const value = useContext(MainContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name,
      surname,
      phoneNumber,
      email,
      img,
    };
    value.addContact(newContact);
    setName("");
    setSurname("");
    setPhoneNumber("");
    setEmail("");
    setImg("");

    navigate("/");
  };
  return (
    <div className="container edit-add-page">
      <h2>Add Page</h2>
      <form onSubmit={handleSubmit}>
        <FormControl
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter name..."
        />
        <FormControl
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
          placeholder="Enter surname..."
        />
        <FormControl
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          type="number"
          placeholder="Enter phone number..."
        />
        <FormControl
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email..."
        />
        <FormControl
          onChange={(e) => setImg(e.target.value)}
          value={img}
          src="URL"
        />
        <Button type="submit">add contact</Button>
      </form>
    </div>
  );
};

export default AddPage;
