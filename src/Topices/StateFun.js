import { useState } from "react";
import './StateFun';


function StateFun() {

    const [data, setdata] = useState("admin");

    function changeData(){
        if(data==="admin"){
        setdata("user");
        }
        else{
            setdata("admin");
        }
    }

    return (
        <>
            <h2>1.State in react functional  component</h2>
            <p>this is change :- {data}</p>
            <button onClick={changeData}>Change data</button>
        </>
    );
}

export default StateFun;