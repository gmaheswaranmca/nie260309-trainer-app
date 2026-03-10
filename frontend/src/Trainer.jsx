import React,{useState,useEffect} from "react";
import axios from "axios";

function Trainer(){

const [trainers,setTrainers]=useState([]);

let NODE_EC2_IP = '13.233.100.50';
NODE_EC2_IP = 'localhost';

useEffect(()=>{

axios.get(`http://${NODE_EC2_IP}:5000/api/trainer`)
.then(res=>setTrainers(res.data));

},[]);

return(

<div>

<h2>Trainers</h2>

{trainers.map(t=>(
<div key={t._id}>

<h3>{t.name}</h3>

<p>{t.skills}</p>

<img src={`http://${NODE_EC2_IP}:5000/uploads/${t.photo}`} width="200"/>

</div>
))}

</div>

);

}

export default Trainer;