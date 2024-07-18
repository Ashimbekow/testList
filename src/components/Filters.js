import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
const [category_id, setCategoryId] = useState('');
const [stock_id, setStockId] = useState('');
const [price_min, setPriceMin] = useState('');
const [price_max, setPriceMax] = useState('');
const [characteristic, setCharacteristic] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ category_id, stock_id, price_min, price_max, characteristic });
};

return (
    <form onSubmit={handleSubmit}>
     <div>
        <label>Category ID:</label>
        <input type="text" value={category_id} onChange={(e) => setCategoryId(e.target.value)} />
     </div>
     <div>
        <label>Stock ID:</label>
        <input type="text" value={stock_id} onChange={(e) => setStockId(e.target.value)} />
     </div>
     <div>
        <label>Price Min:</label>
        <input type="text" value={price_min} onChange={(e) => setPriceMin(e.target.value)} />
     </div>
     <div>
        <label>Price Max:</label>
        <input type="text" value={price_max} onChange={(e) => setPriceMax(e.target.value)} />
     </div>
     <div>
        <label>Characteristic:</label>
        <input type="text" value={characteristic} onChange={(e) => setCharacteristic(e.target.value)} />
     </div>
     <button type="submit">Apply Filters</button>
    </form>
);
};

export default Filters;