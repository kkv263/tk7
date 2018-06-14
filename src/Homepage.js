import React, { Component } from 'react';
import {HomepageWrapper, Portrait, Image, ContentWrapper, 
  Pname, Poverlay, InformationWindow, InformationText, 
  TabWrapper, Tab, InformationHeader, MoveGif, InformationContainer, PaginationWrapper, PaginationItems} from './styles/Homepage.style';

class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0,
      activeMove: 0
    };

  }

  handleTab(value){
    this.setState({ activeTab: value});
  }

  handleMove(value){
    console.log(value);
    this.setState({ activeMove: value});
  } 

  render() {
    var activeTab = this.state.activeTab;
    var activeMove = this.state.activeMove;
    var showTabs;
    var top10 = ['④', '→⭑↓↘+②', '','','','','','','','',]

    switch(activeTab){
      case 0:
        showTabs = (
        <InformationContainer>
          <InformationHeader>General: ⬈ ⬉ ⬊ ⬋ </InformationHeader>
          <InformationText>
            Jin is a well rounded character, with a good parry, good pokes, a wavedash, 
            frametraps, CH pokes, as well as just slightly inferior versions of 
            Mishima staples like the EWGF and hellsweep.
            ①②③④
            ↖ ↑ ↗ ← · → ↙ ↓ ↘
          </InformationText>


        <InformationHeader>Pros:</InformationHeader>
          <InformationText>
            Good selection of pokes with good range. All around solid. Good use of parry can raise his potential. 
            Simple to learn and use barring executional requirements
          </InformationText>

        <InformationHeader>Cons:</InformationHeader>
          <InformationText>
            Low to average damage in the open field.
          </InformationText>
        </InformationContainer>);
        break;
      case 1:
          showTabs = (
            <InformationContainer>
              <InformationText>{top10[this.state.activeMove]}</InformationText> 
              <MoveGif src={require("./assets/jin-4.gif")} ></MoveGif>
              <PaginationWrapper>
                {top10.map((moves,index) => 
                  <PaginationItems key={index} active = {activeMove === index} onClick={() => this.handleMove(index)} >⬤</PaginationItems>
                )}
              </PaginationWrapper>
            </InformationContainer>
          )
          break;
      default:
        break;
    }


    return (
      <HomepageWrapper>
      <ContentWrapper>
        <Portrait>
          <Image src={require("./assets/jin.png")} ></Image>
          <Poverlay>
            <Pname>JIN KAZAMA</Pname>
          </Poverlay>

        </Portrait>
      <InformationWindow>

        <TabWrapper>
          <Tab active = {activeTab === 0} onClick={() => this.handleTab(0)}>Playstyle</Tab> 
          <Tab active = {activeTab === 1} onClick={() => this.handleTab(1)}>Top 10 Moves</Tab> 
          <Tab active = {activeTab === 2} onClick={() => this.handleTab(2)}>Frames</Tab> 
        </TabWrapper>
        {showTabs} 

      </InformationWindow>
      </ContentWrapper>

      </HomepageWrapper>
    );
  }
}

export default Homepage;