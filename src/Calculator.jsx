import React,{useState} from 'react'
function Calculator(){
    const [calculate,setCalculate]=useState("");
    return(<div>
        <div>
            <input type="text" value={calculate}/>
            <div>
                <button className="" onClick={()=>setCalculate("")}>AC</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='/'>÷</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='*'>×</button>
                <button className=""onClick={e=>setCalculate(calculate.slice(0,-1))}>←</button>
            </div>
            <div>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='7'>7</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='8'>8</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='9'>9</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='-'>–</button>
            </div>
            <div>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='4'>4</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='5'>5</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='6'>6</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='+'>+</button>
            </div>
            <div>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='1'>1</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='2'>2</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='3'>3</button>
                <button className=""onClick={e=>setCalculate(eval(calculate))} value=''>=</button>
            </div>
            <div>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='%'>%</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='0'>0</button>
                <button className=""onClick={e=>setCalculate(calculate+e.target.value)} value='.'>.</button>
            </div>
        </div>
    </div>)
}
export default Calculator