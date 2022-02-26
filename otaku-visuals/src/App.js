import './App.css';

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
