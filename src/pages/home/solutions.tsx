import styled from "styled-components";
import { useScroll } from "../../hooks/useRef";

export function Solutions() {

  const { solutionsRef } = useScroll();

  return (
    <Container ref={solutionsRef}>
      <Header>
        <h1>Nossas Soluções</h1>
      </Header>
      <ProductsContainer>
        <CardsContainer>
          <Card>
            <TitleContainer>
              <span>Sistema de Gestão para Agronegócio (neOagro)</span>
            </TitleContainer>
            <ImageContainer>
              <img src="/solutions-images/agro.png" />
            </ImageContainer>
          </Card>
          <Card>
            <TitleContainer>
              <span>Inovação Agro IoT</span>
            </TitleContainer>
            <ImageContainer>
              <img src="/solutions-images/bi.png" />
            </ImageContainer>
          </Card>
          <Card>
            <TitleContainer>
              <span>Serviços de Consultoria e Soluções em Business Intelligence (BI)</span>
            </TitleContainer>
            <ImageContainer>
              <img src="/solutions-images/iot.png" />
            </ImageContainer>
          </Card>
          <Card>
            <TitleContainer>
              <span>Desenvolvimento de soluções  sob medida</span>
            </TitleContainer>
            <ImageContainer>
              <img src="/solutions-images/solucoessobmedida.png" />
            </ImageContainer>
          </Card>
          <Card>
            <TitleContainer>
              <span>Consultoria em Análise e Melhoria de Processos</span>
            </TitleContainer>
            <ImageContainer>
              <img src="/solutions-images/consultoria.png" />
            </ImageContainer>
          </Card>
          <Card>
            <TitleContainer>
              <span>Serviços de Gerenciamento de TI em Geral</span>
            </TitleContainer>
            <ImageContainer>
              <img src="/solutions-images/ti.png" />
            </ImageContainer>
          </Card>
        </CardsContainer>
      </ProductsContainer>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;  
    height: auto;
    /* background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary.light}, 
    #2a4f78,
    ${({ theme }) => theme.colors.primary.lighter}
    ); */
    background-color: ${({ theme }) => theme.colors.secondary.light};
  margin-top: -7px;
`;

const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;


  h1 {
    color: ${({ theme }) => theme.colors.primary.light};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    font-weight: 800;
  }


  @media (max-width: 768px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.large}; 
    }
  }
`

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`

const CardsContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 15px
    };
`

const Card = styled.div`
    width: 30%;
    height: 250px;
    max-height: 350px;
    padding: 10px;
    border: 3px solid  ${({ theme }) => theme.colors.primary.lighter};
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border-radius: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    /* border: 1px solid white; */
    /* border: 20px;
    background-color: ${({ theme }) => theme.colors.secondary.lighter}; */
    transition: transform 0.2 ease-in-out, box-shadow 0.2 ease-in-out;

    @media (max-width: 1250px) {
      width: 48%;
    };

    @media (max-width: 900px) {
        width: 100%;
        gap: 25px;
        height: 300px;
    };

    /* &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 
        0 12px 40px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    } */

`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 80%;
    height: 150px;
    border-radius: 5px;
  }
`

const TitleContainer = styled.div`
  min-height: 60px;
  text-align: center;

  span {
    font-family: ${({ theme }) => theme.fonts.content};
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 800;
    margin-bottom: 20px;
    text-align: center;
    }
`