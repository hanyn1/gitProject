
import './HomeClient.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import heart from '../assets/heart.png';
import SideBar from './SideBar';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useCart } from './CartContext';
import { useState, useEffect } from 'react';

export default function HomeClient() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { addToCart, cart } = useCart(); // Access addToCart function and cart from CartContext
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getProduit/produit');
        const allProducts = response.data;

        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      icon: 'success',
      title: 'Product Registered',
      text: 'Product added to your cart',
    });
  };

  useEffect(() => {
    console.log('Cart after adding:', cart);
    // Additional actions if needed
  }, [cart]);

  return (
    <div className='cbcb'>
      <img src={menu} alt='menu' className='me' onClick={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <img src={logo} alt="logo" className="lo" />
      <div className="row row-cols-1 row-cols-md-3 g-2">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card" style={{ top: "30px", left: "150px", width: "250px" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Brand: {product.brand}</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: {product.price}$</p>
                <p className="card-text"><span style={{ color: '#C7E9B0' }}>Discount: {product.discount}$</span></p>
                <img className='hearty'  alt='heart' src={heart} onClick={() => handleAddToCart(product)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
