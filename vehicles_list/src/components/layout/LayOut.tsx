import React, { ReactNode } from "react";
import SearchBar from "../searchBar/SearchBar";

interface LayoutProps {
  children: ReactNode;
  Searchkey: string;
  setSearchkey: any;
  itemsCount: number;
  priceRange: string[];
  setPriceRange: any;
}

const LayOut: React.FC<LayoutProps> = ({
  children,
  Searchkey,
  setSearchkey,
  itemsCount,
  priceRange,
  setPriceRange,
}) => {
  return (
    <main className="container">
      <SearchBar
        itemsCount={itemsCount}
        Searchkey={Searchkey}
        setSearchkey={setSearchkey}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div>{children}</div>
    </main>
  );
};

export default LayOut;
