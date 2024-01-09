import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import  '../component.css';


const Currency = () => {
    const {currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        console.log('Selected value:', event.target.value);
        setNewCurrency(event.target.value);
        /*currency = newCurrency;*/
        dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
           
        });
    }
    return (
<div  style={{background: "#B7EBC6"}} >

            <label htmlFor="inputGroupSelect01" style={{color: "#5BA571"}}>Currency: </label>
                  
<select className="select-container"  id="inputGroupSelect01" onChange={handleCurrencyChange}>
    <option defaultValue value="£">£ Pound</option>
    <option value="$" name="Dollar" className="select-option" >$ Dollar</option>
    <option value="£" name="Pound" className="select-option">£ Pound</option>
    <option value="&#x20AC;" name="Euro" className="select-option">&#x20AC; Euro</option>
    <option value="&#x20B9;" name="Ruppee" className="select-option">&#x20B9; Ruppee</option>
</select>
</div>




    );
};
export default Currency;