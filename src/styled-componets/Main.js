import { styled } from "styled-components";
import { color } from "./color";

const ContainerPrincipal = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:0;
`
const TitleMain = styled.h1`
font-size: 2.4rem;
margin:1rem 0 1rem 0;
`
const Subtitle = styled.h2`
font-weight: 500;
`
const BtnMain = styled.button`
margin: 1rem 0 0 1rem;
padding:.7rem 4rem;
font-size: .9rem;
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