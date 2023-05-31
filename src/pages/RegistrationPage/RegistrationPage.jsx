import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <HomeContainer>
            <ImageContainer>
                <img src={Logo} alt="" />
            </ImageContainer>

            <LoginInformation>
                <input placeholder="email" />
                <input placeholder="senha" />
                <input placeholder="nome" />
                <input placeholder="foto" />
                <button>Cadastrar</button>
            </LoginInformation>

                <Link to={'/'}>
                <ParaCadastrar>
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

const LoginInformation = styled.div`
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