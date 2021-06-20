import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    background: #020d22;
    height: 140px;
    padding: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    .container_title_logo {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 140px;
            margin-right: 20px;
            width: 140px;
        }

        h1 {
            color: #fff;
            font-weight: 100;
            font-size: 32px;

            @media (max-width: 640px) {
                font-size: 22px;
            }
        }
    }
`;
