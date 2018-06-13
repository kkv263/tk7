import styled from 'styled-components';

export const HomepageWrapper = styled.div`
position:relative;
width:100%;
height: 100vh;
background: linear-gradient(to bottom, #37596b 0%, #0e1c23 100%);
`

export const ContentWrapper = styled.div`
position:absolute;
bottom:5%;
left: 2.5%;
right: 2.5%;
`

export const Image = styled.img`
width: 100%;
height:auto;
`

export const Poverlay = styled.div`
position:absolute;
left:0;
bottom:0;
width:100%;
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
background:#091722;
box-shadow: 0 0 10px 10px #0D485D inset;
`

export const InformationWindow = styled.div`
float:right;
width:57.5%;
background:#091722;
box-shadow: 0 0 10px 10px #0D485D inset;
`

export const TabWrapper = styled.div`
width:95%;
height: 30px;
margin-top: 2%;
margin-left: 2.5%;
margin-right: 2.5%;
`

export const Tab = styled.div`
font-family: 'Orbitron', sans-serif;
font-size: 1.3em;
color: ${props => props.active ? '#fff' : '#37596b'};
display:inline-block;
width: 33.33%;
text-align:center;
border-bottom: 2px solid ${props => props.active ? '#fff' : 'none'};
transition: border-color linear .25s, color linear .25s;
text-shadow: 0 0 2px ${props => props.active ? '#fff' : 'none'};

&:hover {
  color: #fff;
  border-bottom: 2px solid #fff;
  cursor:pointer;
}
`

export const InformationHeader = styled.h1`
font-family: 'Orbitron', sans-serif;
font-size: 1.1em;
margin-top: 2%;
`

export const InformationText = styled.p`
font-family: 'Questrial', sans-serif;
color: white;
font-size: 1.2em;
line-height: 1.3em;
margin: 2% 2% 2% 2%;
`
