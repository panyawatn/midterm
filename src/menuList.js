import React, { useRef, useContext } from "react";
import { Button, Table, Row } from "react-bootstrap";
import { Menu } from ".";
import { Footer } from ".";

export default function MenuList() {
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
      <Row>
        <h4 className="font-title text-center mb-4">
          <u>เมนูอาหารญี่ปุ่น</u>
        </h4>
      </Row>

      <Table striped bordered hover className="font-menu" ref={table}>
        <thead>
          <tr>
            <th>#</th>
            <th>ชื่อเมนู</th>
            <th>ราคา (บาท)</th>
            <th className="text-center">จัดการ</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => {
            return (
              <tr ref={(el) => (tr.current[i] = el)} key={i}>
                <td className="col col-1">{i + 1}</td>
                <td className="col col-4">{item[0]}</td>
                <td className="col col-3">{item[1]}</td>
                <td className="text-center col-2">
                  {" "}
                  <Button variant="danger" onClick={() => deleteRow(i)}>
                    ลบ
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Footer />
    </>
  );
}
