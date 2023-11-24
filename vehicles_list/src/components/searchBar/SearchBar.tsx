import Link from "next/link";
import React, { useState } from "react";
import style from "./SearchBar.module.scss";
import { MdSearch } from "react-icons/md";
import { Form } from "react-bootstrap";

interface SearchPropsWords {
  setSearchkey: any;
  Searchkey: string;
  itemsCount: number;
  priceRange: string[];
  setPriceRange: any;
}

const SearchBar: React.FC<SearchPropsWords> = ({
  Searchkey,
  setSearchkey,
  itemsCount,
  priceRange,
  setPriceRange,
}) => {

  const [priceSearchBar, setPriceSearchBar] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg  ${style.search_container}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="title">
            <div>
              <p className="fw-bold">Vehicles & Machinery</p>
            </div>
            <div>
              <p className="fs-5">
                <span className="text-danger">{itemsCount}</span> Available
                Items
              </p>
            </div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="d-flex flex-wrap" role="search">

         {
          !priceSearchBar && (
            <div className={`${style.searchContainer} my-2`}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                onChange={(e) => {
                  setSearchkey(e.target.value);
                }}
              />
              <span className={style.searchIcon}>
                <MdSearch size={30} />
              </span>
            </div>
          </div>
          )
         }

            {priceSearchBar && (
              <Form.Group>
              <Form.Label>Price ' {priceRange} ' AED</Form.Label>
              <Form.Range
                min={100}
                max={220000}
                value={priceRange}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPriceRange(e.target.value.split(","))
                }
              />
            </Form.Group>
            )}
            <div className="my-2">
              <button
                onClick={() => {
                  setPriceSearchBar(!priceSearchBar)
                }}
                className="btn btn-outline-danger ms-2"
                type="submit"
              >
                Price
              </button>
              <button
                onClick={() => {
                  setSearchkey("Years");
                }}
                className="btn btn-outline-danger ms-2 me-2"
                type="submit"
              >
                Years
              </button>
              <button
                onClick={() => {
                  setSearchkey("End Data");
                }}
                className="btn btn-outline-danger me-2"
                type="submit"
              >
                End Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
