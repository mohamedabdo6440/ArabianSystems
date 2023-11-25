import React, { ReactNode } from "react";
import SearchBar from "../searchBar/SearchBar";

interface LayoutProps {
  children: ReactNode;
  itemsCount: number;
  isLoading: boolean;
}

const LayOut: React.FC<LayoutProps> = ({
  children,
  itemsCount,
  isLoading,
}) => {
  return (
    <main className="container">
      <SearchBar
        itemsCount={itemsCount}
        isLoading={isLoading}
      />
      <div>{children}</div>
    </main>
  );
};

export default LayOut;
