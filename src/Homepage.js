import React, { Component } from 'react';
import {HomepageWrapper, Portrait, Image, ContentWrapper, 
  Pname, Poverlay, InformationWindow, InformationText, 
  TabWrapper, Tab, InformationHeader} from './styles/Homepage.style';

class Homepage extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0
    };

  }

  handleTab(value){
    var updatedArray = [false, false];
    updatedArray[value] = true;
    this.setState({ activeTab: value});
  }

  render() {
    var activeTab = this.state.activeTab;

    var showTabs;

    switch(activeTab){
      case 0:
        showTabs = (
        <InformationText>
          <InformationHeader>General:</InformationHeader>
          Jin is a well rounded character, with a good parry, good pokes, a wavedash, 
          frametraps, CH pokes, as well as just slightly inferior versions of 
          Mishima staples like the EWGF and hellsweep.
          ↓↘→①②③④

        <InformationHeader>Pros:</InformationHeader>
          Good selection of pokes with good range. All around solid. Good use of parry can raise his potential. Simple to learn and use barring executional requirements

        <InformationHeader>Cons:</InformationHeader>
          Low to average damage in the open field.
        </InformationText>);
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