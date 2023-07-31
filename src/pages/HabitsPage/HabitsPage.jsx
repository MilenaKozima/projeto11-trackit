import styled from "styled-components";
import Bob from '../../assets/Rectangle 14.png';
import Elipse from '../../assets/Ellipse 2.png'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressContext } from "../../contexts/ProgressContext";
import { useState } from "react";

export default function HabitsPage() {

    const { user } = useContext(UserContext);
    const { progress } = useContext(ProgressContext);
    const [novoHabito, setNovoHabito] = useState('');
    const [able, setAble] = useState(false);
    const weekDay = ["S","D","S","T","Q","Q","S"];

    return (
        <HabitsContainer>
            <Topo>
                <p>Trackit</p>
                <img src={user.image} alt="imagem do perfil" />
            </Topo>
            <Meio>
                <MeioTopo>
                    <p>Meus Habitos</p>
                    <button data-test="habit-create-btn"> + </button>
                </MeioTopo>
                <NaoPossuiHabitos>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NaoPossuiHabitos>
                <AdicionarHabitos data-test="habit-create-container">
                <input
                    id="novohabito"
                    data-test="habit-name-input"
                    type="text"
                    placeholder="nome do hábito"
                    required
                    onChange={e => setNovoHabito(e.target.value)}
                    value={novoHabito}
                    disabled={able}
                />
                <div>
                    {weekDay.map(weekDay =>(
                        <button data-test="habit-day">
                            {weekDay}
                        </button>
                    ))}
                </div>
                <button data-test="habit-create-cancel-btn">Cancelar</button>
                <button data-test="habit-create-save-btn">Salvar</button>
                </AdicionarHabitos>
            </Meio>
            <Baixo>
                <Link to={'/habitos'}>
                    <p>Habitos</p>
                </Link>
                <Link to={'/hoje'}>
                    <div>
                        <CircularProgressbar
                            value={progress}
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3E98C7",
                                pathColor: "#fff",
                                textColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                    </div>
                </Link>
                <Link to={'/historico'}><p>Historico</p></Link>
            </Baixo>

        </HabitsContainer>
    );
}

export const HabitsContainer = styled.div`
    background-color: #F2F2F2;
    position: relative;
    min-height: 100vh;
`

export const Topo = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0px;
    left: 0px;
    img{
        height: 51px;
        width: 51px;
        border-radius: 98px;
        margin-left: 210px;
        margin-right: 10px;
        margin-top: 9px;
    }
    p{
        font-family: 'Playball', cursive;
        font-size: 39px;
        margin-top: 10px;
        margin-left: 18px;
        width: 97px;
        height: 49px;
    }
`

export const Meio = styled.div`


`

export const MeioTopo = styled.div`
margin-top: 70px;
display: flex;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
        font-size: 23px;
        margin-top: 28px;
        margin-left: 17px;
    }
    button{
        margin-left: 152px;
        margin-top: 22px;
        height: 35px;
        width: 40px;
        background-color: #52B6FF;
        border-radius: 5px;
        border-color: #52B6FF;
    }
`

export const NaoPossuiHabitos = styled.div`
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
        margin-top: 28px;
        margin-left: 17px;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`
export const Baixo = styled.div`
    height: 70px;
    margin-top: 527px;
    background-color:#FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 20px; /* Adjust this value to move the element up or down */
    left: 50%; /* Horizontally center the element */
    transform: translateX(-50%);
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
        text-decoration: none;
        color:#52B6FF;
        margin-left: 37px;
        margin-right: 37px;
    }
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
        text-decoration: none;
        color:#FFFFFF;
    }
    div{
        width: 91px;
        height: 91px;
    }
`
const AdicionarHabitos = styled.form`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border-color: #D4D4D4;
        color: #D4D4D4;
        margin-top: 20px;
        margin-left: 18px;
    }

`