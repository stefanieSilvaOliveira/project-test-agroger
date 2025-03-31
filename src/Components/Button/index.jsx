import React, { useState } from 'react';
import axios from 'axios';
import List from '../List';
import BaseButton from '../BaseButton/BaseButton';
import '../Button/styles.scss';


function Button(className = "", buttonText = "NOVA SESSÃO DE PROVA" ) {
  const [items, setItems] = useState([]); // armazenando os itens
  const [loading, setLoading] = useState(false); // controlando o estado de carregamento
  const [error, setError] = useState(null); // Estado de erro
  const [showList, setShowList] = useState(false); // Estado para controlar a exibição da lista

  // Função para buscar os itens da API
  const fetchItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("http://localhost:5000/items"); 
      console.log("Dados recebidos da API:", response.data);

      // Verificação para pegar o array correto
      if (Array.isArray(response.data)) {
        setItems(response.data);
      } else if (response.data.items && Array.isArray(response.data.items)) {
        setItems(response.data.items);
      } else {
        throw new Error("Formato inesperado da API.");
      }

      setShowList(true); // Exibe a lista após carregar os dados

    } catch (error) {
      console.error("Erro ao carregar os itens:", error);
      setError("Erro ao carregar os itens. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-button">
      <BaseButton
        className={`session-button ${className}`}
        buttonText={loading ? "Carregando..." : buttonText}
        onClick={fetchItems}
      />
      {loading ? "Carregando..." : buttonText}
      
        
      {error && <p className="error-message">{error}</p>}

      {/* Exibe a lista apenas se o botão foi clicado e os dados foram carregados */}
      {showList && items.length > 0 && <List items={items} />}
    </div>
  );
}

export default Button;
