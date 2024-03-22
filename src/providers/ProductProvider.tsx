import { ReactNode, createContext, useState } from 'react';

import { ProductProps } from '../components/Product';

export interface ProductContextType {
    selectedProduct: ProductProps | null;
    setSelectedProduct: React.Dispatch<React.SetStateAction<ProductProps | null>>;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps): JSX.Element {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  const value = { selectedProduct, setSelectedProduct };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}