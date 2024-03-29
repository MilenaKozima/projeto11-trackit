import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [able, setAble] = useState(false);
    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        setAble(true)
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(url);

        const newUser = {
            email: email,
            name: name,
            image: url,
            password: password
        }

        console.log(newUser);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', newUser)


            promise.then(resp => {
                setAble(false)
                navigate('/')
            })
            promise.catch(erro => {
                setAble(false)
                alert(erro.response.data.message) 
            })

    }


    return (
        <HomeContainer>
            <ImageContainer>
                <img src={Logo} alt="" />
            </ImageContainer>

            <LoginInformation onSubmit={signUp}>
                <input
                    id="email"
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    disabled={able}
                />
                <input
                    id="senha"
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    disabled={able}
                />
                <input
                    id="nome"
                    data-test="user-name-input"
                    type="text"
                    placeholder="nome"
                    required
                    onChange={e => setName(e.target.value)}
                    value={name}
                    disabled={able}
                />
                <input
                    id="foto"
                    data-test="user-image-input"
                    type="url"
                    placeholder="foto"
                    required
                    onChange={e => setUrl(e.target.value)}
                    value={url}
                    disabled={able}
                />


                <button type="submit" disabled={able}>
                    {able ? ( // Conditionally render the Loader component
                        <LoaderContainer>
                            <ThreeDots color="#FFF" height={30} width={30} />
                        </LoaderContainer>
                    ) : (
                        "Cadastrar"
                    )}
                </button> 

            </LoginInformation>

            <Link to={'/'}>
                <ParaCadastrar data-test="login-link">
                    Já possui uma conta? Faça login
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
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-color: #52B6FF;
        border-radius: 5px;
        margin-top: 6px;
        box-shadow: none;
        color: #FFFFFF;
        font-size: 21px;
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

const LoaderContainer = styled.div`
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