import styled from 'styled-components';

export const HomepageWrapper = styled.div`
position:absolute;
width:100%;
height: 100vh;
background: linear-gradient(to bottom, #37596b 0%, #0e1c23 100%);
`

export const ContentWrapper = styled.div`
margin-left: 2.5%;
margin-top: 10%;
margin-right: 2.5%;
background:blue;
`

export const Image = styled.img`
max-width: 100%;
height: auto;
`

export const Poverlay = styled.div`
position:absolute;
left:0;
bottom:0;
width:100%;
height: 45px;
background: rgba(0,0,0,.5);
text-align:center;
vertical-align: middle;
line-height: 50px;
`

export const Pname = styled.h1`
font-family: 'Orbitron', sans-serif;
font-size: 2em;
color: white;
text-shadow: 0 0 10px #F1431C;
`

export const Portrait = styled.div`
float:left;
position:relative;
width:40%;
border: 1px 1px 1px 0px solid #0D485D;
background:#091722;
border-radius: 2px;
box-shadow: 0 0 10px 10px #0D485D inset;
`

export const InformationWindow = styled.div`
float:right;
width:57.5%;
height:auto;
background: red;
`
