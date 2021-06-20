import styled from 'styled-components';

export const Card = styled.li`
    width: 400px;
    height: 200px;
    background: #3d3d3d;
    border-radius: 20px;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale3d(10%);
    }

    .character_photo {
        margin-right: 20px;
        img {
            border-radius: 20px;
            height: 150px;
            width: 150px;
        }
    }

    .informations_character {
        a {
            text-decoration: none;
            color: #fff;
        }
        h1 {
            color: #fff;
            font-size: 24px;
            font-weight: bold;
        }
        p {
            font-size: 16px;
            margin: 10px 0;
        }
    }
`;
