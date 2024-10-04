import React from "react"
import Link from "next/link"

 function Home() {
  return (
    <>
    <header>
      <section className="bbbg">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li><Link href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" width="5%"/></Link></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/adout">Adout</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/contect">Contect</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/service">Service</a></li>
      </ul>
      <form className="d-flex" role="search">
        <div class="button-h1">
     <Link href="/login"><button className="btn btn-outline-primary" type="submit">Log in</button></Link>
      <Link href="/signup"><button className="btn btn-outline-secondary" type="submit">Sign Up</button></Link>
        </div>
      </form>
    </div>
  </div>
</nav>
</section>
</header>

<section>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1619080353888-1230803ab042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" height="700px"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1487537708572-3c850b5e856e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" height="700px" />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlZXBsZSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D" className="d-block w-100" height="700px" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>

    <main>
      <section>
        <div className="container-1">
        <div className="card">
          <div className="card-cen">
          <div className="crad-info">
            <h3>Welcome To my WedSite</h3>
            <p>สวัสดีครับ ผมชื่อนาว เป็นนักพัฒนาเว็บที่หลงใหลในเทคโนโลยีการสร้างเว็บไซต์ ปัจจุบันผมกำลังศึกษา Full Stack Development เพื่อเพิ่มทักษะในด้านการพัฒนาทั้ง Front-end และ Back-end มีความรู้ด้าน HTML, CSS, JavaScript และกำลังพัฒนาโปรเจกต์ต่างๆ ด้วย Python โดยเฉพาะเกมขับรถที่ผมกำลังสร้าง ผมเชื่อว่าความมุ่งมั่นและความชื่นชอบในเทคโนโลยีจะทำให้ผมเติบโตในสายงานนี้ได้อย่างมั่นคง</p>
          </div>
          </div>
          <div className="card-grid">
            <div className="card-grid-info">
              <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"/>
              <h3>เริ่มต้นกับพื้นฐาน</h3>
              <p>การเรียนรู้พื้นฐานเป็นจุดเริ่มต้นที่สำคัญสำหรับการเป็นโปรแกรมเมอร์ที่ประสบความสำเร็จ ไม่ว่าจะเป็นการเข้าใจโครงสร้างข้อมูล อัลกอริทึม หรือภาษาการเขียนโปรแกรมเบื้องต้น การมีพื้นฐานที่แข็งแรงจะช่วยให้คุณสามารถแก้ไขปัญหาที่ซับซ้อนขึ้นได้ นอกจากนี้การฝึกฝนเขียนโค้ดทุกวันจะช่วยพัฒนาทักษะอย่างต่อเนื่อง</p>
             <center> <a href="#" className="btn-cardd">อ่านเพิ่มเติม</a></center>
              </div>
            <div className="card-grid-info">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"/>
              <h3>การเรียนรู้ด้วยโครงการ</h3>
              <p>หนึ่งในวิธีที่ดีที่สุดในการพัฒนาทักษะคือการสร้างโปรเจกต์ของตัวเอง การเรียนรู้จากตำราเพียงอย่างเดียวอาจไม่เพียงพอ การลงมือปฏิบัติจริงจะช่วยให้คุณเข้าใจถึงความท้าทายที่ต้องเผชิญในโลกการทำงาน คุณสามารถสร้างเว็บไซต์ แอปพลิเคชัน หรือเกมง่ายๆ ซึ่งจะช่วยเพิ่มประสบการณ์และความมั่นใจ</p>
              <center> <a href="#" className="btn-cardd">อ่านเพิ่มเติม</a></center>
            </div>
            <div className="card-grid-info">
              <img src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D"/>
              <h3>ไม่หยุดเรียนรู้</h3>
              <p>เทคโนโลยีในโลกโปรแกรมเมอร์เปลี่ยนแปลงตลอดเวลา ดังนั้นการไม่หยุดเรียนรู้เป็นสิ่งสำคัญ การเข้าร่วมชุมชนออนไลน์ อ่านบทความ หรือเรียนรู้ทักษะใหม่ ๆ จากคอร์สออนไลน์จะช่วยให้คุณก้าวตามเทรนด์ใหม่ ๆ ได้ นอกจากนี้การเรียนรู้จากเพื่อนร่วมงานและการแก้ปัญหาร่วมกันจะทำให้คุณเก่งขึ้นอย่างรวดเร็ว</p>
              <center> <a href="#" className="btn-cardd">อ่านเพิ่มเติม</a></center>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>


    <footer>
      Thank you for visiting my portfolio. © 2024 <a href="#">Siwat</a>
    </footer>
    </>
    
  )
}

export default Home