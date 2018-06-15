import React, { Component } from 'react';
import {HomepageWrapper, Portrait, Image, ContentWrapper, 
  Pname, Poverlay, InformationWindow, InformationText, 
  TabWrapper, Tab, InformationHeader, MoveSvg, InformationContainer, PaginationWrapper, PaginationItems, InputContainer, MoveGif} from './styles/Homepage.style';

import data from './data.json';

class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0,
      activeMove: 0,
      movelistLength: data['movelist'].length
    };
    this.handleTab = this.handleTab.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleTab(value){
    this.setState({ activeTab: value});
  }

  handleMove(value){
    this.setState({ activeMove: value});
  } 

  handlePageChange(value){
    if (this.state.activeMove + value > this.state.movelistLength - 1){
      this.setState({ activeMove: 0});
    }
    else if (this.state.activeMove + value < 0){
      this.setState({ activeMove: this.state.movelistLength - 1});
    }
    else
      this.setState({ activeMove: this.state.activeMove + value});
  }

  render() {
    var activeTab = this.state.activeTab;
    var activeMove = this.state.activeMove;
    var showTabs;
    var movelist = data['movelist'];

    switch(activeTab){
      case 0:
        showTabs = (
        <InformationContainer>
          <InformationHeader>General:</InformationHeader>
          <InformationText>
            Jin is a well rounded character, with a good parry, good pokes, a wavedash, 
            frametraps, CH pokes, as well as just slightly inferior versions of 
            Mishima staples like the EWGF and hellsweep.
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
              <InputContainer>
                {(movelist[this.state.activeMove]['input']).map((moves,index) => 
                  <MoveSvg key={index} src={require("./assets/buttons/"+movelist[this.state.activeMove]['input'][index]+".svg")} ></MoveSvg>
                )}  
                <InformationText>{movelist[this.state.activeMove]['notes']}</InformationText>
              </InputContainer>

              <MoveGif src={require("./assets/jin-4.gif")}></MoveGif>

              <PaginationWrapper>
                <PaginationItems onClick={() => this.handlePageChange(-1)}>〈</PaginationItems>
                {Object.keys(data['movelist']).map((moves,index) => 
                  <PaginationItems key={index} active = {activeMove === index} onClick={() => this.handleMove(index)} >⬤</PaginationItems>
                )}
                <PaginationItems onClick={() => this.handlePageChange(1)}>〉</PaginationItems>
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