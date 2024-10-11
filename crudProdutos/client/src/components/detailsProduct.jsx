import React, { useState, useEffect } from 'react';
import api from '../service/index';

const detailProduct = ({ product, onProductDetail }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
  }, [product]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/produtos/${product.id}`, { name, description, price, quantity });
      onProductUpdate();
    } catch (error) {
      console.error('Erro ao atualizar prodtuo:', error);
    }
  };

  return (
    <div>
      <h2> Produto </h2>
        <p> produtinho </p>

        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td> {product.quantity}</td>
            <td> <button className='action-button details-button' onClick={onDetails(product.id)}> Ver detalhes do produto</button></td>
            <td> <button className='action-button edit-button' onClick={() => onEdit(product)}>Editar produto </button> </td>
            <td> <button className='action-button delete-button' onClick={() => onDelete(product.id)}>Excluir produto</button> </td>          
          </tr>
        ))}       
    </div>
  );
};

export default detailProduct;
