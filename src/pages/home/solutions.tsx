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
            <span>Sistema de Gestão para Agronegócio (neOagro)</span>
          </Card>
          <Card>
            <span>Inovação Agro IoT</span>
          </Card>
          <Card>
            <span>Serviços de Consultoria e Soluções em Business Intelligence (BI)</span>
          </Card>
          <Card>
            <span>Desenvolvimento de soluções  sob medida</span>
          </Card>
          <Card>
            <span>Consultoria em Análise e Melhoria de Processos</span>
          </Card>
          <Card>
            <span>Serviços de Gerenciamento de TI em Geral</span>
          </Card>
        </CardsContainer>
      </ProductsContainer>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;  
    height: auto;
    background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary.light}, 
    #2a4f78,
    ${({ theme }) => theme.colors.primary.lighter}
  );
  margin-top: -7px;
`;

const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;


  h1 {
    color: ${({ theme }) => theme.colors.secondary.light};
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

const Content = styled.div`
  max-width: 1200px;
  text-align: justify;

  h2 {
    text-align: center;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.secondary.light};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }

  span {
    color: ${({ theme }) => theme.colors.secondary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 300;
    display: block;
    margin-bottom: 20px;
  }

  br {
    margin-bottom: 20px;
  }



  @media (max-width: 768px) {
    max-width: 90%;
    padding: 10px;

    h1 {
      font-size: ${({ theme }) => theme.fontSizes.medium}; 
    }

    span {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }

    @media (max-width: 480px) {

    h1 {
      font-size: ${({ theme }) => theme.fontSizes.small}; 
    }

    span {
      font-size: 14px; 
    }
  }

  }
`;

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
    background: ${({ theme }) => theme.colors.primary.light}CC;
    border-radius: 10px;
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

    @media (max-width: 900px) {
        flex-direction: row;
        width: 100%;
        gap: 25px;

    
    };

    /* &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 
        0 12px 40px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    } */

    span {
    font-family: ${({ theme }) => theme.fonts.content};
    color: ${({ theme }) => theme.colors.secondary.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 800;
    margin-bottom: 20px;
    text-align: center;
    }

    img {
        width: 70px;
        height: 70px;

        svg {
            color: ${({ theme }) => theme.colors.secondary.lighter};
        }

        &:hover {
        }
    }
`