import React from 'react';
import CounterButtonContainer from "./components/CounterButtonContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import Counter from "./components/Counter";
import SpecialText from "./components/SpecialText";
import UserButtons from "./components/UserButtons";
import Thermostat from "./components/Thermostat";
import Users from "./components/Users";
import ChangeTemperature from "./components/ChangeTemperature";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCity from "./components/CurrentCity";
import CityDropDown from "./components/CityDropDown";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";
import CounterContainer from "./components/CounterContainer";
import SpecialTextContainer from "./components/SpecialTextContainer"


function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButtonContainer />
          <br />
          <SpecialTextBoxContainer />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />

          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <CounterContainer />
          <br />
          <SpecialTextContainer />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <VideoPlayer />
          <br />


        </div>
        <div className="container">
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;
