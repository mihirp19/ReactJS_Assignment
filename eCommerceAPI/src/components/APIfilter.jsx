import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const APIfilter = () => {
    const [data,setData] = useState([]);
    const [catData, setCatData] = useState([]);
    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setData(res.data))
    }
    useEffect(()=>{
        fetchData()

        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>setCatData(res.data))
    },[])

    const getCategory = (e) => {
        let cat = e.target.value;
        if(cat !== ''){
            axios.get('https://fakestoreapi.com/products/category/'+cat)
            .then((res)=>setData(res.data))
        }else{
            fetchData()
        }
    }

    const PriceFilter = (e) => {
        let order = e.target.value;
        let data1 = [...data];
        if(order == "1"){
            data1.sort((a,b)=>{
                return a.price - b.price;
            })
            setData(data1);
        }
        else if(order == "2"){
            data1.sort((a,b)=>{
                return b.price - a.price;
            })
           
        }
        else{
            fetchData()
        }
        setData(data1)
    }

  return (
    <div>
    <h3>Products</h3>
    Category:
    &nbsp;
    <select name="categoryName" onChange={getCategory}>
        <option value="">Select Category</option>
        {
            catData && catData.map((i)=>{
                return(
                    <option value={i}>{i}</option>
                )
            })
        }
    </select>
    &nbsp;
    Price:
    &nbsp;
    <select name="priceFilter" onChange={PriceFilter}>
        <option value="">Select Price Order</option>
        <option value="1">Low to High</option>
        <option value="2">High to Low</option>
    </select>
        <table border={'2'}>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>Category</td>
            </tr>
            {
                data && data.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.description}</td>
                            <td>{i.price}</td>
                            <td>{i.category}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}
