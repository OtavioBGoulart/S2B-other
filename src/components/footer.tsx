import styled from "styled-components";

export function Footer() {
    return (
        <Container>
            <FooterContainer>
                <img src="/marca-images/logo-footer.svg" />
            </FooterContainer>
        </Container >
    );
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary.light};
`

const FooterContainer = styled.div`
    width: 80%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto ;

    img {
        height: 100%;
    }

    @media( max-width: 768px) {
        height: auto;
    }
`
