import React, {useState} from "react";

function FunctionalComponent({name, age, company, setName} ){
    const [count, setCount] = useState(0);
const [changeName, setChangeName] = useState("");

    // const {name, age, company, setName} = props;
    return (
        <div>
            <h1>This is our functional component</h1>
            <button onClick={() => setCount(count + 1)}>Click on me to increment by 1</button>
            <button onClick={() => setCount(count - 1)}>Click on me to decrement by 1</button>
            <h1>{count}</h1>
            <h5>My name is {name}, I'm {age} and I work for {company}</h5>
            <input type="text" onChange={(e)=> setChangeName(e.target.value)}/>
            <button onClick={()=> setName(changeName)}>Change name</button>
        </div>
    )
}

export default FunctionalComponent;