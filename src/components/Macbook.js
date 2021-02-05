import './Macbook.css';

function Macbook({screen}) {
  return (
      <div className="comp">
        <div className="monitor">
          <div className="screen">
              <img src={screen}/>
          </div>
        </div>
        <div className="base"></div>
      </div>
  );
}

export default Macbook;
