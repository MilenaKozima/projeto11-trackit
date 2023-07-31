import styled from "styled-components";
import { Topo } from "../HabitsPage/HabitsPage";
import { Baixo } from "../HabitsPage/HabitsPage";
import Bob from '../../assets/Rectangle 14.png';
import { HabitsContainer } from "../HabitsPage/HabitsPage";
import { Meio } from "../HabitsPage/HabitsPage";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressContext } from "../../contexts/ProgressContext";


export default function TodayPage() {

    const {user} = useContext(UserContext);
    const { progress } = useContext(ProgressContext);

    return (
        <HabitsContainer>
            <Topo>
                <p>Trackit</p>
                <img src={user.image} alt="" />
            </Topo>

            <Meio>
                <MeioToday>
                    <p>Segunda 17/05</p>
                    <h1>Nenhum hábito concluido ainda</h1>
                </MeioToday>
                <MeioCheck>
                    <div>                    
                    <h1>Ler 1 capitulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <h6>Seu recorde: 3 dias</h6>
                    </div>
                    <ion-icon name="checkbox"></ion-icon>
                </MeioCheck>
                <MeioCheck>
                    <div>                    
                    <h1>Ler 1 capitulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <h6>Seu recorde: 3 dias</h6>
                    </div>
                    <ion-icon name="checkbox"></ion-icon>
                </MeioCheck>
                <MeioCheck>
                    <div>                    
                    <h1>Ler 1 capitulo de livro</h1>
                    <p>Sequência atual: 3 dias</p>
                    <h6>Seu recorde: 3 dias</h6>
                    </div>
                    <ion-icon name="checkbox"></ion-icon>
                </MeioCheck>
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

export const MeioToday = styled.div`
margin-top: 70px;
display: flex;
flex-direction: column;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
        font-size: 23px;
        margin-top: 28px;
        margin-left: 17px;
    }
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
        font-size: 18px;
        margin-left: 17px;
        //margin-top: 3px;
        color:#BABABA;
    }
    button{
        margin-left: 152px;
        margin-top: 22px;
        height: 35px;
        width: 40px;
    }
`
const MeioCheck = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-left: 17px;
    margin-top: 15px;
    display: flex;
    div{
        display: flex;
        flex-direction: column;
    }
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19px;
        margin-left: 16px;
        margin-top: 15px;
        color: #666666;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        margin-left: 16px;
        margin-top: 15px;
        color: #666666;
    }
    h6{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        margin-left: 16px;
        margin-top: 2px; 
        color: #666666;
    }
    ion-icon{
        width: 84px;
        height: 84px;
        margin-top: 5px;
        margin-left: 40px;
        color: #E7E7E7;
    }
`