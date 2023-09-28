import './App.css';
import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [boyName, setBoyName] = useState(null)
  const [girlName, setGirlName] = useState(null)
  const [result, setResult] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      boyName: boyName,
      girlName: girlName
    };
    axios.post("https://flamesappbackend.onrender.com/check", userData).then((response) => {
      setResult(response)
    });
  }
  const handleClear = () => {
    setBoyName(null)
    setGirlName(null)
    setResult(null)
  }
  return (
    <div className="App" >
      <div class="container">
        <div class="d-flex justify-content-center align-items-center min vh-100 " style={{ fontFamily: "cursive" }}>
          <div class="col-md-6 " >
            <div className="card custum_card" >
              <div className='card-header'><h5 style={{color:"#a40b9c"}}>Together Forever</h5></div>
              <div className="card-body col d-flex justify-content-center">
                <form onSubmit={handleSubmit} className='field'>
                  <div className="row p-3">
                    <div className="col-lg-4">
                      <label>Boy Name</label>
                    </div>
                    <div className="col-lg-8">
                      <input type="text" className="form-control" placeholder="Enter boy name" value={boyName} onChange={(e) => setBoyName(e?.target?.value)} />
                    </div>
                  </div>
                  <div className="row p-3">
                    <div className="col-lg-4">
                      <label>Girl Name</label>
                    </div>
                    <div className="col-lg-8">
                      <input type="text" className="form-control" placeholder="Enter girl name" value={girlName} onChange={(e) => setGirlName(e?.target?.value)} />
                    </div>
                  </div>
                  <div className="row float-right p-3">
                    <button type="submit" className="btn btn-theme mr-3" disabled={boyName && girlName ? false : true}>Submit</button>
                    <button type="reset" className="btn btn-cancel" onClick={() => handleClear()}>Clear</button>
                  </div>
                </form>
              </div>
              {
                result &&
                <div className='card-footer'>
                  <h5 style={{color:"#a40b9c"}}>{result?.data?.res}</h5>
                </div>
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
