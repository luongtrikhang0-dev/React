import { Link } from "react-router-dom";
import products from "../data/products";

export default function Cart() {
    // Demo dữ liệu giỏ hàng
    const cart = products.slice(0, 3);

    // Tổng tiền
    const total = cart.reduce((sum, sp) => sum + sp.gia, 0);

    return (
        <div
            className="container mt-4 mb-5"
            style={{
                background: "#f5efe6",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            {/* Title */}
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
                {/* Left */}
                <div className="col-md-8">
                    <table className="table table-bordered align-middle text-center">
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
                            {cart.map((sp) => (
                                <tr key={sp.id}>
                                    <td>
                                        <img
                                            src={`/img/${sp.hinh}`}
                                            alt={sp.tensp}
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </td>

                                    <td>{sp.tensp}</td>

                                    <td>{sp.gia.toLocaleString()}đ</td>

                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            defaultValue="1"
                                            className="form-control"
                                            style={{
                                                width: "70px",
                                                margin: "auto",
}}
                                        />
                                    </td>

                                    <td>{sp.gia.toLocaleString()}đ</td>

                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Button */}
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

                        <button className="btn btn-success">
                            Cập nhật giỏ hàng
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="col-md-4">
                    <div
                        className="card shadow"
                        style={{
                            border: "none",
                        }}
                    >
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
                                <strong>
                                    {total.toLocaleString()}đ
                                </strong>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span>Phí vận chuyển:</span>
                                <strong>30,000đ</strong>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between mb-4">
                                <h5>Tổng cộng:</h5>

                                <h5
                                    style={{
                                        color: "#dc3545",
                                    }}
                                >
                                    {(total + 30000).toLocaleString()}đ
</h5>
                            </div>

                            <button
                                className="btn w-100"
                                style={{
                                    background: "#c89b6d",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                TIẾN HÀNH THANH TOÁN
                            </button>
                        </div>
                    </div>

                    {/* Voucher */}
                    <div
                        className="card mt-4 shadow"
                        style={{
                            border: "none",
                        }}
                    >
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

                            <button className="btn btn-dark w-100">
                                Áp dụng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

