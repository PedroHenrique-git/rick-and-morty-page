import styled from 'styled-components';

export const MainContent = styled.section`
    background-image: linear-gradient(
        to right bottom,
        #1f202f,
        #1b1f2f,
        #171e2e,
        #121d2e,
        #0c1c2d
    );
    border-radius: 20px;
    margin: 50px auto;
    max-width: 1200px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1240px) {
        margin: 50px 20px;
    }

    .image {
        margin-right: 30px;

        @media (max-width: 640px) {
            margin: 0;
        }

        img {
            border-radius: 20px;
        }
    }

    .title_episodes {
        color: #f5f2f6;
        margin-bottom: 30px;
        text-align: center;
        font-weight: 100;
        text-transform: uppercase;
    }

    .character_informations {
        margin-bottom: 50px;

        display: flex;
        align-items: center;

        @media (max-width: 640px) {
            flex-direction: column;
            gap: 20px;
        }

        .others_informations {
            h1 {
                color: #f5f2f6;
                font-size: 32px;
                font-weight: 100;
                text-transform: uppercase;
            }
            p {
                color: #f5f2f6;
                margin: 15px 0;
                font-size: 20px;
                font-weight: 100;

                @media (max-width: 640px) {
                    margin: 10px 0;
                }
            }
        }
    }

    .episodes_informations {
        width: 80%;
    }
`;
