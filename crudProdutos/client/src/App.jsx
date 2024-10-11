import React, { useState } from 'react';
import api from './service/index';
import EditProduct from './components/editProduct';
import ProductList from './components/productList';
import AddProduct from './components/addProduct';


const App = () => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDetails =  async (id) => {
    
  };

  

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/produtos/${id}`);
      window.location.reload(); // Atualiza a lista de usuários
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleProductAdded = () => {
    window.location.reload(); // Atualiza a lista de usuários após adição
  };

  const handleProductUpdated = () => {
    setEditingProduct(null);
    window.location.reload(); // Atualiza a lista de usuários após edição
  };

  return (
    <div>

      
      <h1> Sistema de cadastro de produtos</h1>
      {editingProduct ? (
        <EditProduct product={editingProduct} onProductUpdate={handleProductUpdated} />
      ) : (
        <AddProduct onProductAdded={handleProductAdded} />
      )}
      <ProductList onEdit={handleEdit} onDelete={handleDelete} onDetails={handleDetails} />
    </div>
  );
};

export default App;
