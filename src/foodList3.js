import React from "react";
import { Menu } from ".";
import { Footer } from ".";
import { Row } from "react-bootstrap";
// import Footer from "./index";

function Image() {
  return (
    <Row>
      <img src="content_03.webp" alt="img_content3" className="img-content" />
    </Row>
  );
}

function Content() {
  return (
    <Row className="mt-3">
      <h1 className="font-title text-center">ซูชิหน้าปลาแซลม่อน</h1>
      <p className="font-button mt-2">
        เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู โดยเฉพาะ
        ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ
        วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น
        ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้
        ก็พร้อมคีบเข้าปาก ทานได้แล้ว
      </p>
      <p className="font-button fw-bold">ส่วนผสมข้าวซูชิ</p>
      <ul className="font-button ms-5">
        <li>ข้าวญี่ปุ่นสำหรับทำข้าวปั้น 2 ถ้วยตวง</li>
        <li>น้ำสะอาด 300 มิลลิลิตร</li>
        <li>สาหร่ายคอมบุ 1 แผ่น</li>
        <li>น้ำส้มสายชู หมักจากข้าว 55 มิลลิลิตร</li>
        <li>น้ำตาลทราย 35 กรัม</li>
        <li>เกลือ 10 กรัม</li>
      </ul>

      <p className="font-button fw-bold">ส่วนผสมซูชิหน้าปลาแซลม่อน</p>
      <ul className="font-button ms-5">
        <li>ข้าวซูชิ</li>
        <li>เนื้อปลาแซลม่อน</li>
      </ul>

      <p className="font-button fw-bold">วิธีทำข้าวซูชิ</p>
      <ol className="font-button ms-5">
        <li>เทข้าวญี่ปุ่น ใส่ชามผสม จากนั้น ล้างน้ำให้สะอาด</li>
        <li>
          ใช้มือขัดเพื่อให้ยางข้าวออก แล้วล้างน้ำสะอาดอีกรอบ ทำอย่างนี้อีก 3-4
          ครั้ง จนกว่าน้ำจะขาวใส ไม่ขุ่น เสร็จแล้ว แช่น้ำทิ้งไว้ 40 นาที – 2
          ชั่วโมง หรือ ตามที่ข้างถุงแนะนำ
        </li>
        <li>
          นำข้าวมากรองน้ำผ่านกระชอน ผึ่งให้แห้ง ประมาณ 5 นาที แล้วนำไปหุงให้สุก
          โดยใช้น้ำสะอาด 300 มิลลิลิตร (ใช้อัตราส่วนข้าวกับน้ำ 1 : 1)
          และใส่สาหร่ายคอมบุลงไป 1 แผ่น เพื่อให้มีกลิ่นหอม
        </li>
        <li>
          ปรุงข้าวซูชิ โดยเตรียมชามผสม ใส่น้ำตาลทราย เกลือ และน้ำส้มสายชู
          หมักจากข้าว คนให้น้ำตาลและเกลือละลายเข้ากัน
        </li>
        <li>
          ตักข้าวญี่ปุ่นที่สุกแล้ว ลงในชามผสม จากนั้น ใส่น้ำส้มสายชูลงไปในข้าว
          แล้วใช้ทัพพีคนให้ข้าวโดนน้ำส้มสายชูให้ทั่วกัน
        </li>
        <li>
          พอข้าวกับน้ำส้มสายชูเข้ากันดีแล้ว ให้ใช้พัด
          พัดให้ข้าวเย็นตัวลงเล็กน้อย แล้วนำผ้าขาวบางมาปิดข้าวไว้
          ให้ข้าวดูดซึมน้ำส้มสายชูเข้าไปได้เต็มที่ พักทิ้งไว้อย่างน้อย 1 ชั่วโมง
          เป็นอันเสร็จ
        </li>
      </ol>

      <p className="font-button fw-bold">วิธีทำซูชิหน้าปลาแซลมอน</p>
      <ol className="font-button ms-5">
        <li>หุงข้าวและปรุงข้าวญี่ปุ่น เพื่อทำเป็นข้าวปั้นสำหรับทำซูชิ</li>
        <li>
          ตักข้าวญี่ปุ่นใส่แม่พิมพ์ กดให้เข้ารูป จนได้เป็นข้าวปั้นรูปวงรี
          จากนั้น วางเรียงไว้บนถาดเตรียมไว้
        </li>
        <li>
          หั่นเนื้อปลาแซลมอนดิบ ออกเป็นชิ้น ๆ ให้สวยงาม
          เสร็จแล้วนำมาโปะไว้ด้านบน เป็นอันเสร็จ
        </li>
      </ol>
    </Row>
  );
}
export default function FoodList3() {
  return (
    <>
      <Menu />
      <Image />
      <Content />
      <Footer />
    </>
  );
}
