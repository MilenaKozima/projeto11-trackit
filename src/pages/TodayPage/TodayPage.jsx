import styled from "styled-components";
import { Topo } from "../HabitsPage/HabitsPage";
import { Baixo } from "../HabitsPage/HabitsPage";
import Bob from '../../assets/Rectangle 14.png';

export default function TodayPage(){
    return(
        <TodayContainer>
        <Topo>
            <p>Trackit</p>
            <img src={Bob} alt="" />
        </Topo>

        <Baixo>
            <p>Habitos</p>
            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <p>Hoje</p>
            </div>
            <p>Historico</p>
        </Baixo>

    </TodayContainer>
    );
}

const TodayContainer = styled.div`
    background-color: #F2F2F2;
    position: relative;
`