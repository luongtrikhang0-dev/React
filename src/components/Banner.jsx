export default function Banner() {
    return(

      <div className="container my-4">
  <div className="row g-4">
    <div className="col-md-3">
      <div className="sidebar-danhmuc">
        <h3>
          <i className="fa-solid fa-bars me-2" />
          DANH MỤC
        </h3>
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-mobile-screen-button me-2" />
              Điện Thoại
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-laptop me-2" />
              Laptop & Tablet
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-headphones me-2" />
              Phụ Kiện Chính Hãng
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-clock me-2" />
              Đồng Hồ Thông Minh
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-rotate me-2" />
              Máy Cũ Giá Rẻ
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-md-9">
      <div
        className="carousel slide shadow-sm"
        data-bs-ride="carousel"
        id="demo">
        <div className="carousel-indicators">
          <button
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#demo"
            type="button"
          />
          <button data-bs-slide-to="1" data-bs-target="#demo" type="button" />
          <button data-bs-slide-to="2" data-bs-target="#demo" type="button" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="Banner 1"
              className="d-block w-100"
              src="https://picsum.photos/id/119/1000/400"
            />
          </div>
          <div className="carousel-item">
            <img
              alt="Banner 2"
              className="d-block w-100"
              src="https://picsum.photos/id/160/1000/400"
            />
          </div>
          <div className="carousel-item">
            <img
              alt="Banner 3"
              className="d-block w-100"
              src="https://picsum.photos/id/201/1000/400"
            />
          </div>
        </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#demo"
            type="button">
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#demo"
            type="button">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
        </div>
  </div>
</div>
    );
}