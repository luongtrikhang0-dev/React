import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function Show_detail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Không tìm thấy sản phẩm</h2>;
  }

  const related = products.filter(
    (p) => p.danhMuc === product.danhMuc && p.id !== product.id
  );

  return (
    <main className="container mt-5">
      <div className="row g-4">
        <div className="col-lg-7">
          <img
            src={`/img/${product.hinh}`}
            className="img-fluid"
            alt={product.ten}
          />
        </div>

        <div className="col-lg-5">
          <h1 className="fw-bold">{product.ten}</h1>
          <p className="text-muted">Mã SP: SP-{product.id}</p>

          <h3 className="text-danger">
            {product.gia.toLocaleString()}₫
          </h3>

          <p>{product.moTa}</p>

          <button className="btn btn-danger me-2">MUA NGAY</button>
          <button className="btn btn-outline-primary">
            THÊM GIỎ
          </button>
        </div>
      </div>

      {/* sản phẩm tương tự */}
      <div className="mt-5">
        <h3 className="text-center mb-4">Sản phẩm tương tự</h3>

        <div className="row">
          {related.map((p) => (
            <div className="col-md-4" key={p.id}>
              <div className="card text-center p-3">
                <img
                  src={`/img/${p.hinh}`}
                  className="card-img-top"
                  alt={p.ten}
                />

                <div className="card-body">
                  <h5>{p.ten}</h5>
                  <p className="text-danger">
                    {p.gia.toLocaleString()}₫
                  </p>

                  <Link
                    to={`/Detail/${p.id}`}
                    className="btn btn-outline-primary"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}