import React from "react";
import { useState } from "react";
import './App.css';
import { evaluate } from 'mathjs';


function Calculator(){
    const [inputArr,setInputArr] = useState([]);
    const [deci,setDeci] = useState(2);

    const handleClick=(number)=>{
        setInputArr(a=>[...a,number]);
    }

    const printOut=()=>{
        return(
            inputArr.map((arr,index)=>
                <div className="disNum" key={index}>{arr}</div>
            )
        );
    }

    const resetAll=()=>{
        const updArr=[];
        setInputArr(updArr);
    }

    const handleBack=()=>{
        setInputArr(inputArr => {
            const newArray = inputArr.slice(0, -1);
            return newArray;
          });
    }

    const calOutput=()=>{
        try {
            const expression = inputArr.join('');
            const calculatedResult = evaluate(expression).toFixed(deci);
            
            const updArr=[];
            setInputArr(updArr);

            setInputArr(a=>[...a,calculatedResult]);
          } 

          catch (error) {
            const updArr = [];
            setInputArr(updArr);
            setInputArr(a=>[...a,'Error']);
          }
    }

    const handleDeci=(event)=>{
        setDeci(event.target.value);
    }


    return(
        <div className="calBox">
            <div deciBox>
                <input style={{backgroundColor: "black", color: "white", width: "30px", border: "none"}} value={deci} className="deciBox" type="number" onChange={(event)=>handleDeci(event)}/>
            </div>
            <div className="resDisplay">
                <div className="outputDis">
                    {inputArr.length==0 ? '0' : printOut()}
                </div>
            </div>
            <div className="numPad">
                <div className="outernumDis">
                    <button className="numDis numDisG" onClick={()=>resetAll()}>
                    AC
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisG" onClick={()=> handleClick('%')}>
                    %
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisG" onClick={()=> handleBack()}>
                    ⩹
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisG" onClick={()=> handleClick('/')}>
                    /
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(7)}>
                    7
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(8)}>
                    8
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(9)}>
                    9
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisG" onClick={()=> handleClick('*')}>
                    x
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(4)}>
                    4
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(5)}>
                    5
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(6)}>
                    6
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisG " onClick={()=> handleClick('-')}>
                    -
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(1)}>
                    1
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(2)}>
                    2
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(3)}>
                    3
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisG" onClick={()=> handleClick('+')}>
                    +
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick("00")}>
                    00
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick(0)}>
                    0
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis" onClick={()=> handleClick('.')}>
                    .
                    </button></div>
                <div className="outernumDis">
                    <button className="numDis numDisO" onClick={()=> calOutput()}>
                    =
                    </button></div>
            </div>
        </div>
    );
}
export default Calculator;