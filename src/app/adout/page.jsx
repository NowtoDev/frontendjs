import React from "react";
import Link from "next/link";

function adout () {
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

<section>
    <div className="container">
        <div className="about-cent">
    <div className="about-me">
        <h2>About me</h2>
        <p>สวัสดีครับ ผม นายศิวัช สังฆอนันต์ เป็นนักศึกษาของวิทยาลัยเทคนิคเชียงใหม่ระดับชั้นปวส. สาขาเทคโนโลยีสารสนเทศ ซอฟต์แวร์และการประยุกต์ อนาคตอยากทำอาชีพเกี่ยวกับสาย developer อยากเป็น FullStackDeveloper ตอนนี้กำลังศึกษาจากคอสเรียนต่างๆใน Futureskill and Borntodev School ขอบคุณทุกคนที่อ่านครับ ยินดีต้อนรับเข้าสู่เว็บไซต์ครับ</p>
        </div>
    </div>
    <div class="main-grid">
                    <div class="main-grid-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png" alt="" />
                    <h3>Front-End</h3>
                    <p>ตอนนี้กำลัง ฝึกออกแบบหน้าเว็บไซต์เพื่อพัฒนา skill front end developer ในการออกแบบเว็บไซต์ให้สวยงาม</p>
                 </div>
                 <div class="main-grid-content">
                 <img src="https://cdn-icons-png.flaticon.com/512/3176/3176315.png" alt="" />
                    <h3>Back-End</h3>
                    <p>ตอนนี้กำลัง ฝึกพัฒนาเรียนรู้เกี่ยวกับระบบหลังบ้าน เพื่อพัฒนาskill back developer ในการพัฒนาระบบหลังบ้าน</p>
                    </div>
                    <div class="main-grid-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/993/993762.png" alt="" />
                    <h3>Database</h3>
                    <p>ตอนนี้กำลัง ฝึกเกี่ยวกับฐานข้อมูลdatabase การออกแบบ และ การ implement database เแนวคิดพื้นฐานเกี่ยวกับ </p>
                 </div>
                </div>
    <div class="main-grid">
                    <div class="main-grid-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png" alt="" />
                    <h3>Front-End</h3>
                    <p>ตอนนี้กำลัง ฝึกออกแบบหน้าเว็บไซต์เพื่อพัฒนา skill front end developer ในการออกแบบเว็บไซต์ให้สวยงาม</p>
                 </div>
                 <div class="main-grid-content">
                 <img src="https://cdn-icons-png.flaticon.com/512/3176/3176315.png" alt="" />
                    <h3>Back-End</h3>
                    <p>ตอนนี้กำลัง ฝึกพัฒนาเรียนรู้เกี่ยวกับระบบหลังบ้าน เพื่อพัฒนาskill back developer ในการพัฒนาระบบหลังบ้าน</p>
                    </div>
                    <div class="main-grid-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/993/993762.png" alt="" />
                    <h3>Database</h3>
                    <p>ตอนนี้กำลัง ฝึกเกี่ยวกับฐานข้อมูลdatabase การออกแบบ และ การ implement database เแนวคิดพื้นฐานเกี่ยวกับ </p>
                 </div>
                </div>
    </div>
</section>

<footer>
      Thank you for visiting my portfolio. © 2024 <a href="#">Siwat</a>
    </footer>
        </>
    )
}

export default adout