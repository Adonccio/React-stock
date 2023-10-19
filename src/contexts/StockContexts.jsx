import { createContext, useState } from "react";
import useStock from "../hooks/useStock";

export const StockContext = createContext({});

const { item } = useStock

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('stocked-items')
    if (!storedItems ) {return []}
    else{const items = JSON.parse(storedItems)
    return items}
  })

    const addItems = (newItem) => {
      setItems((state) => {
        const addedItems = [newItem, ...state];
        localStorage.setItem("stocked-items", JSON.stringify(addedItems)); // Mantenha o JSON.stringify aqui
        return addedItems;
      });

    };

    const deleteItem = (itemId) => {
      setItems(state => {
          const updatedItems = state.filter(item => item.id !== itemId)
      localStorage.setItem('stocked-items', JSON.stringify(updatedItems))
      return updatedItems
        }
      )
    }

    
    const updateItem = (itemId, novo) =>
    {
        setItems (
            state =>
            { const itemIndex = state.findIndex(item => item.id === +itemId)
                const newArray = [...state]
                Object.assign(newArray[itemIndex], novo)
                localStorage.setItem('stocked-items', JSON.stringify(newArray))
                return newArray
              }
        )
    }

    const findItem = (itemid) => {
     return items.find(item=> item.id=== +itemid)
  }
  

  const valores = {
    items,
    addItems,
    findItem,
    deleteItem, 
    updateItem
  };

  return (
    <StockContext.Provider value={valores}>
      {children}
    </StockContext.Provider>
  );
}
