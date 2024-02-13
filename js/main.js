document.getElementById("button1").addEventListener("click", ()=> {
  document.getElementById("first").classList.add("disable");
  document.getElementById("img").classList.add("disable");
  document.getElementById("button1").classList.add("disable");
  document.getElementById("button2").classList.remove("disable");
  document.getElementById("second").classList.remove("disable");
});

document.getElementById("button2").addEventListener("click", ()=> {
  document.getElementById("second").classList.add("disable");
  document.getElementById("button2").classList.add("disable");
  document.getElementById("button3").classList.remove("disable");
  document.getElementById("third").classList.remove("disable");
});

document.getElementById("button3").addEventListener("click", ()=> {
  document.getElementById("third").classList.add("disable");
  document.getElementById("button3").classList.add("disable");
  document.getElementById("button4").classList.remove("disable");
  document.getElementById("fourth").classList.remove("disable");
});

document.getElementById("button4").addEventListener("click", ()=> {
  document.getElementById("fourth").classList.add("disable");
  document.getElementById("button4").classList.add("disable");
  document.getElementById("button5").classList.remove("disable");
  document.getElementById("fifth").classList.remove("disable");
});

document.getElementById("button5").addEventListener("click", ()=> {
  document.getElementById("fifth").classList.add("disable");
  document.getElementById("button5").classList.add("disable");
  document.getElementById("button6").classList.remove("disable");
  
});

document.getElementById("button6").addEventListener("click", ()=> {
  document.getElementById("sixth").classList.add("disable");
  document.getElementById("button6").classList.add("disable");
  document.getElementById("sixth").classList.remove("disable");
});