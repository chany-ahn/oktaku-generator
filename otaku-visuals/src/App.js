import './App.css';
import React, { Component } from "react";

class Options extends Component {
  constructor() {
    super();
    this.state = {
      rarity: "low",
      element: "geo",
      weapon: "polearm",
      nation: "Inazuma",
    };
    this.onChangeRarity = this.onChangeRarity.bind(this);
    this.onChangeElement = this.onChangeElement.bind(this);
    this.onChangeWeapon = this.onChangeWeapon.bind(this);
    this.onChangeNation = this.onChangeNation.bind(this);
    this.onPress = this.onPress.bind(this);
  }
  onChangeRarity(event) {
    this.setState(
      {rarity: event.target.value}
    )
  }
  onChangeElement(event) {
    this.setState(
      {element: event.target.value}
    )
  }
  onChangeWeapon(event) {
    this.setState(
      {weapon: event.target.value}
    )
  }
  onChangeNation(event) {
    this.setState(
      {nation: event.target.value}
    )
  }
  onPress() {
    console.log("Rarity: " + this.state.rarity);
    console.log("Element: " + this.state.element);
    console.log("Weapon: " + this.state.weapon);
    console.log("Nation: " + this.state.nation);
  }

  render() {
    return (
      <div>
        <div onChange={this.onChangeRarity}>
          <input type="radio" value="low" name="rarity" defaultChecked="checked"/> 4-star
          <input type="radio" value="high" name="rarity" /> 5-star
        </div>
        <br/>
        <div onChange={this.onChangeElement}>
          <input type="radio" value="geo" name="element" defaultChecked="checked"/> Geo
          <input type="radio" value="cryo" name="element" /> Cryo
          <input type="radio" value="pyro" name="element" /> Pyro
          <input type="radio" value="hydro" name="element" /> Hydro
          <input type="radio" value="electro" name="element" /> Electro
          <input type="radio" value="anemo" name="element" /> Anemo
        </div>
        <br/>
        <div onChange={this.onChangeWeapon}>
          <input type="radio" value="polearm" name="weapon" defaultChecked="checked"/> Polearm
          <input type="radio" value="sword" name="weapon" /> Sword
          <input type="radio" value="bow" name="weapon" /> Bow
          <input type="radio" value="catalyst" name="weapon" /> Catalyst
          <input type="radio" value="claymore" name="weapon" /> Claymore
        </div>
        <br/>
        <div onChange={this.onChangeNation}>
          <input type="radio" value="Inazuma" name="nation" defaultChecked="checked"/> Inazuma
          <input type="radio" value="Liyue" name="nation" /> Liyue
          <input type="radio" value="Mondstadt" name="nation" /> Mondstadt
          <input type="radio" value="Snezhnaya" name="nation" /> Snezhnaya
          <input type="radio" value="Nowhere" name="nation" /> Nowhere
        </div>
        <br/>
        <br/>
        <button onClick={this.onPress}>Generate yourself</button> 
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="otaku_sayu_head.png" className="App-logo" alt="logo" />
        <p>
          create your personalized otaku avatar
        </p>
      </header>
      <div class="container">
        <div class="left">
          <h1>Select your attributes</h1>
          <br/>
          <Options/>
        </div>
        <div class="center">
          <h1>Appreciate your beauty</h1>
          <img src="char_silhouette.png" alt="Who is it?"></img>
          <br/>
          <button type="button">Download 3D avatar</button> 
        </div>
        <div class="right">
          <h1>Register your identity</h1>
          <img src="nftemplate.png" alt="Bored Dliuc"></img>
          <br/>
          <button type="button">Purchase NFT</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
