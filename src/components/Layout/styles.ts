import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;

    > span {
        margin-top: 48px;
        display: flex;
    }

    .left-column, .rigth-column, .ad-banner{
        display: none !important;
    }

    @media(min-width: 1180px){
        > main{
            margin: 0 30px;
            display: flex;
            justify-content: center;
        }
        > span {
            margin-top: 52px;
            padding: 8px 0;
        }
        .left-column, .rigth-column{
            display: unset !important; 
        }
        .ad-banner{
            display: block !important; 
        }
        .middle-column{
            margin: 0 25px 16px;
        }

    }

`;
