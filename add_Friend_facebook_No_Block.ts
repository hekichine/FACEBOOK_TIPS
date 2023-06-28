const timer = (ms) => new Promise((res) => setTimeout(res, ms));
var x: any = document.querySelectorAll(".x1lliihq");

const addFr: any = async () => {
  for (var i = 0; i < x.length; i++) {
    if (x[i].innerHTML == "Thêm bạn bè") {
      // console.log(x[i]);
      x[i].click();
    }
    await timer(500);
  }
};
