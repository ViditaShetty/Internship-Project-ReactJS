import { useState } from "react";
import styled from "styled-components";
 import { useNavigate } from 'react-router-dom';
import Sidebar from "./sidebar/Sidebar";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    margin-top: -23vh;
    box-shadow: 4px 5px 18px 0px grey;
    font-size: revert;
    @media only screen and (max-width: 450px) {
      width:78%;
      box-shadow: lightgrey 4px 5px 18px 0px;
      margin-top: -21vh;
    }`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-left:8vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
    flex: 1 1 0%;
    min-width: 40%;
    margin: 17px 0px;
    padding: 17px;

`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 16px 25px;
    background-color: hsl(244deg 67.77% 30.13%);
    color: white;
    cursor: pointer;
    margin-bottom: 22px;
    margin-left: 7vw;
    margin-top: 3vh;
    font-weight:900;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const navigate=useNavigate();

const setHeader=()=>{
  const header={
      headers:{
       "x-auth-token":localStorage.getItem("token")
      }
   }
   return header
}//***** */SETTING HADERS FOR AXIOS IS IMPORTANT FOR AUTHORIZATION WHILE SENDING RESPONSE


const [email,setEmail]=useState("");
const [pswd,setPswd]=useState("");


  const handleSubmit=async(e)=>{
   e.preventDefault();
   navigate('/home')
            }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form  noValidate autoComplete='off' onSubmit={handleSubmit}>
           <Input placeholder="email" id="email"   onChange={(e)=>{setEmail(e.target.value)}}></Input>
           <Input placeholder="password" id="pswd"   onChange={(e)=>{setPswd(e.target.value)}}></Input>
     
          <Button> {/*onClick={handleClick} disabled={isFetching}*/}
            LOGIN
          </Button>
          {/*error && <Error>Something went wrong...</Error>*/}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
