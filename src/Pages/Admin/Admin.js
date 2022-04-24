import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { APIURL } from "../../components/Settings";
import { getToken } from "./../../components/LocalStorage";
import InputField from "./../../components/generalcomponents/InputField";
import Button from "../../components/generalcomponents/Button";
import displayMessage from "./../../components/DisplayMessage";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import PromptMessage from "../../components/generalcomponents/PromptMessage";

const StyledAdmin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;

  input[type="file"] {
    display: none;
  }

  .file-label {
    padding: 15px;
  }

  #file-arrowup {
    font-size: 30px;
  }
`;

const StyledH1 = styled.h1`
  padding: 30px 0px;
`;

const StyledForm = styled.form`
  border: 2px solid black;
  background: white;
  width: 500px;
  max-width: 80%;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .file-label {
    cursor: pointer;
  }
`;

const StyledInputfield = styled.input`
  border: none;
  max-width: 90%;
`;

const StyledCheckbox = styled.input`
  margin-top: 10px;
  height: 20px;
  width: 20px;
`;

const TextInput = styled.textarea`
  height: 150px;
  max-width: 90%;
  resize: none;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  width: 160px;
  border: none;
  background: white;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 26px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.4);

  :hover {
    border: 1px solid black;
    padding: 9px;
  }
`;

const StyledText = styled.h2`
  font-size: 22px;
  margin: 20px;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
`;

export default function Admin() {
  const navigate = useNavigate();
  const token = getToken();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [featured, setFeatured] = useState(false);

  const handleCheckbox = () => {
    setFeatured(!featured);
  };

  const handleSubmit = () => {
    setPromptsubmit((prev) => !prev);
    sendForm(title, price, image, description, featured);
  };

  const getParams = useLocation().search;
  const id = new URLSearchParams(getParams).get("id");

  const loadPage = useCallback(() => {
    if (id) {
      const getData = async () => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const result = await fetch(APIURL + `/products/${id}`, options);
          const json = await result.json();
          setTitle(json.title);
          setPrice(json.price);
          setDescription(json.description);
          if (json.featured) {
            setFeatured(true);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, []);

  useEffect(() => loadPage(), []);

  const sendForm = async (title, price, image, description, featured) => {
    const formData = new FormData();

    if (!image) {
      formData.append(
        "data",
        JSON.stringify({
          title: title,
          price: price,
          description: description,
          featured: featured,
        })
      );
    } else {
      formData.append("files.image", image[0], image[0].name);
      formData.append(
        "data",
        JSON.stringify({
          title: title,
          price: price,
          description: description,
          featured: featured,
        })
      );
    }

    if (id) {
      const options = {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await fetch(APIURL + `/products/${id}`, options);
        const json = await result.json();
        displayMessage("success", "Saved!", ".message");
      } catch (error) {
        console.log(error);
      }
    } else {
      const options = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const result = await fetch(APIURL + "/products", options);
        const json = await result.json();
        if ((json.title = title)) {
          displayMessage("success", "Item has been added!", ".message");
          navigate("/");
        } else {
          displayMessage("error", "Something went wrong!", ".message");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async () => {
    if (id) {
      const deleteApi = APIURL + `/products/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const result = await fetch(deleteApi, options);
        const json = await result.json();
        if ((json.title = title)) {
          displayMessage("success", "Item has been deleted!", ".message");
          navigate("/");
        } else {
          displayMessage("error", "Something went wrong!", ".message");
        }
      } catch (error) {
        console.log(error);
      }
    }
    setPromptDelete((prev) => !prev);
  };

  const [promptSubmit, setPromptsubmit] = useState(false);
  const [promptDelete, setPromptDelete] = useState(false);

  const CancleSubmit = () => {
    setPromptsubmit((prev) => !prev);
  };

  const CancleDelete = () => {
    setPromptDelete((prev) => !prev);
  };

  let promptMenu;

  if (promptSubmit) {
    promptMenu = (
      <PromptMessage>
        <StyledText>Submit product?</StyledText>
        <StyledButton
          style={{ background: "lightgreen" }}
          onClick={handleSubmit}
        >
          Ok
        </StyledButton>
        <StyledButton
          style={{ background: "lightcoral" }}
          onClick={CancleSubmit}
        >
          Cancle
        </StyledButton>
      </PromptMessage>
    );
  }

  if (promptDelete) {
    promptMenu = (
      <PromptMessage>
        <StyledText>Delete product?</StyledText>
        <StyledButton
          style={{ background: "lightgreen" }}
          onClick={handleDelete}
        >
          Ok
        </StyledButton>
        <StyledButton
          style={{ background: "lightcoral" }}
          onClick={CancleDelete}
        >
          Cancle
        </StyledButton>
      </PromptMessage>
    );
  }

  const promptDeletemessage = () => {
    setPromptDelete((prev) => !prev);
  };

  const promptFormsend = (event) => {
    event.preventDefault();
    setPromptsubmit((prev) => !prev);
  };

  let adminPage;
  if (!token) {
    window.location.href = "/login";
  } else {
    adminPage = (
      <StyledForm className="admin-form" onSubmit={promptFormsend}>
        <StyledH1>ADD/EDIT PRODUCTS</StyledH1>
        <InputField
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <InputField
          type="number"
          step=".01"
          placeholder="Price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <TextInput
          type="text"
          placeholder="Description..."
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <StyledLabel name="checkbox-input">Featured product?</StyledLabel>
        <StyledCheckbox
          id="checkbox-input"
          type="checkbox"
          checked={featured}
          onChange={handleCheckbox}
        />
        <StyledLabel className="file-label" name="filebox" htmlFor="filebox">
          <FontAwesomeIcon id="file-arrowup" icon={faFileArrowUp} /> Choose an
          image...
        </StyledLabel>
        <StyledInputfield
          type="file"
          id="filebox"
          onChange={(e) => setImage(e.target.files)}
        />

        <div>Image: {image ? image[0].name : ""}</div>
        <Button
          style={{ padding: "10px", margin: "10px", background: "lightgreen" }}
          type="submit"
        >
          Submit
        </Button>
        <Button
          style={{ padding: "10px", margin: "10px", background: "lightcoral" }}
          type="button"
          onClick={promptDeletemessage}
        >
          Delete
        </Button>
      </StyledForm>
    );
  }

  return (
    <StyledAdmin>
      {adminPage}
      {promptMenu}
    </StyledAdmin>
  );
}
