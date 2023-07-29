import styled from "styled-components";
import Bob from '../../assets/Rectangle 14.png';
import Elipse from '../../assets/Ellipse 2.png'

export default function HabitsPage() {
    return (
        <HabitsContainer>
            <Topo>
                <p>Trackit</p>
                <img src={Bob} alt="" />
            </Topo>
            <Meio>
                <MeioTopo>
                    <p>Meus Habitos</p>
                    <button> + </button>
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

 const HabitsContainer = styled.div`
    background-color: #F2F2F2;
    position: relative;
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

const Meio = styled.div`

    
`

const MeioTopo = styled.div`
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
    }
`

const MeioMeio = styled.div`
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
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Righteous', cursive;
    }
    .progress-bar {
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
        border-radius: 50%;
        background: 
        radial-gradient(closest-side, #126BA5 79%, transparent 80% 100%),
        conic-gradient(white 75%, #126BA5 0); 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`