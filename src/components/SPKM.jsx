export default function SPKM() {


    const sp = [
        { id: 1, ten: " HV1 ", hinh: "1.jpg", mota: "mô tả 0123456", gia: 1000 },
        { id: 2, ten: " HV2 ", hinh: "2.jpg", mota: "mô tả 0123456", gia: 1000 },
        { id: 3, ten: " HV3 ", hinh: "3.jpg", mota: "mô tả 0123456", gia: 1000 },
        { id: 4, ten: " HV4 ", hinh: "4.jpg", mota: "mô tả 0123456", gia: 1000 },
    ];

    return (
        <div className="row">
            {
                sp.map((item) => (
                    <div className="col-md-3 " key={item.id}>
                        <div className="card p-3">
                            <img alt="Card image" className="card-img-top" src={`/img/ip/${item.hinh}`} />
                            <div className="card-body">
                                <h4 className="card-title">Iphone 11 Pro</h4>
                                <p className="card-text">7.000.000đ</p>
                                <a className="btn btn-primary" href="#">
                                    Mua Ngay
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}