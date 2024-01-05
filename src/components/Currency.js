import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<div className="input-group mb-3" >
<div className="input-group-prepend">
                <label htmlFor="inputGroupSelect01">Currency </label>
                  </div>
<select className="custom-select" id="inputGroupSelect01" >
                <option defaultValue> ({currency})</option>
                <option value="Marketing" name="marketing">$ Dollar</option>
                <option value="Sales" name="sales">£ Pound</option>
                <option value="Finance" name="finance"># Euro</option>
                <option value="HR" name="hr"> @ Ruppee</option>
                  </select>



</div>
</div>



    );
};
export default Currency;