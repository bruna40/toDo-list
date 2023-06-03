import styled from "styled-components";



export const ContainerMain = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`;

export const ContainerTarefa = styled.span`
    display: flex;
    margin-top: 64px;
    justify-content: center;
    
    div {
        display: flex;
        margin-right: 17rem;
        margin-left: 17rem;
        h6 {
            font-size: 12px;
        }
        p {
            background: var(--gray-500);
            width: 12px;
            border-radius: 40%;
            font-size: 12px;
            margin-left: 8px;
            padding: 2px;
        }
    }

`;

export const ContainerLinha =  styled.ul`

    li{ 
        background: var(--gray-500);
        display: flex;
        justify-content: space-between;
        width: 736px;
        height: 52px;
        margin-top: 24px;
        border-radius: 0.25rem;
        padding: 16px;

        button {
            background: transparent;
            color: var(--gray-300);
            border: 0;
            cursor: pointer;
            transition: filter 0.2s;
            border-radius: 0.25rem;
            &:hover {
                filter: brightness(0.8);
            }
        }
    }

`;

export const ContainerInput = styled.input`
    /* Estilização padrão do checkbox */
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid var(--blue);

    /* Arredondando os cantos */
    border-radius: 50%;

    /* Outros estilos opcionais */
    background-color: var(--gray-500);

    outline: none;
    cursor: pointer;

    &:checked {
        background-color: var(--purple-dark);

    }
`;