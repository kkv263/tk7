import React, { Component } from 'react';
import {HomepageWrapper, Portrait, Image, ContentWrapper, Pname, Poverlay, InformationWindow} from './styles/Homepage.style';

class Homepage extends Component {
  constructor(){
    super();
  }

  componentDidMount(){

  }

  render() {
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
        yo 
      </InformationWindow>
      </ContentWrapper>

      </HomepageWrapper>
    );
  }
}

export default Homepage;