import React, { ReactNode } from "react";
import SearchBar from "../searchBar/SearchBar";

interface LayoutProps {
  children: ReactNode;
  itemsCount: number;
}

const LayOut: React.FC<LayoutProps> = ({
  children,
  itemsCount,
}) => {
  return (
    <main className="container">
      <SearchBar
        itemsCount={itemsCount}
      />
      <div>{children}</div>
    </main>
  );
};

export default LayOut;
