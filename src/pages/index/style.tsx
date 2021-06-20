import styled from 'styled-components';

export const MainWrapper = styled.main`
    margin: 25px auto;
    padding: 20px;
    max-width: 1720px;

    .container_cads {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`;

export const ControlButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 640px) {
        gap: 10px;
    }

    button {
        background: #87d5b8;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 10px;
        font-size: 24px;
        margin-left: 10px;
        cursor: pointer;
        width: 170px;

        @media (max-width: 640px) {
            margin: 0;
            width: 150px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin: 30px;

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    input {
        border: 1px solid gray;
        outline: none;
        height: 25px;
        width: 280px;
        border-radius: 10px;
        padding: 10px;
        font-size: 18px;
    }

    button {
        background: #87d5b8;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 10px;
        font-size: 18px;
        margin-left: 10px;
        cursor: pointer;

        @media (max-width: 640px) {
            margin: 0px;
            width: 280px;
        }
    }
`;
