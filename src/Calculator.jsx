import React,{useState} from 'react'
function Calculator(){
    const [calculate,setCalculate]=useState("");
    return(<div className="main-container">
        <div className="container">
            <input type="text" className="input" value={calculate}/>

            <div className="btn-container">
                <button className="yellow ac" onClick={()=>setCalculate("")}>AC</button>
                <button className="yellow divid"onClick={e=>setCalculate(calculate+e.target.value)} value='/'>÷</button>
                <button className="yellow multipliy"onClick={e=>setCalculate(calculate+e.target.value)} value='*'>×</button>
                <button className="yellow cancel"onClick={e=>setCalculate(calculate.slice(0,-1))}>←</button>
            
                <button className="seven"onClick={e=>setCalculate(calculate+e.target.value)} value='7'>7</button>
                <button className="eight"onClick={e=>setCalculate(calculate+e.target.value)} value='8'>8</button>
                <button className="nine"onClick={e=>setCalculate(calculate+e.target.value)} value='9'>9</button>
                <button className="yellow sub"onClick={e=>setCalculate(calculate+e.target.value)} value='-'>–</button>

                <button className="four"onClick={e=>setCalculate(calculate+e.target.value)} value='4'>4</button>
                <button className="five"onClick={e=>setCalculate(calculate+e.target.value)} value='5'>5</button>
                <button className="six"onClick={e=>setCalculate(calculate+e.target.value)} value='6'>6</button>
                <button className="yellow add"onClick={e=>setCalculate(calculate+e.target.value)} value='+'>+</button>

                <button className="one"onClick={e=>setCalculate(calculate+e.target.value)} value='1'>1</button>
                <button className="two"onClick={e=>setCalculate(calculate+e.target.value)} value='2'>2</button>
                <button className="three"onClick={e=>setCalculate(calculate+e.target.value)} value='3'>3</button>
                <button className="equal"onClick={()=>setCalculate(eval(calculate))} value=''>=</button>

                <button className="mod"onClick={e=>setCalculate(calculate+e.target.value)} value='%'>%</button>
                <button className="zero"onClick={e=>setCalculate(calculate+e.target.value)} value='0'>0</button>
                <button className="dot"onClick={e=>setCalculate(calculate+e.target.value)} value='.'>.</button>

            </div>
        </div>
    </div>)
}
export default Calculator