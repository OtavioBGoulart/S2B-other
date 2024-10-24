import styled from "styled-components";

export function Info() {

    return (
        <Div>
            <Container>
                <h1>Nossas prioridades</h1>
                <CardContainer>
                    <Card>
                        <h2>Foco no cliente</h2>
                        <img src="/home-icons/foco.png" />
                        <span>Estamos sempre próximos dos nossos clientes, mantendo linhas de comunicação ágeis.
                            Isso torna o processo de criação mais eficiente, permitindo que entreguemos soluções de forma rápida e eficaz.
                        </span>
                    </Card>
                    <Card>
                        <h2>Ambientes Exigentes</h2>
                        <img src="/home-icons/ambiente.png" />
                        <span>Desenvolvemos sistemas para empresas multinacionais no Brasil, utilizados por centenas de usuários,
                            sempre em conformidade com as rigorosas exigências das auditorias internacionais.
                        </span>
                    </Card>
                    <Card>
                        <h2>Inovação</h2>
                        <img src="/home-icons/ideia.png" />
                        <span>Acreditamos que, no agronegócio, assim como em qualquer setor, é essencial promover a transparência no processo produtivo. Isso é feito por meio do registro automático de dados com tecnologia inovadora (IoT), minimizando a interferência humana sempre que possível.
                            Essa transparência e rastreabilidade são cruciais para compreender o processo e estabelecer pontos de medição eficazes.
                        </span>
                    </Card>
                </CardContainer>
            </Container>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.primary.light}, 
    #2a4f78,
    ${({ theme }) => theme.colors.primary.lighter}
  );
`

const Container = styled.div`
    width: 80%;
    padding-top: 20px;
    padding-bottom: 30px;

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
        color: ${({ theme }) => theme.colors.secondary.light};
        text-align: center;
        margin-bottom: 40px;
    }   

    @media(max-width: 768px) {
       h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
       }
    }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Garante que o conteúdo e o botão fiquem separados */
    background-color: ${({ theme }) => theme.colors.secondary.lighter};
    border-radius: 40px;
    padding: 20px 60px;
    width: 30%;
    min-width: 300px;
    max-width: 600px;
    position: relative;
    transition: transform 0.2s ease-in-out box-shadow 0.2s ease-in-out;

    h2 {
        color: ${({ theme }) => theme.colors.primary.light};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.xmedium};
        margin-bottom: 20px;
        text-align: center;
    }

    span {
        color: ${({ theme }) => theme.colors.secondary.dark};
        font-family: ${({ theme }) => theme.fonts.content};
        font-size: ${({ theme }) => theme.fontSizes.small};
        flex-grow: 1; /* Faz o conteúdo crescer se necessário */
    }

    img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 20px;
    }

    @media(max-width: 768px) {
        width: 70%;
    }
`;

