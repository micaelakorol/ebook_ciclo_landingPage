import { styled } from "styled-components";
import { color } from "./color";

const ContainerPrincipal = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:-3rem;
`
const TitleMain = styled.h1`
//font-size: 2.4rem;
margin:1rem 0 1rem 0;
text-align: center;
`
const Subtitle = styled.h2`
font-weight: 500;
text-align: center;
margin: 0 .5rem 0 .5rem;
`
const BtnMain = styled.button`
margin: 1rem 0 0 1rem;
padding:.7rem 4rem;
font-size: 1.01rem;
color: ${color.white};
background-color: ${color.btnMain};
border-radius: .4rem;
border: none;
outline: none;
cursor: pointer;
&:hover{
    opacity: 0.8;
}
`

export {ContainerPrincipal,TitleMain,Subtitle,BtnMain}