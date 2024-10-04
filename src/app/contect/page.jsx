import React from "react";
import Link from "next/link";

function contect () {
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
    <form>
      <div className="con-cen">
        <div className="contect">
          <h2 style={{textAlign: 'center'}}>ติดต่อสอบถาม</h2>
          <div className="con-name">
            <h3>กรุณากรอกชื่อของท่าน</h3>
            <input type="text" placeholder="กรอกชื่อของท่าน" required />
          </div>
          <div className="con-name">
            <h3>กรุณากรอกอีเมลของท่าน</h3>
            <input type="email" placeholder="กรอกอีเมลของท่าน" required />
          </div>
          <label className="comment">กรุณากรอกความคิดเห็นของท่าน <br />
            <textarea name placeholder="กรอกความคิดเห็นของท่าน" defaultValue={""} />
          </label><br />
          <label className="boxcheck">ยอมรับข้อตกลง และเงื่อนไขการใช้งาน <br />
            <input type="checkbox" />
          </label>
          <br />
          <button type="submit">ส่งข้อมูล</button>
        </div>
      </div>
    </form>
  </div>
</section>


    <footer>
      Thank you for visiting my portfolio. © 2024 <a href="#">Siwat</a>
    </footer>
        </>
    )
}

export default contect