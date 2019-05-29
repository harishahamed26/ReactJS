import React, {Component} from "react";
import Postdata from "../Data/productList.json";

// To show the lis of products present in the json file(productList.json)

 class Products extends Component{
render(){
    return(
   <div>
       <h1>Product List</h1>
    <table className="table table-striped" style={{ marginTop: 20 }} >
        <tr>
            <th> Product Name</th>
            <th> Weight</th>
            <th> Availability</th>
            <th> Product_URL</th>
            <th>Price Tier</th>
            <th>Price Range</th>
            <th></th>
        </tr>
   {Postdata.map((item, key)=> {
           
             return (
                
                 <tr key = {key}>
                
                    <td>{item.name}</td>

                    <td>{item.weight}</td>
                    <td>{item.availability}</td>
                    <td>{item.product_URL}</td>
                    <td>{item.price_Tier}</td>
                    <td>{item.price_range}</td>
                    
                    
                 

                </tr>
              )
           
           })}
     </table>
    
     </div>
    )
 
} 
}

export default Products;