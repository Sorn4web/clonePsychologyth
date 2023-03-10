import "./Applanding.css";

function AppLanding() {
  return (
    <div className="container">
      <div className="header">
        <h1>ทุกข์ใจอยู่ไหม?</h1>
      </div>
      <div className="subHeader">
        <p>
          หากคุณกำลังต้องการความช่วยเหลือ <br />
          ได้โปรดรู้ไว้ว่ามีคนมากมายที่พร้อมจะรับฟังคุณ
        </p>
      </div>
      <div className="button">
        <a href="https://psychologyth.com/help-center">
          <button className="but1">ช่วยฉันที !!</button>
        </a>
        <button className="but2">ฉันไม่เป็นไร พาฉันเข้าสู่เว็บไซต์</button>
      </div>
    </div>
  );
}

export default AppLanding;
