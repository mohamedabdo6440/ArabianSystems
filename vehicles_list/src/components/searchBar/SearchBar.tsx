import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.scss";
import { MdSearch } from "react-icons/md";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";

interface SearchPropsWords {
  itemsCount: number;
}

const SearchBar: React.FC<SearchPropsWords> = ({
  itemsCount,
}) => {

  const router = useRouter();
  const { query } = router;


const { q: searchTerm, orderby: orderBy, isDesc } = query;

const [search, setSearch] = useState(searchTerm || '');
const [sortBy, setSortBy] = useState(orderBy || '');
const [sortDesc, setSortDesc] = useState(isDesc === '');

const updateURL = () => {
  if (search) query.q = search;
  if (sortBy) query.orderby = sortBy;
  if (sortDesc) query.isDesc = 'true';

  router.push({
    pathname: '/',
    query,
  });
};

useEffect(()=>{
  updateURL();
},[search , sortBy , sortDesc])

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  if (value.length >= 2) {
    setSearch(value);
    updateURL();
  }
};

const handleSortChange = (value: string) => {
  setSortBy(value);
  setSortDesc(!sortDesc);
  updateURL();
};

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
            <div className={`${style.searchContainer} my-2`}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                onChange={handleSearchChange}
              />
              <span className={style.searchIcon}>
                <MdSearch size={30} />
              </span>
            </div>
          </div>
          
            <div className="my-2">
              <button
                onClick={() => handleSortChange('price')}
                className="btn btn-outline-danger ms-2"
                type="submit"
              >
                Price
              </button>
              <button
                onClick={() => handleSortChange('year')}
                className="btn btn-outline-danger ms-2 me-2"
                type="submit"
              >
                Years
              </button>
              <button
                onClick={() => handleSortChange('endTime')}
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
