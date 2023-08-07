import React, { useContext } from "react";
import { Menu } from ".";
import { Footer } from ".";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Unity" emoji="💪" color="cyan" />
      <Skill skill="HTML" emoji="👍" color="red" />
      <Skill skill="PHP" emoji="💪" color="orange" />
      <Skill skill="React" emoji="🐥" color="yellow" />
      <Skill skill="MySQL" emoji="👍" color="orangered" />
      <Skill skill="Pyhton" emoji="👍" color="blue" />
      <Skill skill="Bootstrtap" emoji="👍" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2 className="avatar-title">นายปัญญวัฒน์ สุภาคาร</h2>
      <p>
        นักศึกษาระดับ ปริญญษโท สาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบในเทคโนโลยีและคอมพิวเตอร์
        ชอบเรียนรู้สิ่งใหม่ๆ
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="panyawatn.jpg" alt="Panyawatn Suphakarn" />
  );
}

export default function Contact() {
  // let user = useContext(userContext);
  return (
    <>
      <Menu />

      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
      <Footer />
    </>
  );
}
