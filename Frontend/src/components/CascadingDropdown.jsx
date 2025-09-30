import React , {useEffect,useState}from 'react'
import { use } from 'react';

function CascadingDropdown() {
    const[data,setData]=useState([]);
    const[country,setCountry]=useState("");
    const[states,setStates]=useState([]);
    const[state,setState]=useState("");
    const[cities,setCities]=useState([]);   

    useEffect(()=>{
        fetch("http://localhost:8000/locations")
        .then((res)=>res.json())
        .then((d)=>setData(d));
    },[]);

    const handleCountry=(e)=>{
        const selectedCountry=e.target.value;
        setCountry(selectedCountry);
        setStates( selectedCountry ? Object.keys(data[selectedCountry]) : []);
        setCities([]);
        setState("");
    }
    const handleState=(e)=>{
        const selectedState=e.target.value;
        setState(selectedState);
        setCities(selectedState? data[country][selectedState] : []);
    }
    
  return (
    <>
     {/* Country Dropdown */}
      <select value={country} onChange={handleCountry}>
        <option value="">Select Country</option>
        {
            Object.keys(data).map((country)=>(
                <option key={country} value={country}>{country}</option>
            ))
        }
      </select>

        {/* State Dropdown */}

        <select value={state} onChange={handleState}>
            <option value="">Select State</option>
            {
                states.map((s)=>(
                    <option key={s} value={s}>{s}</option>
                ))
            }
        </select>

        {/* City Dropdown */}
        <select>
            
            <option value="">Select City</option>
            {
                cities.map((c)=>(
                    <option key={c} value={c}>{c}</option>
                ))
            }
        </select>

    </>
  )
}

export default CascadingDropdown
