import React from "react";
import Link from "next/link";

function Service () {
    return(
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

<main>
        <section>
            <div class="container">
                <div class="service">
                    <div class="service-info">
                        <span>Our</span> <span id="sertext">Services</span>
                        <p>เราคือผู้เชี่ยวชาญด้านการพัฒนาเว็บไซต์ที่ครบวงจร พร้อมให้บริการตั้งแต่การออกแบบจนถึงการดูแลระบบหลังบ้าน เพื่อให้เว็บไซต์ของคุณโดดเด่น มีประสิทธิภาพ และตอบโจทย์ทุกความต้องการของธุรกิจ</p>
                    </div>
                </div>
                <div class="ser-cen">
                <div class="ser-grid">
                    <div class="service-grid">
                    <img src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png"/>
                    <h3>ออกแบบเว็บไซต์หน้าบ้าน</h3>
                    <p>เราเชี่ยวชาญในการออกแบบเว็บไซต์หน้าบ้านที่ทันสมัย สวยงาม และใช้งานง่าย เพื่อสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน และช่วยเพิ่มความน่าสนใจให้กับธุรกิจของคุณ</p>
                    <a href="#">Read More</a>
                 </div>
                 <div class="service-grid">
                    <img src="https://cdn-icons-png.flaticon.com/512/3176/3176315.png"/>
                    <h3>ออกแบบเว็บไซต์ระบบหลังบ้าน</h3>
                    <p>เรามุ่งเน้นการออกแบบระบบหลังบ้านที่เสถียร ปลอดภัย และมีประสิทธิภาพ เพื่อให้เว็บไซต์ของคุณทำงานได้อย่างราบรื่น รองรับการขยายตัวของธุรกิจ และตอบสนองทุกความต้องการด้านเทคโนโลยี</p>
                    <a href="#">Read More</a>
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

export default Service