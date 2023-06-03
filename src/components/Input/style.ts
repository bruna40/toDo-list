import styled from 'styled-components';


export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -27px;
    gap: 0.5rem;


    input {
        width: 638px;
        height: 54px;
        background: var(--gray-500);
        border-radius: 8px;
        border: 0;
        color: var(--white);


        padding: 0 1rem;

        &:hover {
            &::placeholder {
                color: var(--white);
            }
        }
    }

    button {
        width: 90px;
        border-radius: 8px;
        border: 0;
        background: var(--blue-dark);
        color: var(--white);
        font-weight: bold;
        transition: filter 0.2s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 0.5rem;;

        &:hover {
            background: var(--blue);
        }

    }
`;