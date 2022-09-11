import {useDispatch, useSelector} from 'react-redux';
import Product from './Product';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/actions/productActions';

export default function ProductListing(){

    const dispatch = useDispatch()
    const products = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    console.log("Products: ", products);

    return(
        <div className='ui grid container' >
            <Product  />
        </div>
    )
}