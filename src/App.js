import logo from './logo.svg';
import GroceryList from './Grocery';
import Apple from './Apple'
import ProductCard from './ProductCard';
import Weather from './Weather'

import './App.css';


function App() {
  return (
    <div>
         
       
        
      


        <Weather />

     
        <div className="product-card-container">
       <ProductCard
          image="http://localhost:3000/ReactApp/product-image.jpg"
          title="Nikon-850c"
         price="299.99"
           />
           <ProductCard
          image="http://localhost:3000/ReactApp/hp.jpg"
          title="HP G6"
         price="599.99"
           />
           <ProductCard
          image="http://localhost:3000/ReactApp/iphone.jpg"
          title="Iphone 11 Pro Max"
         price="1100.00"
           />
        </div>
    </div>
      

      



      
       
   
    
  
  );
}

export default App;
