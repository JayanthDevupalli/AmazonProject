import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymetSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
  try{

    await loadProductsFetch();

    const value= await new Promise((resolve,reject)=>{
      loadCart(()=>{
        resolve('value2');
      });
    });

  } catch(error){
    console.log("Unexpected error. Please try again later.");
  }
  
  renderOrderSummary();
  renderPaymetSummary();
}
loadPage();