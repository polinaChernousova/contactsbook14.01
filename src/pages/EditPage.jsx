import React, { useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MainContext } from "../contexts/MainProvider";

const EditPage = () => {
  const value = React.useContext(MainContext);
  const { contactToEdit } = value;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");

  const params = useParams();

  useEffect(() => {
    value.getProductToEdit(params.id);
  }, []);

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setSurname(contactToEdit.surname);
      setPhoneNumber(contactToEdit.phoneNumber);
      setEmail(contactToEdit.email);
      setImg(contactToEdit.img);
    }
  }, [contactToEdit]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let editedContact = {
      name,
      surname,
      phoneNumber,
      email,
      img,
      id: contactToEdit.id,
    };
    value.saveEditedContact(editedContact);
    navigate("/");
  };

  if (!contactToEdit) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container edit-add-page">
      <h2>Edit Page</h2>
      <form onSubmit={handleSubmit}>
        <FormControl
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter name"
        />
        <FormControl
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
          placeholder="Enter surname"
        />
        <FormControl
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          type="number"
          placeholder="Enter phone number"
        />
        <FormControl
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter email"
        />
        <FormControl
          onChange={(e) => setImg(e.target.value)}
          value={img}
          src="URL"
        />
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
};

export default EditPage;
