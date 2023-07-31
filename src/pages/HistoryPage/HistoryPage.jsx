import styled from "styled-components";
import { Topo } from "../HabitsPage/HabitsPage";
import { Baixo } from "../HabitsPage/HabitsPage";
import { HabitsContainer } from "../HabitsPage/HabitsPage";
import { Meio } from "../HabitsPage/HabitsPage";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressContext } from "../../contexts/ProgressContext";
import { MeioToday } from "../TodayPage/TodayPage";

export default function HistoryPage(){

    const {user} = useContext(UserContext);
    const { progress } = useContext(ProgressContext);

    return(
        <HabitsContainer>
            <Topo data-test="header">
                <p>Trackit</p>
                <img data-test="avatar" src={user.image} alt="" />
            </Topo>

            <Meio>
                <MeioToday>
                    <h1>Em breve uma nova funcionalidade</h1>
                </MeioToday>
            </Meio>

            <Baixo data-test="menu">
                <Link data-test="habit-link" to={'/habitos'}>
                    <p>Habitos</p>
                </Link>
                <Link data-test="today-link" to={'/hoje'}>
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
                <Link data-test="history-link" to={'/historico'}><p>Historico</p></Link>
            </Baixo>

        </HabitsContainer>
    );
}