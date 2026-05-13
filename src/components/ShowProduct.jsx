import { Link } from "react-router-dom";
import products from "../data/products";

export default function SPKhuyenMai() {
  const spkm = products.filter(sp => sp.loai === "SPKM");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm khuyến mãi</h2>

        {spkm.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card p-3">
              <img
                className="card-img-top"
               src={`/img/${sp.hinh}`}
                alt={sp.ten}
              />
              <div className="card-body">
                <h4 className="card-title">{sp.ten}</h4>
                <p className="card-text">
                  {sp.gia.toLocaleString()}đ
                </p>

                <Link
                  to={`/Detail/${sp.id}`}
                  className="btn btn-primary"
                >
                  Xem chi tiết
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SPBanChay() {
   const spbc = products.filter(sp => sp.loai === "SPBC");
  return (
     <div className="container">
    <div className="row">
      <h2>Sản phẩm bán chạy</h2>

      {spbc.map(sp => (
        <div className="col-md-3" key={sp.id}>
          <div className="card p-3">
            <img
              className="card-img-top"
              src={`./img/${sp.hinh}`}
              alt={sp.ten}
            />
            <div className="card-body">
              <h4 className="card-title">{sp.ten}</h4>
             <p className="card-text">
                  {sp.gia.toLocaleString()}đ
                </p>

                <Link
                  to={`/Detail/${sp.id}`}
                  className="btn btn-primary"
                >
                  Xem chi tiết
                </Link>
            </div>
          </div>
        </div>
        
      ))}

    </div>
    </div>
  )
}

export function SPHot() {
  const spht = products.filter(sp => sp.loai === "SPH");

  return (
    <div className="container">
    <div className="row">
      <h2>Sản phẩm hot</h2>

      {spht.map(sp => (
        <div className="col-md-3" key={sp.id}>
          <div className="card p-3">
            <img
              className="card-img-top"
              src={`./img/${sp.hinh}`}
              alt={sp.ten}
            />
            <div className="card-body">
              <h4 className="card-title">{sp.ten}</h4>
             <p className="card-text">
                  {sp.gia.toLocaleString()}đ
                </p>

                <Link
                  to={`/Detail/${sp.id}`}
                  className="btn btn-primary"
                >
                  Xem chi tiết
                </Link>
            </div>
          </div>
        </div>
        
      ))}

    </div>
    </div>
  );
}