import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

height: 100px;
width: 70%;

    > img{
        height: 100%;
        width: 80px;
    }

    > svg{
        width: 80px;

        cursor: pointer;
        transition: 0.3s;
    }

    > svg:hover{
        transform: scale(1.3);
    }

    > svg:active{
        color: firebrick;
    }

    p, span{
        flex: 1;

        border-bottom: 1px solid #222;
    }

    span{
        text-align: right;
    }

`