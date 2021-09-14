import React from 'react'
import { Link } from 'react-router-dom';
const Header = ({ filterArticles, searchedData }) => {
  return (

    <nav className="navbar  navbar-expand-lg navbar-dark app-bg stickyNav" >
      <div className="container-fluid">
        <a className="navbar-brand " style={{ color: "black" }} href="#" >News Alert</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Top News</a> */}
              <Link className="nav-link active" aria-current="page" to="/top" >Top News</Link>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Sport News</a> */}
              <Link className="nav-link active" aria-current="page" to="/sport" >Social News</Link>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Tech News</a> */}
              <Link className="nav-link active" aria-current="page" to="/tech" >Tech News</Link>
            </li>
            <li className="nav-item">

              {/* <a className="nav-link active" aria-current="page" href="#">Specific Country News</a> */}
              <Link className="nav-link active" aria-current="page" to="/contry" >Country News</Link>
            </li>

          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={filterArticles} aria-label="Search" />
            <button className="btn btn-outline-success " onClick={searchedData}>Search</button>
          </form>
        </div>
      </div>
    </nav>

  );
}
export default Header;