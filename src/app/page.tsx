import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import NavBar from "@/layouts/NarBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />


      <div className="container mt-5 h-100">
        <div className="row">
          <div className="col-md-8">
            <h2>Tiêu đề nội dung chính</h2>
            <p>
              Nội dung chính của trang web sẽ được đặt ở đây. Bạn có thể thêm
              bất kỳ loại thông tin nào bạn muốn chia sẻ với người dùng của
              mình.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Thông tin phụ</h3>
            <p>
              Một số thông tin phụ có thể được đặt ở đây. Ví dụ: liên kết quảng
              cáo, tin tức mới nhất, hoặc các chức năng khác.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
