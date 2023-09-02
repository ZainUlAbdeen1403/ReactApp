import logo from './logo.svg';
import GroceryList from './Grocery';
import Apple from './Apple'
import ProductCard from './ProductCard';
import Weather from './Weather'
import img1 from './assets/hp.jpg'
import img2 from './assets/iphone.jpg'
import img3 from './assets/product-image.jpg'

import './App.css';


function App() {
  return (
    <div>
         
       
        
      


        <Weather />

     
        <div className="product-card-container">
       <ProductCard
          image={img1}
          title="Nikon-850c"
         price="299.99"
           />
           <ProductCard
          image={img2}
          title="HP G6"
         price="599.99"
           />
           <ProductCard
          image={img3}
          title="Iphone 11 Pro Max"
         price="1100.00"
           />
        </div>
    </div>
      

      



      
       
   
    
  
  );
}

export default App;
