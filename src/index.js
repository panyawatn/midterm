import React, { useRef, useContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Contact from "./contact";
import FoodList1 from "./foodList1";
import FoodList2 from "./foodList2";
import FoodList3 from "./foodList3";
import BackTotop from "./backTotop";

import { userContext } from "./context";

function Link(props) {
  return (
    <NavLink
      to={props.path}
      className="link-light m-3 "
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          textDecoration: isActive ? "none" : "underline",
        };
      }}
    >
      {props.linkName}
    </NavLink>
  );
}

export function Menu() {
  let user = useContext(userContext);
  return (
    <nav className="font-menu bg-warning p-3 mb-3 text-left">
      <Link path="/main" linkName="หน้าเเรก" />
      <Link path="/courses" linkName="เมนูอาหารญี่ปุ่น" />
      <Link path="/contact" linkName="ผู้จัดทำ" />

      <span className="px-2 text-light">{user}</span>
    </nav>
  );
}

export function Footer() {
  return (
    <>
      <Row className="">
        <Col>
          <p className="font-menu mt-5">
            ©2023
            <span
              className="text-primary btn"
              onClick={(event) => (window.location.href = "/contact")}
            >
              ผู้จัดทำ : นายปัญญวัฒน์ สุภาคาร
            </span>
          </p>
        </Col>
        <Col>
          <BackTotop />
        </Col>
      </Row>
    </>
  );
}

function FoodList() {
  // const header1 = useRef();
  return (
    // <userContext.Provider value={"Panyawatn"}>
    <>
      <Menu />
      <Row>
        <h4 className="font-title text-center mb-5">
          <u>วิธีทำอาหารญี่ปุ่นยอดฮิต</u>
        </h4>
      </Row>
      <Row>
        <Col className="text-center">
          <img
            className="img-title mb-2"
            src="list-01.jpg"
            alt="ข้าวหมูทอดทงคัตสึ"
          />
          <h3 className="font-title text-center">ข้าวหมูทอดทงคัตสึ</h3>
          <p className="font-button m-3">
            ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด
            ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว
            ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก
            เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย
            ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน
          </p>
          <Button
            className="btn btn-secondary font-button"
            onClick={(event) => (window.location.href = "/foodList1")}
          >
            ดูวิธีทำ
          </Button>
        </Col>
        <Col className="text-center">
          <img
            className="img-title mb-2"
            src="list-02.jpg"
            alt="ข้าวหน้าเนื้อดงบุริ"
          />
          <h3 className="font-title text-center">ข้าวหน้าเนื้อดงบุริ</h3>
          <p className="font-button m-3">
            เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง Chef Bas Fast Food
            ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ เลยก็ว่าได้
            โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ ซอสโชยุ
            เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ ทำตามสูตรนี้ได้เลย
            รับรองว่า ไม่ผิดหวัง
          </p>
          <Button
            className="btn btn-secondary font-button"
            onClick={(event) => (window.location.href = "/foodList2")}
          >
            ดูวิธีทำ
          </Button>
        </Col>
        <Col className="text-center">
          <img
            className="img-title mb-2"
            src="list-03.jpg"
            alt="ซูชิหน้าปลาแซลม่อน"
          />
          <h3 className="font-title text-center">ซูชิหน้าปลาแซลม่อน</h3>
          <p className="font-button m-3">
            เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู
            โดยเฉพาะ ซูชิหน้าปลาแซลม่อน
            ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก
            เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ
            แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก
            ทานได้แล้ว
          </p>
          <Button
            className="btn btn-secondary font-button"
            onClick={(event) => (window.location.href = "/foodList3")}
          >
            ดูวิธีทำ
          </Button>
        </Col>
      </Row>

      <Footer />
    </>

    // </userContext.Provider>
  );
}

// function FoodList1() {
//   return (
//     <>
//       <h1>Title</h1>
//     </>
//   );
// }

function Courses() {
  const table = useRef();
  const tr = useRef([]);
  const data = [
    ["JS", 1000],
    ["React", 1500],
    ["Django", 2000],
    ["Fluter", 2500],
  ];

  const deleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  return (
    <>
      <Menu />
      <h3>Courses</h3>
      {/* <Button>Click Me</Button> */}
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>Courses</th>
            <th>Price</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>

        {/* <tbody>
          <tr>
            <td>{data[0][0]}</td>
            <td>{data[0][1]}</td>
            <td>-</td>
          </tr>

          <tr>
            <td>{data[1][0]}</td>
            <td>{data[1][1]}</td>
            <td>-</td>
          </tr>

          <tr>
            <td>{data[2][0]}</td>
            <td>{data[2][1]}</td>
            <td>-</td>
          </tr>

          <tr>
            <td>{data[3][0]}</td>
            <td>{data[3][1]}</td>
            <td>-</td>
          </tr>
        </tbody> */}

        <tbody>
          {data.map((item, i) => {
            return (
              <tr ref={(el) => (tr.current[i] = el)} key={i}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  {" "}
                  <Button variant="danger" onClick={() => deleteRow(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <userContext.Provider>
      <BrowserRouter>
        <Container className="p-3 mr-3 bg-light">
          <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/main" element={<FoodList />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/foodList1" element={<FoodList1 />} />
            <Route path="/foodList2" element={<FoodList2 />} />
            <Route path="/foodList3" element={<FoodList3 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </userContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// code by panyawatn;;;
