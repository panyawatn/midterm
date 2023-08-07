import React from "react";

function BackTotop() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <p
      id="btn-back-to-top"
      className="btn font-menu mt-5 text-primary text-end"
      onClick={backToTop}
    >
      Back to top
    </p>
  );
}

export default BackTotop;
