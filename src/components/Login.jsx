import React from "react";

export default function Login() {
  return (
    <div className="container mt-5">
      <form className="p-4 border rounded">
        <h3 className="text-center">Đăng Nhập</h3>

        <div className="my-3">
          <input
            placeholder="Username"
            className="form-control"
            type="text"
          />
        </div>

        <div className="my-3">
          <input
            placeholder="Password"
            className="form-control"
            type="password"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-primary">
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
}