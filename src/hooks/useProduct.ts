// useProduct.ts
import { useContext } from 'react';

import { ProductContext, ProductContextType } from '../providers/ProductProvider';

export function useProduct(): ProductContextType {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
}