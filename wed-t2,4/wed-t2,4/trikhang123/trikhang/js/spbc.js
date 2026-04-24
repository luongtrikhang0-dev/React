for (let i = 0; i <sanpham.length; i++) {
    document.getElementById("spbc").innerHTML +=
`<div class="col-md-4 col-6 mb-4">
<div class="card p-2 text-center">
  <img src="./img/${sanpham[i].hinh}" class="card-img-top" alt="iPhone 15">
  <div class="card-body">
    <h5 class="card-title">${sanpham[i].ten}</h5>
    <p class="price">${sanpham[i].gia}</p>
    <button class="btn btn-outline-primary btn-sm w-100 rounded-pill">Mua Ngay</button>
  </div>
</div>
</div>`
}