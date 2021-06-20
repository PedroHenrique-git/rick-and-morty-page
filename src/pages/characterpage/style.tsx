import styled from 'styled-components';

export const MainContent = styled.section`
    box-shadow: 1px 1px 7px 6px rgba(0, 0, 0, 0.19);
    margin: 50px auto;
    max-width: 960px;
    padding: 20px;

    display: flex;
    flex-direction: column;

    .title_episodes {
        margin: 30px;
        text-align: center;
    }

    .character_informations {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .others_informations {
            h1 {
                font-size: 32px;
            }
            p {
                margin: 15px 0;
                font-size: 20px;
            }
        }
    }

    .episodes_informations {
        margin: 30px 0;
        width: 100%;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
