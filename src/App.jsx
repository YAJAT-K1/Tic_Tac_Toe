import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mark, setMark] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [flag, setFlag] = useState(true);
  const[winner,setWinner]=useState("no winner yet");
  function Winner(arr){
    let winpos=[[1,2,3],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<winpos.length;i++){
      let a= winpos[i][0];
      let b = winpos[i][1];
      let c = winpos[i][2];
      if(arr[a] && arr[a]==arr[b] && arr[a]==arr[c]){
          setWinner(arr[a]);
      }
    }
  }
  function markChangeHandler(idx) {
    let newMark = [...mark];
    if (flag == true) {
      newMark[idx] = "X";
      setFlag(false);
    } else {
      newMark[idx] = "O";
      setFlag(true);
    }

    setMark(newMark);
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            markChangeHandler(0);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[0]}
        </button>
        <button
          onClick={() => {
            markChangeHandler(1);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[1]}
        </button>
        <button
          onClick={() => {
            markChangeHandler(2);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[2]}
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            markChangeHandler(3);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[3]}
        </button>
        <button
          onClick={() => {
            markChangeHandler(4);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[4]}
        </button>
        <button
          onClick={() => {
            markChangeHandler(5);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[5]}
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            markChangeHandler(6);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[6]}
        </button>
        <button
          onClick={() => {
            markChangeHandler(7);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[7]}
        </button>
        <button
          onClick={() => {
            markChangeHandler(8);
          }}
          style={{ width: "50px", height: "50px", border: "1px solid black" }}
        >
          {mark[8]}
        </button>
        <h1>winner:{winner}</h1>
      </div>
    </>
  );
}

export default App;