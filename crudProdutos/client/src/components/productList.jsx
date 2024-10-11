import React, { useState, useEffect } from 'react';
import api from '../service/index';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ProductList = ({ onDetails, onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await api.get('/produtos');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  return (
    <>
       <div>
      <h2>Lista de Produtos</h2>
      <table>
        <tr>
          <th> Nome </th>
          <th> Descrição </th>
          <th> Preço </th>
          <th>Quantidade</th>
          <th> Mais </th>
          <th> Editar </th>
          <th> Deletar </th>     
        </tr>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td> {product.quantity}</td>
            <td> <button className='action-button details-button' onClick={onDetails(product)}> Ver detalhes do produto</button></td>
            <td> <button className='action-button edit-button' onClick={() => onEdit(product)}>Editar produto </button> </td>
            <td> <button className='action-button delete-button' onClick={() => onDelete(product.id)}>Excluir produto</button> </td>          
          </tr>
        ))}       
      </table>
      </div>
          
      

    </>
 
  );
};


export default ProductList;
