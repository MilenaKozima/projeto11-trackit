import styled from "styled-components";
import { Topo } from "../HabitsPage/HabitsPage";
import { Baixo } from "../HabitsPage/HabitsPage";
import Bob from '../../assets/Rectangle 14.png';
import { HabitsContainer } from "../HabitsPage/HabitsPage";
import { MeioTopo } from "../HabitsPage/HabitsPage";
import { Meio } from "../HabitsPage/HabitsPage";
import { MeioMeio } from "../HabitsPage/HabitsPage";

export default function TodayPage() {
    return (
        <HabitsContainer>
            <Topo>
                <p>Trackit</p>
                <img src={Bob} alt="" />
            </Topo>

            <Meio>
                <MeioTopo>
                    <p>Segunda 17/05</p>
                    <p>Nenhum hábito concluido ainda</p>
                </MeioTopo>
                <MeioMeio>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </MeioMeio>
            </Meio>

            <Baixo>
                <p>Habitos</p>
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <p>Hoje</p>
                </div>
                <p>Historico</p>
            </Baixo>

        </HabitsContainer>
    );
}

