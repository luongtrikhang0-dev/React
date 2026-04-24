export default function Footer() {
  return (
  <footer className="bg-dark text-white mt-5 pt-4 pb-3">
  <div className="container">
    <div className="row">
      <div className="col-md-4 text-center p-4">
        <h5>CỬA HÀNG THỜI TRANG MOINICO</h5>
        <p>Chuyên cung cấp các sản phẩm thời trang nam cao cấp.</p>
        <p>
          <b>Hotline:</b> 0123456789
        </p>
        <p>
          <b>Email:</b> monicoshop@gmail.com
        </p>
      </div>
      <div className="col-md-4 text-center p-4">
        <h5>ĐỊA CHỈ</h5>
        <p>
          Vincom Center Đồng Khởi/72 Lê Thánh Tôn, Phường, Quận 1, Thành phố Hồ
          Chí Minh, Việt Nam
        </p>
        <p>Giờ mở cửa: 8:00 - 22:00</p>
      </div>
      <div className="col-md-4 text-center p-4">
        <h5>BẢN ĐỒ</h5>
        <iframe
          allowFullScreen
          height="200"
          loading="lazy"
          src="https://www.google.com/maps?q=10.7769,106.7009&z=15&output=embed"
          style={{
            border: "0",
          }}
          width="100%"></iframe>
      </div>
    </div>
    <hr className="bg-light" />
    <div className="text-center">
      <p className="mb-0">
        {" "}
        2026 Cửa Hàng Thời Trang MONICO. Welcome everyone.
      </p>
    </div>
  </div>
</footer>
  );
}