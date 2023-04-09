import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousal from "../Carousal/Carousal";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const RightSideHeader = () => {

  const {providerLogin} = useContext(AuthContext);
  const googleLogin = new GoogleAuthProvider()

const handelGoogleSingin = () =>{
  providerLogin(googleLogin)
  .then(result =>{
    const user = result.user;
    console.log(user);
  })
 .catch(error => console.error(error))

}

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handelGoogleSingin} variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaLinkedin></FaLinkedin>Linkedin</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousal></Carousal>
      </div>
    </div>
  );
};

export default RightSideHeader;
