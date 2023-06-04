import styled from "styled-components";



export const ContainerMain = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;


`;



export const ContainerLinha =  styled.ul`

    li{ 
        positon: relative;
        background: var(--gray-500);
        display: flex;
        justify-content: space-between;
        width: 736px;
        height: 65px;
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
        p{
            font-size: 15px;
            width: 100%;
            text-align: left;
            color: var(--white);
            margin-left: 16px;
            overflow: auto;
            font-weight: bold;            

        }
    }

`;

export const ContainerInput = styled.input`
    /* Estilização padrão do checkbox */
    appearance: none;
    width: 20px;
    height: 20px;
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