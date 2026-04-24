

export default function GioiThieu() {
  return (

     <div className="container my-4">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a className="text-decoration-none" href="index.html">
          Trang chủ
        </a>
      </li>
      <li className="breadcrumb-item active">Giới thiệu</li>
    </ol>
  </nav>
  <div className="about-banner mb-5 shadow">
    <div className="text-center">
      <h1 className="fw-bold">CHÚNG TÔI LÀ KHANGKHANG</h1>
      <p className="lead">
        Hệ thống bán lẻ điện thoại uy tín hàng đầu Việt Nam
      </p>
    </div>
  </div>
  <div className="row align-items-center section-padding">
    <div className="col-md-6">
      <h2 className="fw-bold mb-4 text-primary">Câu Chuyện Của Chúng Tôi</h2>
      <p>
        Được thành lập từ năm 2015, <strong>Điện thoại KhangKhang</strong> bắt
        đầu từ một cửa hàng nhỏ tại TP.HCM với niềm đam mê công nghệ cháy bỏng.
        Chúng tôi hiểu rằng chiếc điện thoại không chỉ là thiết bị liên lạc, mà
        còn là người bạn đồng hành trong cuộc sống và công việc.
      </p>
      <p>
        Trải qua hơn 10 năm phát triển, chúng tôi tự hào đã phục vụ hơn 1 triệu
        khách hàng, cung cấp những sản phẩm iPhone, Samsung, OPPO chính hãng với
        mức giá cạnh tranh nhất thị trường.
      </p>
    </div>
    <div className="col-md-6">
      <img
        alt="Cửa hàng"
        className="img-fluid rounded-4 shadow"
        src="https://picsum.photos/id/1/600/400"
      />
    </div>
  </div>
  <div className="row g-4 section-padding">
    <div className="col-md-4">
      <div className="p-4 vision-box shadow-sm h-100">
        <h4 className="fw-bold">
          <i className="fa-solid fa-bullseye text-primary me-2" />
          Sứ Mệnh
        </h4>
        <p className="text-muted">
          Mang công nghệ hiện đại đến gần hơn với mọi người dân Việt Nam bằng
          dịch vụ tận tâm và giá thành hợp lý.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 vision-box shadow-sm h-100">
        <h4 className="fw-bold">
          <i className="fa-solid fa-eye text-primary me-2" />
          Tầm Nhìn
        </h4>
        <p className="text-muted">
          Trở thành hệ thống bán lẻ thiết bị di động số 1 về chất lượng dịch vụ
          hậu mãi tại khu vực miền Nam vào năm 2030.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 vision-box shadow-sm h-100">
        <h4 className="fw-bold">
          <i className="fa-solid fa-heart text-primary me-2" />
          Giá Trị Cốt Lõi
        </h4>
        <p className="text-muted">
          Trung thực với khách hàng - Tận tâm trong dịch vụ - Không ngừng đổi
          mới để dẫn đầu xu hướng.
        </p>
      </div>
    </div>
  </div>
  <div className="row text-center section-padding bg-white rounded-4 shadow-sm my-5 mx-1">
    <div className="col-md-3">
      <div className="stat-card p-3">
        <i className="fa-solid fa-shop stat-icon" />
        <h3 className="fw-bold">15+</h3>
        <p className="text-muted">Chi nhánh toàn quốc</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="stat-card p-3">
        <i className="fa-solid fa-users stat-icon" />
        <h3 className="fw-bold">500k+</h3>
        <p className="text-muted">Khách hàng tin dùng</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="stat-card p-3">
        <i className="fa-solid fa-award stat-icon" />
        <h3 className="fw-bold">10+</h3>
        <p className="text-muted">Năm kinh nghiệm</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="stat-card p-3">
        <i className="fa-solid fa-truck-fast stat-icon" />
        <h3 className="fw-bold">2H</h3>
        <p className="text-muted">Giao hàng siêu tốc</p>
      </div>
    </div>
  </div>
</div>
  
  );
}

