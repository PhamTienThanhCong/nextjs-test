import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import NavBar from "@/layouts/NarBar";

export default function About() {
  return (
    <>
      <NavBar />
      <Header />

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Về chúng tôi</h2>
              <p>
                Đây là nơi bạn có thể mô tả về công ty hoặc tổ chức của bạn. Bạn có thể chia sẻ thông tin về lịch sử, sứ mệnh, giá trị cốt lõi, và bất kỳ thông tin nào khác bạn muốn chia sẻ với khách hàng của mình.
              </p>
              <p>
                Đừng ngần ngại sử dụng không gian này để làm nổi bật những điểm mạnh của công ty của bạn và tạo ra một ấn tượng tích cực với khách hàng.
              </p>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/500" className="img-fluid" alt="Về chúng tôi" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
