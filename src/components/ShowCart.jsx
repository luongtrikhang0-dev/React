import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CartTable() {
  const [cart, setCart] = useState([]);

  // 1. Lấy dữ liệu từ localStorage khi load trang
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // 2. Thay đổi số lượng sản phẩm trực tiếp
  const handleQuantityChange = (id, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (isNaN(quantity) || quantity < 1) return; // Không cho phép nhỏ hơn 1

    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    );

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // 3. Xóa sản phẩm khỏi giỏ hàng
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // 4. Tính tổng tiền hàng (Tạm tính)
  const totalMoney = cart.reduce(
    (sum, item) => sum + item.gia * item.quantity,
    0
  );

  // Phí vận chuyển cố định (Bằng 0 nếu giỏ hàng trống)
  const shippingFee = cart.length > 0 ? 30000 : 0;

  return (
    <div
      className="container mt-4 mb-5"
      style={{
        background: "#f5efe6",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {/* Tiêu đề */}
      <h2
        className="text-center mb-4"
        style={{
          color: "#5a3e2b",
          fontWeight: "bold",
        }}
      >
        GIỎ HÀNG CỦA BẠN
      </h2>

      <div className="row">
        {/* Bên trái: Danh sách sản phẩm trong giỏ */}
        <div className="col-md-8">
          <table className="table table-bordered align-middle text-center bg-white shadow-sm">
            <thead
              style={{
                background: "#6f4e37",
                color: "white",
              }}
            >
              <tr>
                <th>Hình</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Xóa</th>
              </tr>
            </thead>

            <tbody>
              {cart.length > 0 ? (
                cart.map((item) => (
                  <tr key={item.id}>
                    {/* Hình ảnh */}
                    <td>
                      <img
                        src={`/img/${item.hinh}`} // Đường dẫn ảnh lấy từ code cũ của bạn
                        alt={item.tensp}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    {/* Tên sản phẩm */}
                    <td className="fw-bold" style={{ color: "#5a3e2b" }}>
                      {item.tensp}
                    </td>

                    {/* Đơn giá */}
                    <td>{item.gia.toLocaleString()}đ</td>

                    {/* Số lượng (Có thể tăng giảm trực tiếp) */}
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="form-control text-center"
                        style={{
                          width: "70px",
                          margin: "auto",
                        }}
                      />
                    </td>

                    {/* Thành tiền */}
                    <td className="fw-bold">
                      {(item.gia * item.quantity).toLocaleString()}đ
                    </td>

                    {/* Nút Xóa */}
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-muted">
                    Giỏ hàng trống. Hãy tiếp tục mua sắm nhé!
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Các nút điều hướng phía dưới bảng */}
          <div className="d-flex justify-content-between mt-3">
            <Link
              to="/product"
              className="btn"
              style={{
                background: "#6f4e37",
                color: "white",
              }}
            >
              ← Tiếp tục mua
            </Link>
          </div>
        </div>

        {/* Bên phải: Khối Thanh toán & Voucher */}
        <div className="col-md-4">
          {/* Box Thành Tiền */}
          <div className="card shadow-sm mb-4" style={{ border: "none" }}>
            <div
              className="card-header text-white"
              style={{
                background: "#6f4e37",
                fontWeight: "bold",
              }}
            >
              THANH TOÁN
            </div>

            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span>Tạm tính:</span>
                <strong>{totalMoney.toLocaleString()}đ</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Phí vận chuyển:</span>
                <strong>{shippingFee.toLocaleString()}đ</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5>Tổng cộng:</h5>
                <h5 style={{ color: "#dc3545", fontWeight: "bold" }}>
                  {(totalMoney + shippingFee).toLocaleString()}đ
                </h5>
              </div>

              <button
                className="btn w-100"
                disabled={cart.length === 0} // Vô hiệu hóa nút nếu không có hàng
                style={{
                  background: cart.length > 0 ? "#c89b6d" : "#6c757d",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                TIẾN HÀNH THANH TOÁN
              </button>
            </div>
          </div>

          {/* Box Mã Giảm Giá */}
          <div className="card shadow-sm" style={{ border: "none" }}>
            <div
              className="card-header text-white"
              style={{
                background: "#6f4e37",
                fontWeight: "bold",
              }}
            >
              MÃ GIẢM GIÁ
            </div>

            <div className="card-body">
              <input
                type="text"
                placeholder="Nhập mã giảm giá"
                className="form-control mb-3"
              />
              <button className="btn btn-dark w-100" disabled={cart.length === 0}>
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}