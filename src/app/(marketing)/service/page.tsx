import { MAIN_URL_APP } from "@/constants/app";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import NavBar from "@/layouts/NarBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dịch vu của chúng tôi',
  description: 'Đây là trang giới thiệu về dịch vụ của chúng tôi. Các dịch vụ mà chúng tôi cung cấp cho khách hàng.',
  applicationName: 'service',
  keywords: ['Dịch vụ', 'Service', 'Cung cấp', 'Khách hàng'],
  generator: 'NextJS',
  robots: 'index, follow',
  openGraph: {
    title: 'Dịch vu của chúng tôi',
    description: 'Đây là trang giới thiệu về dịch vụ của chúng tôi. Các dịch vụ mà chúng tôi cung cấp cho khách hàng.',
    images: ["https://avatars.githubusercontent.com/u/77420469?v=4"],
    type: 'website',
    url: MAIN_URL_APP + '/service',
  },
}

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
