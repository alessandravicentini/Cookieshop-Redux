import styled from "styled-components";

export const Container = styled.nav`
width: 90vw;
height: 60px;

margin: auto;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

padding: 10px;

> div{
    width: 20%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    svg{
        cursor: pointer;

        transition: 0.3s;

        margin-left: 30px;
    }

    svg:hover{
        transform: scale(1.3);
    }

    > span{
        align-self: flex-end;

        background-color: green;

        border-radius: 50%;

        height: 16px;
        aspect-ratio: 1;

        text-align: center;
        font-size: x-small;
        color: white;        
    }
}
`

export const Logo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 20%;
height: 100%;

h2{
    margin-left: 10px;
}

img{
    height: 100%;
}
`


