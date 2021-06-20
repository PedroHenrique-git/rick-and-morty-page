import styled from 'styled-components';

export const MainContent = styled.section`
    box-shadow: 1px 1px 7px 6px rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    margin: 50px auto;
    max-width: 1200px;
    padding: 20px;

    display: flex;
    flex-direction: column;

    .image {
        img {
            border-radius: 20px;
        }
    }

    .title_episodes {
        color: #000;
        margin: 30px;
        text-align: center;
    }

    .character_informations {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .others_informations {
            h1 {
                color: #000;
                font-size: 32px;
            }
            p {
                color: #000;
                margin: 15px 0;
                font-size: 20px;
            }
        }
    }

    .episodes_informations {
        margin: 30px 0;
        width: 100%;

        display: flex;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 12px; /* width of the entire scrollbar */
        }

        &::-webkit-scrollbar-track {
            border-radius: 20px;
            background: #cfcecd; /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
            background-color: #3d3d3d;
            border-radius: 20px;
        }
    }
`;
