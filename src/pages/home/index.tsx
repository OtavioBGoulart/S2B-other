import styled from "styled-components";
import { Info } from "./info";
import { Solutions } from "./solutions";
import { Form } from "../../components/form";
import { Sobre } from "./sobre";

export function Home() {


    return (
        <MainContainer>
            <Banner>
                <img src="/marca-images/s2bbanner.png" />
            </Banner>
            <Solutions />
            <Info />
            <Sobre />
            <Form />
        </MainContainer>
    );
}

const Banner = styled.div`
    width: 100%;

    img {
        width: 100%;
        object-fit: cover;
    }

    /* @media (max-width: 900px) {
        height: 300px;
    } */
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

