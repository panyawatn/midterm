import React, { useRef, useState, useContext } from "react";

import { Table, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Menu } from ".";
import { Footer } from ".";

const menus = [
  {
    id: 0,
    name: "ข้าวหมูทอดทงคัตสึ",
    price: 300,
  },
  {
    id: 1,
    name: "ข้าวหน้าเนื้อดงบุริ",
    price: 350,
  },
  {
    id: 2,
    name: "ซูชิหน้าปลาแซลม่อน",
    price: 400,
  },
];
const x = menus[0].price + menus[1].price + menus[2].price;

function HookForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const menuName = watch("menuName");
  const menuPrice = watch("menuPrice");
  const [data, setData] = useState("");

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setData(menuName + "" + menuPrice);
      })}
    >
      <Row>
        <h5 className="font-menu fw-bold ms-2">เพิ่มเมนูใหม่</h5>
        <Col>
          <label htmlFor="menuName" className="form-label font-menu ms-2 me-2">
            ชื่อเมนู
          </label>
          <input
            type="text"
            {...register("menuName", {
              required: "ต้องใส่ข้อมูลช่องนี้",
              minLength: {
                value: 4,
                message: "ต้องมีความยาว 4 ตัวอักษรขึ้นไป",
              },
            })}
          ></input>

          <label htmlFor="menuPrice" className="form-label font-menu ms-2 me-2">
            ราคา
          </label>
          <input
            type="text"
            {...register("menuPrice", {
              required: "ต้องใส่ข้อมูลช่องนี้",
              minLength: {
                value: 4,
                message: "ต้องมีความยาว 4 ตัวอักษรขึ้นไป",
              },
            })}
          ></input>

          <p>
            {errors.menuName?.message} {errors.menuPrice?.message}
          </p>
        </Col>
        <Col>
          <input
            type="submit"
            value={"Add"}
            className="btn btn-primary"
          ></input>
        </Col>
      </Row>

      <h4>{data}</h4>
    </form>
  );
}

export default function MenuList(props) {
  const table = useRef();
  return (
    <>
      <Menu />
      <Row>
        <h4 className="font-title text-center mb-4">
          <u>เมนูอาหารญี่ปุ่น</u>
        </h4>
      </Row>
      <Container>
        <Table striped bordered hover className="font-menu" ref={table}>
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อเมนู</th>
              <th>ราคา (บาท)</th>
              {/* <th className="text-center">จัดการ</th> */}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{menus[0].id + 1}</td>
              <td>{menus[0].name}</td>
              <td>{menus[0].price}</td>
            </tr>
            <tr>
              <td>{menus[1].id + 1}</td>
              <td>{menus[1].name}</td>
              <td>{menus[1].price}</td>
            </tr>
            <tr>
              <td>{menus[2].id + 1}</td>
              <td>{menus[2].name}</td>
              <td>{menus[2].price}</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>รวม</b>
              </td>
              <td>{x}</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>เฉลี่ย</b>
              </td>
              <td>{x / 4}</td>
            </tr>
          </tbody>
        </Table>

        <HookForm></HookForm>
      </Container>
      <Footer />
    </>
  );
}
