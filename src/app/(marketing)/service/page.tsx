import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import NavBar from "@/layouts/NarBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <Header />

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Dịch vụ của chúng tôi</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Dịch vụ 1</h5>
                  <p className="card-text">Mô tả ngắn gọn về dịch vụ 1.</p>
                  <a href="#" className="btn btn-primary">Xem chi tiết</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Dịch vụ 2</h5>
                  <p className="card-text">Mô tả ngắn gọn về dịch vụ 2.</p>
                  <a href="#" className="btn btn-primary">Xem chi tiết</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dịch vụ 3</h5>
                  <p className="card-text">Mô tả ngắn gọn về dịch vụ 3.</p>
                  <a href="#" className="btn btn-primary">Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
