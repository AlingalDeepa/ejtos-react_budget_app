import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import  '../component.css';


const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
<div  style={{background: "#B7EBC6"}} >

            <label htmlFor="inputGroupSelect01" style={{color: "#5BA571"}}>Currency: </label>
                  
<select className="select-container" id="inputGroupSelect01" >
    <option value="Marketing" name="marketing" className="select-option">$ Dollar</option>
    <option value="Sales" name="sales" className="select-option">£ Pound</option>
    <option value="Finance" name="finance" className="select-option">&#x20AC; Euro</option>
    <option value="HR" name="hr" className="select-option">&#x20B9; Ruppee</option>
</select>

</div>




    );
};
export default Currency;