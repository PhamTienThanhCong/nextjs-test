import type { Metadata } from 'next'
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import NavBar from "@/layouts/NarBar";
import { MAIN_URL_APP } from '@/constants/app';

export const metadata: Metadata = {
  title: 'About us',
  description: 'Đây là trang giới thiệu về chúng tôi.',
  applicationName: 'About us',
  keywords: ['giới thiệu về công', "giới thiệu về chúng tôi", 'about us', 'about', 'us', 'về chúng tôi', 'về chúng tôi'],
  generator: 'NextJS',
  robots: 'index, follow',
  openGraph: {
    title: 'About us',
    description: 'Đây là trang giới thiệu về chúng tôi.',
    images: ["https://avatars.githubusercontent.com/u/77420469?v=4"],
    type: 'website',
    url: MAIN_URL_APP + '/about',
  },
}
 

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
