import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    
    <div>
      <header>
        <div className="row frame-header">
          <div className="row">
            <div className="col-md-4 text-center">
              HOTLINE: 0903456781
            </div>

            <div className="col-md-4"></div>

            <div className="col-md-4 text-center">
              <Link to="/login">
                <button className="btn btn-danger">
                  Đăng Nhập
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">

            <Link className="navbar-brand" to="/">
              <img
                src="./img/logo dth.png"
                alt="logo"
                style={{ width: "50px" }}
              />
            </Link>

            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/index">
                    Trang Chủ
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/gioithieu">
                    Giới Thiệu
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sanpham">
                    Sản Phẩm
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Liên Hệ
                  </Link>
                </li>

              </ul>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                />
                <button className="btn btn-primary">
                  Search
                </button>
              </form>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}