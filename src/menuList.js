import React, { useRef, useState, useContext } from "react";

import { Table, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Menu } from ".";
import { Footer } from ".";

export default function MenuList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const id = watch("id");
  const menuName = watch("menuName");
  const menuPrice = watch("menuPrice");
  const [data, setData] = useState([
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
  ]);

  const onSubmit = (formData) => {
    const newItem = {
      // id: formData.id,
      name: formData.menuName,
      price: parseFloat(formData.menuPrice),
    };
    setData((prevData) => [...prevData, newItem]);
  };

  const totalPrice = data.reduce((total, item) => total + item.price, 0);
  const averagePrice = data.length > 0 ? totalPrice / data.length : 0;

  const table = useRef();

  return (
    <>
      <Menu />
      <Row>
        <h4 className="font-title text-center mt-2 mb-5">
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colspan="2">
                <b>รวม</b>
              </td>
              <td>{totalPrice}</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>เฉลี่ย</b>
              </td>
              <td>{averagePrice.toFixed(2)}</td>
            </tr>
          </tfoot>
        </Table>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <h5 className="font-menu fw-bold mt-2 ms-2">เพิ่มเมนูใหม่</h5>
            <Col>
              <label
                htmlFor="menuName"
                className="form-label font-menu ms-2 me-2"
              >
                ชื่อเมนู
              </label>
              <input type="hidden" {...register("id")}></input>

              <input
                type="text"
                {...register("menuName", {
                  required: "ต้องใส่ชื่ออาหาร",
                  minLength: {
                    value: 4,
                    message: "ต้องมีความยาว 4 ตัวอักษรขึ้นไป",
                  },
                })}
              ></input>

              <label
                htmlFor="menuPrice"
                className="form-label font-menu ms-2 me-2"
              >
                ราคา
              </label>
              <input
                type="number"
                {...register("menuPrice", {
                  required: "ต้องใส่ราคา",
                  minLength: {
                    value: 2,
                    message: "ต้องมีความยาว 2 ตัวอักษรขึ้นไป",
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
                value="Add"
                className="btn btn-primary"
              ></input>
            </Col>
          </Row>
        </form>
      </Container>
      <Footer />
    </>
  );
}
