// Ví dụ: Truyền nhiều loại dữ liệu qua Props (cùng file)

export default function TinTuc() {
  return (
    <div>
      <div className="row">
  <div className="col-md-9  frame-danhmuc g-0">
    <div className="carousel slide" data-bs-ride="carousel" id="demo">
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
      <div className="carousel-inner banner">
        <div className="carousel-item active">
          <img
            alt="Los Angeles"
            src="./img/tron-16-nam-ngay-steve-jobs-gioi-thieu-chiec-iphone-dau-tien1-1758446553555-1758446554222963128354-1758498391542-1758498391782984006497.jpg"
          />
        </div>
        <div className="carousel-item">
          <img
            alt="Chicago"
            src="./img/Cung-nhin-lai-thoi-diem-chiec-iPhone-dau-tien-xuat-hien-7.jpg"
          />
        </div>
        <div className="carousel-item">
          <img
            alt="New York"
            src="./img/1-1697075491344736287374-96014369655369720680184-08190416661556908129120.webp"
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
  <div className="col-md-3 frame-danhmuc text-center">
    <h3>TIN TỨC</h3>
    <ul>
      <li>
        TIN TỨC VỀ IPHONE
        <ul>
          <p>
            iPhone luôn là dòng điện thoại cao cấp của Apple với thiết kế sang
            trọng và hiệu năng mạnh mẽ. Các phiên bản mới liên tục được cải tiến
            về camera, pin và công nghệ nhằm mang lại trải nghiệm tốt nhất cho
            người dùng.
          </p>
        </ul>
      </li>
      <li>
        ĐIỆN THOẠI OPPO
        <ul>
          <p>
            OPPO nổi bật với thiết kế thời trang và công nghệ camera tiên tiến,
            phù hợp với giới trẻ. Các dòng máy mới của OPPO còn được cải thiện
            mạnh về hiệu năng và thời lượng pin.
          </p>
        </ul>
      </li>
    </ul>
  </div>
  <div className="row">
    <div className="row mt-3">
      <h3>TIN TỨC HOT</h3>
    </div>
    <div className="col-md-6">
      {" "}
      <img
        alt=""
        src="./img/tron-16-nam-ngay-steve-jobs-gioi-thieu-chiec-iphone-dau-tien1-1758446553555-1758446554222963128354-1758498391542-1758498391782984006497.jpg"
        style={{
          width: "600px",
        }}
      />
    </div>
    <div className="col-md-6">
      <p>
        iPhone tiếp tục khẳng định vị thế với thiết kế đẳng cấp và hiệu năng
        vượt trội. Các dòng iPhone mới mang đến nhiều nâng cấp ấn tượng về
        camera và công nghệ. iPhone luôn là dòng điện thoại cao cấp của Apple
        với thiết kế sang trọng và hiệu năng mạnh mẽ. Các phiên bản mới liên tục
        được cải tiến về camera, pin và công nghệ nhằm mang lại trải nghiệm tốt
        nhất cho người dùng.
      </p>
      <img
        alt=""
        src="./img/ip/ip 11.jpg"
        style={{
          width: "200px",
        }}
      />
      <img
        alt=""
        src="./img/ip/ip 13 pm.jpeg"
        style={{
          width: "200px",
        }}
      />
      <img
        alt=""
        src="./img/ip/ip 14 pm.jpg"
        style={{
          width: "200px",
        }}
      />
    </div>
  </div>
</div>
    </div>
  );
}

