import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import NavBar from "@/layouts/NarBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <Header />

      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h4>Liên hệ với chúng tôi</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Nhập địa chỉ email của bạn"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Nội dung
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Nhập nội dung liên hệ của bạn"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Gửi
                    </button>
                  </form>
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
