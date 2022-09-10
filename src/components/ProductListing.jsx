import {useDispatch, useSelector} from 'react-redux';
import Product from './Product';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/productActions';

export default function ProductListing(){

    const dispatch = useDispatch()
    const products = useSelector((state) => state);

    const fetchProducts = async() => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log('err', err))

        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("Products: ", products);

    return(
        <div className='ui grid container' >
            <Product  />
        </div>
    )
}