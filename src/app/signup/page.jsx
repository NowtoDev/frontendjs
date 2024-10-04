import React from "react";

function signup () {
    return(
        <>
        <div className="container">
  <div className="row justify-content-md-center">
    <div className="col-12">
      <br />
      <div className="card  border-info mb-6 " style={{maxWidth: '100rem'}}>
        <div className="card-header text-white bg-info">
          <i className="fas fa-address-card" /> register
        </div>
        <div className="card-body">
          <form id="myForm" onsubmit="handleFormSubmit(this)" className="form-body-2">
            <div className="col-12">
              <div className="row">
                <div className="col-3">
               <div>
                <div>คำนำหน้าชื่อ</div>
                  <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">นาย</label>
                </div>
              <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="inlineRadio2">นาง</label>
        </div>
              <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
          <label className="form-check-label" htmlFor="inlineRadio2">นางสาว</label>
        </div>
        </div>
                </div>
                <div className="col-4">
                <div>
  <label htmlFor="exampleInputEmail1" className="form-label">ชื่อ</label>
  <input type="text" className="form-control" id="f_Name" aria-describedby="emailHelp" />
</div>

                </div>
                <div className="col-5">
                <div>
  <label htmlFor="exampleInputEmail1" className="form-label">นามสกุล</label>
  <input type="text" className="form-control" id="L_Name" aria-describedby="emailHelp" />
</div>

                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                <label htmlFor="exampleInputEmail1" className="form-label">วัน/เดือน/ปีเกิด</label>
                <input type="date" name="" id="data&brith" className="form-control" />
                </div>
                <div className="col-4">
                <div>
  <label htmlFor="exampleInputEmail1" className="form-label">เบอร์โทร</label>
  <input type="text" className="form-control" id="n_phone" aria-describedby="emailHelp" />
</div>
                </div>
                <div className="col-5">
                <div>
  <label htmlFor="exampleInputEmail1" className="form-label">email</label>
  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
</div>

                </div>
                </div>
              </div>
              <div className="col-12">
              <div className="row">
              <div className="col-4">
                <div>
              <label htmlFor="exampleInputEmail1" className="form-label">username</label>
              <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
            </div>
                </div>
              <div className="col-4">
                <div>
              <label htmlFor="exampleInputEmail1" className="form-label">password</label>
              <input type="password" className="form-control" id="password" aria-describedby="emailHelp" />
            </div>
                </div>
              <div className="col-4">
                <div>
              <label htmlFor="exampleInputEmail1" className="form-label">ยืนยันpassword</label>
              <input type="password" className="form-control" id="password" aria-describedby="emailHelp" />
            </div>
                </div>
                </div>
              </div>
              <div className="col-12">
              <div className="row">
                <div className="ei87">
                  
            <div className="form-check">
  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    ยอมรับเงื่อนไขและการใช้งาน
  </label>
</div>

</div>
                </div>
                <div className="form-buttomm">
                <button type="button" class="btn btn-success">ส่งข้อมูล</button>
                </div>
              </div>
          </form>
        </div>
        </div>
        </div>
        </div>
        </div>

        </>
    )
}

export default signup