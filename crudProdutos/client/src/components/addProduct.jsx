import React, { useState } from 'react';
import api from '../service/index';

const AddProduct = ({ onProductAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await api.post('/produtos', { name, description, price, quantity });
      setName('');
      setDescription('');
      setPrice(0);
      setQuantity(0);
      onProductAdded();
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <div>
      <h2> Deseja adicionar um produto ao estoque? Digite o nome, a descrição, preço e a quantidade desejada!</h2>
      <form className='form-product' onSubmit={handleAddProduct}>
        <div className='form-product-container'>
          <label htmlFor="name"> Nome </label>
          <input name='name' type="text" placeholder="Digite o nome do produto..." value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className='form-product-container'>
          <label htmlFor="description"> Descrição </label>
          <input name='description' type="text" placeholder="Digite a descrição do produto..." value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className='form-product-container'>
          <label htmlFor="price"> Preço </label>
          <input name='price' type="number" placeholder="Digite o preço do produto..." value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
      
        <div className='form-product-container'>
          <label htmlFor="price"> Quantidade </label>
          <input name='price' type="number" placeholder="Digite a quantidade do seu produto..."   value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button type="submit">Adicionar produto</button>
      </form>
    </div>
  );
};

export default AddProduct ;
