import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function HomePage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [able, setAble] = useState("");
    const navigate = useNavigate();


    function login(e) {

        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", user);
        setAble('disabled')
        promise.then(resp => navigate('/hoje'))
        promise.catch(erro => {
            alert(erro.response.data.message)
            setAble('')
        })

    }

    return (
        <HomeContainer>
            <ImageContainer>
                <img src={Logo} alt="" />
            </ImageContainer>

            <LoginInformation onSubmit={login} able={able}>
                <input
                    placeholder="email"
                    data-test="email-input"
                    id="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    able={able}
                />
                <input
                    placeholder="senha"
                    data-test="password-input"
                    id="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    able={able}
                />
                 <button type="submit" able={able}>
                    {able === "disabled" ? ( // Conditionally render the Loader component
                        <LoaderContainer>
                            <ThreeDots color="#FFF" height={30} width={30} />
                        </LoaderContainer>
                    ) : (
                        "Entrar"
                    )}
                </button> 
            </LoginInformation>

            <Link to={'/cadastro'}>
                <ParaCadastrar data-test="signup-link">
                    Não tem uma conta ? Cadastre-se
                </ParaCadastrar>
            </Link>

        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
    font-family: 'Righteous', cursive;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 68px;
    img{
        height: 168px;
        width: 300px;
    }
`

const LoginInformation = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 27px;
    input {
        width: 303px;
        height: 45px;
        border-color: #D4D4D4;
        border-radius: 5px;
        margin-top: 6px;
        box-shadow: none;
        font-size: 21px;
        color: ${(props) => (props.able ? "#DBDBDB" : "#AFAFAF")};
        background: ${(props) => (props.able ? "#FFFFFF" : "#F2F2F2")};
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        margin-top: 6px;
        box-shadow: none;
        color: #FFFFFF;
        font-size: 21px;
        border-color:#52B6FF;
        position: relative; /* Ensure the loader is positioned relative to the button */
        overflow: hidden; /* Hide any overflow of the loader */
        padding: 0 10px;
    }
    input:focus {
        border-color: ${(props) => (props.able ? "#FFFFFF" : "#F2F2F2")};
        color: ${(props) => (props.able ? "#DBDBDB" : "#AFAFAF")};
        background: ${(props) => (props.able ? "#FFFFFF" : "#F2F2F2")};
        outline: none;
  }
`
const ParaCadastrar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: none;
    
`

export const LoaderContainer = styled.div`
  /* Style the container of the loader */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2); /* Add a semi-transparent background to the loader */
`;