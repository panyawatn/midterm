import React from "react";
import { Menu } from ".";
import { Footer } from ".";
import { Row } from "react-bootstrap";
// import Footer from "./index";

function Image() {
  return (
    <Row>
      <img src="content_01.webp" alt="img_content1" className="img-content" />
    </Row>
  );
}

function Content() {
  return (
    <Row className="mt-3">
      <h1 className="font-title text-center">ข้าวหมูทอดทงคัตสึ</h1>
      <p className="font-button mt-2">
        เมนูอาหารญี่ปุ่น ยอดฮิตอย่าง ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น
        ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน
        อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้
        ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า
        ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน
      </p>
      <p className="font-button fw-bold">ส่วนผสมหมูทอด</p>
      <ul className="font-button ms-5">
        <li>หมูสันนอก</li>
        <li>ไข่ไก่ 1 ฟอง</li>
        <li>แป้งเค้ก 4 ช้อนโต๊ะ</li>
        <li>น้ำเปล่า 2 ช้อนโต๊ะ</li>
        <li>น้ำมันพืช 1 ช้อนโต๊ะ</li>
        <li>แป้งเค้กสำหรับชุบเนื้อหมู</li>
        <li>เกล็ดขนมปัง</li>
      </ul>

      <p className="font-button fw-bold">ส่วนผสมซอสทงคัตสึ</p>
      <ul className="font-button ms-5">
        <li>งาขาว 20 กรัม</li>
        <li>ซอสโชยุ 10 กรัม</li>
        <li>วูสเตอร์ซอส 20 กรัม</li>
        <li>ซอสมะเขือเทศ 20 กรัม</li>
        <li>น้ำตาล 10 กรัม</li>
        <li>น้ำเปล่า 20 กรัม</li>
      </ul>

      <p className="font-button fw-bold">วิธีทำหมูทอด</p>
      <ol className="font-button ms-5">
        <li>
          ใช้กระดาษทิชชู่ ซับเนื้อหมูให้แห้ง ถ้ามีมันหมูและเอ็นหมู
          ติดกับเนื้อหมู ให้ใช้มีดหั่น ให้ขาดแยกออกจากกัน เพื่อเวลาทอด
          เนื้อหมูจะไม่งอหรือหดตัว ทั้ง 2 ด้าน จากนั้น
          ใช้ส้อมจิ้มเนื้อหมูให้มีรูพรุน แล้วใช้สันมีดทุบเนื้อหมูให้นุ่มลง
          แล้วเริ่มหมัก โดยใส่เกลือ พริกไทย ตามชอบ
        </li>
        <li>
          ทำแป้งชุบทอด โดยตอกไข่ไก่ ตีให้เข้ากัน จากนั้น ใส่แป้งเค้ก น้ำเปล่า
          น้ำมันพืช คนให้เข้ากัน จนเป็นลักษณะครีม เหนียวข้น
        </li>
        <li>
          นำเนื้อหมูชุบลงในแป้งเค้ก ตามด้วยแป้งชุบทอดและเกล็ดขนมปัง จากนั้น
          ตั้งกระทะ ใส่น้ำมันลงไป รอจนน้ำมันร้อนได้ที่ ประมาณ 170 องศาแล้ว
          ใส่เนื้อหมูลงไป ทอดจนหมูสีเหลืองทองกรอบ ใช้เวลา 4 นาที ครบเวลา
          ให้ตักขึ้น พักให้สะเด็ดน้ำมัน
        </li>
      </ol>

      <p className="font-button fw-bold">วิธีทำซอสทงคัตสึ</p>
      <ol className="font-button ms-5">
        <li>
          ตั้งกระทะ ใส่งาขาวลงไป คั่วให้มีกลิ่นหอม จากนั้น นำใส่เครื่องปั่น
          แล้วปั่นให้ละเอียด
        </li>
        <li>
          เตรียมชามผสม ใส่ซอสโชยุ วูสเตอร์ซอส ซอสมะเขือเทศ น้ำเปล่า น้ำตาล
          เสร็จแล้ว คนส่วนผสมทั้งหมดให้เข้ากัน จนกว่าน้ำตาลจะละลาย
        </li>
        <li>พอน้ำตาลละลายดีแล้ว ให้ใส่งาขาวคั่วลงไป คนให้เข้ากัน</li>
        <li>จัดเสิร์ฟ คู่กับ หมูทอดทงคัตสึ เป็นอันเสร็จ</li>
      </ol>
    </Row>
  );
}
export default function FoodList1() {
  return (
    <>
      <Menu />
      <Image />
      <Content />
      <Footer />
    </>
  );
}
