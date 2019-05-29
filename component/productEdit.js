import React, {Component} from "react";
import '../CSS/style.css';
import jsonfile from 'jsonfile';
import "../Data/productList.json";
import {Redirect} from 'react-router-dom';
import { async } from "q";

//To Create a new product


class Editing extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onChangeProductURL =  this.onChangeProductURL.bind(this);
        this.onChangePriceTier = this.onChangePriceTier.bind(this);
        this.onChangePriceRange = this.onChangePriceRange.bind(this);
        this.onChangeEditable = this.onChangeEditable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            Name :'',
            Weight : '',
            Availabillity :0,
            ProductURL : '',
            PriceTier : '',
            PriceRange :'',
            Editable: true,
           

        }
    }
    onChangeName(e){
        this.setState({
            Name : e.target.value
        });
    }

    onChangeWeight(e){
        this.setState({
            Weight : e.target.value
        })

    }
    onChangeProductURL(e){
        this.setState({
            ProductURL : e.target.value
        })
    }
    onChangeAvailability(e){
        this.setState({
            Availabillity : e.target.value
        })

    }
    onChangePriceTier(e){
        this.setState({
            PriceTier : e.target.value
        })
    }
    onChangeEditable(e){
        this.setState({
            Editable : !e.target.value
                })
    }

    onChangePriceRange(e){
        this.setState({
            PriceRange : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const Data = {
            Name : this.state.Name,
            Weight : this.state.Weight,
            Availabillity : this.state.Availabillity,
            ProductURL : this.state.ProductURL,
            PriceTier :  this.state.PriceTier,
            PriceRange : this.state.PriceRange,
            Editable : this.state.Editable
        };
        const writeJsonFile = require('write-json-file');
        (async()=>{
            await writeJsonFile('productList.json',Data);
        })();
        // const fs= require('fs');
        // const path = "productList.json";
      
        //    try{
        //        fs.writeFile(path, JSON.stringify(Data,null));
        //    }catch(err){
        //        console.error(err);
        //    }
    //    var file ='productList.json';
    //    function jsonfile(file){
    //        jsonfile.writeFile(file,Data);
    //    }

       this.setState({
        Name :'',
        Weight : '',
        Availabillity :0,
        ProductURL : '',
        PriceTier : '',
        PriceRange :'',
        Editable: true,
       })

    }
    
    
    render(){
        const {Name ,Weight, ProductURL } = this.state;
        const isEnabled = Name.length >0 && Weight.length >0 && ProductURL.length>0 ;
        var mystyle= {
            align: "centre",
            color: "darkcyan"
 
          }
         
        return(
        <div className="container">  
            <h1 style={mystyle}> Add Product</h1>
            <form onSubmit={ this.onSubmit}>
            

                <label>Name :</label>
                <input type="text"  value={this.state.Name}
                onChange= {this.onChangeName} align="middle" width="48" height="48"/>
                <br></br>
                <label>Weight :</label>
                <input type="text" value ={this.state.Weight} onChange ={this.onChangeWeight}/>
                <br></br>
                <label>Availabillity :</label>
                <input type="number" value ={this.state.Availabillity } onChange ={this.onChangeAvailability}/>
                <br>
                </br>
                <label>Product URl :</label>
                <input type="text" value= {this.state.ProductURL} onChange={this.onChangeProductURL} />
                <br>
                </br>
                <label>Price Tier : </label>
                <ul>
                    <li>
                        <label>
                            <input type="radio" value="Budget" checked ={this.state.PriceTier ==="Budget"} 
                            onChange={this.onChangePriceTier}/> Budget
                          
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" value="Premier" checked={this.state.PriceTier === "Premier"}
                            onChange ={this.onChangePriceTier} /> Premier
                        </label>
                    </li>
                </ul>
                <label>Price Range :</label>
              {(() =>{ if(this.state.PriceTier === "Budget" ){
                        return(  <select value={this.state.PriceRange} onChange={this.onChangePriceRange}>
                                <option value="4k-6k">4k-6k</option>
                                <option value="6k-9k">6k-9k</option>
                                <option value="9k-11k">9k-11k</option>
                            </select>)
                            }
                else  {
                    return(  <select value={this.state.PriceRange} onChange={this.onChangePriceRange}>
                        <option value="11k-20k">11k-20k</option>
                        <option value="20-30k">20-30k</option>
                        <option value="30k+">30k+</option>
                    </select>)
                }
                })()}
                <br></br>

               <label>IsEditable :</label> 
               <input type="checkbox"   defaultChecked= {this.state.Editable} 
               onChange ={ this.onChangeEditable} />
               
                 <br></br>
                
               <input type="submit" value="Submit" disabled = {!isEnabled} />
               
            </form>            {/* {(()=>
                { if(done){
                    return <Redirect to= '/' />
                }

                })} */}
        </div>
        )
    }
}


export default Editing;