import './IPhone.css';

// https://codepen.io/aepnat/pen/BayPbEG

function IPhone({image}) {
    return (
        <div className="iphone-x">
          <div className="side">
            <div className="screen">
              <img src={image}></img>
            </div>
          </div>
          <div className="line"></div>
          <div className="header">
            <div className="sensor-1"></div>
            <div className="sensor-2"></div>
            <div className="sensor-3"></div>
          </div>
          <div className="volume-button"></div>
          <div className="power-button"></div>
        </div>
    );
}

export default IPhone