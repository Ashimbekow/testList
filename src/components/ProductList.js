import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import Filters from './Filters';
import Pagination from './Pagination';

const ProductList = () => {
const [products, setProducts] = useState([]);
const [filters, setFilters] = useState({
    category_id: '',
    stock_id: '',
    price_min: '',
    price_max: '',
    characteristic: '',
    sort: 'asc',
    page: 1,
    limit: 14,
    fields: 'id,sku,prices.price',
});

useEffect(() => {
    fetchProducts();
}, [filters]);

const fetchProducts = async () => {
    const { category_id, stock_id, price_min, price_max, characteristic, sort, page, limit, fields } = filters;
    const params = { category_id, stock_id, price_min, price_max, characteristic, sort, page, limit, fields };
    console.log('Request params:', params); 

    try {
     const response = await axios.get('http://localhost:3000/api/products', { params });
     setProducts(response.data.docs);
    } catch (error) {
     console.error('Error fetching products:', error);
    }
};

const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
};

return (
    <div>
     <Filters onFilterChange={handleFilterChange} />
     <div className="product-list">
        {products.map((product) => (
         <ProductItem key={product.id} product={product} />
        ))}
     </div>
     <Pagination total={products.total} limit={filters.limit} page={filters.page} onPageChange={handleFilterChange} />
    </div>
);
};

export default ProductList;