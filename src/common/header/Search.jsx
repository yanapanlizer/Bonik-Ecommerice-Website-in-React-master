import React from "react";
import logo from "../../components/assets/images/Tom.png";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';

const Search = ({ CartItem }) => {
  // fixed Header
  let user = Cookies.get('username');
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const unlock = () => {
    if (user) {
      return { visibility: "active" }
    } else {
      return { visibility: "hidden" }
    }
  }

  const logout = () => {
    Cookies.remove('username');
    window.location.reload();
  }

  return (
    <>
      <div style={{ color: "white", marginLeft: "1250px", position: "absolute", marginTop: "65px" }}>
        {user ? (
          <span style={{ color: "blue" }}>Username: {user}</span>
        ) : null}
        {user ? (
          <Button
            style={{ marginLeft: "10px", backgroundColor: "black", color: "white", marginTop: "15px" }}
            onClick={logout}
          >
            Logout
          </Button>
        ) : null}
      </div>

      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' style={{ width: '60px' }} />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            {!user ? (
              <Link to='/login'>
                <i className='fa fa-user icon-circle'></i>
              </Link>
            ) : null}

            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
