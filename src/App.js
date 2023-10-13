import './App.css';
import React, { useState } from 'react';
// import axios from "axios";

function App() {
  const [boyName, setBoyName] = useState(null)
  const [girlName, setGirlName] = useState(null)
  const [result, setResult] = useState(null)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     boyName: boyName,
  //     girlName: girlName
  //   };
  //   setLoading(true)
  //   // http://127.0.0.1:8000/check
  //   // https://flamesappbackend.onrender.com/check
  //   axios.post("https://flamesappbackend.onrender.com/check", userData).then((response) => {
  //     setLoading(false)
  //     setResult(response)
  //   });
  // }
  const handleSubmit = (e) => {
    e?.preventDefault()
    var flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    const boy = boyName.toLowerCase().replace(/ /g, '').split('');
    const girl = girlName.toLowerCase().replace(/ /g, '').split('');
    const boyIndex = [];
    const girlIndex = [];
    for (let i = 0; i < boy.length; i++) {
      for (let j = 0; j < girl.length; j++) {
        if (boy[i] === girl[j]) {
          boyIndex.push(i);
          girlIndex.push(j);
          boy[i] = 0;
          girl[j] = 0;
          break;
        }
      }
    }
    const overallLength = (boy.length - boyIndex.length) + (girl.length - girlIndex.length);
    for (let letter = 0; letter < 5; letter++) {
      const temp = [];
      let x = overallLength;
      if (overallLength > flames?.length) {
        x = x % flames?.length;
        if(x===0){
          temp?.push(...flames?.slice(0, -1))
        }
        else{
          temp?.push(...flames?.slice(x, flames.length), ...flames?.slice(0, x - 1));
        }
      } else {
        temp?.push(...flames?.slice(x, flames.length), ...flames?.slice(0, x - 1));
      }
      flames.length = 0;
      flames?.push(...temp);
    }

    flames = flames.join('');
    let out = '';
    if (flames === 'F') {
      out = 'Friend';
    } else if (flames === 'L') {
      out = 'Love';
    } else if (flames === 'A') {
      out = 'Affection';
    } else if (flames === 'M') {
      out = 'Marriage';
    } else if (flames === 'E') {
      out = 'Enemy';
    } else if (flames === 'S') {
      out = 'Sister';
    }
    setResult(`The relationship between ${boyName} and ${girlName} is ${out}`);
  }
  const handleClear = () => {
    setBoyName(null)
    setGirlName(null)
    setResult(null)
  }
  return (
    <div className="App" >
      <div class="container">
        <div className='row head'>
          <h3>A perfect relationship is not perfect, It's just that both people never gave up...</h3>
        </div>
        <div class="d-flex justify-content-center align-items-center" style={{ fontFamily: "cursive" }}>
          <div class="col-md-6 " >
            <div className="card custum_card" >
              <div className='card-header'><h5 style={{ color: "#a40b9c" }}>Together Forever</h5></div>
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
                  <h5 style={{ color: "#a40b9c" }}>{result}</h5>
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
