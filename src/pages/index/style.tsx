import styled from 'styled-components';

export const MainWrapper = styled.main`
    margin: 25px auto;
    padding: 20px;
    max-width: 1720px;

    .container_cads {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ControlButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

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
    }
`;
