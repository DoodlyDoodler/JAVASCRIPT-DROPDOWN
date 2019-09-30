/* Simarpreet Singh (200413865) */

let select = document.getElementById("members");
let para = document.getElementById("content");
let body = document.querySelector("body");
let instructorNames = ["Ms.Jessica Gilfillan","Mr.Justin Hunt","Ms. Susy Stewart","Mr.Maziar Shajari","Mr. Ben Blanc","Mr.Tim Partrick"];
let studentNames = ["Linh Duong","Christopher Ermel","Brea Parker","Danil Borisov","Haider Malik","Deep Parmar","Yuki Miyazawa","Michael Valadao-Martins","Yolanda Hames Matt Hames","Tylor Wichiciel","Navneet Singh","Meisam Koohaki","Edwin Christie","Mariana Lima","Norah Alharbi","Kiril Mankovskyi","Vy Hoang","Mark Song","Kirill Barsukov","Noah Hawke","Andrew Reid","Mason Ferrie","Mark Sporich","Ambuj Bhoj","Owen Brown","Nicole Gray","Simarpreet Singh","Gurasees Singh Tehria","Elias Aguilera","Prabhat Batra","Jaime Tavares","Preet Nakrani","Drake Esdon"];
let instructInfo = " "
let studentInfo = " "
select.onchange =  setMembers;
para.setAttribute('style','white-space: pre;')

for(let i = 0; i < instructorNames.length; i++) {
  if( i === instructorNames.length - 1) {
    instructInfo += instructorNames[i] + ".";
  }
  else {
    instructInfo += instructorNames[i] + ",\n ";
  }
}

for(let i = 0; i < studentNames.length; i++) {
  if( i === studentNames.length - 1) {
    studentInfo += studentNames[i] + ".";
  }
  else {
    studentInfo += studentNames[i] + ",\n";
  }
}

function setMembers() {
  var choice = select.value;

  if(choice === "instructor") {

    para.textContent = instructInfo;
    }
  else if (choice === "student") {
    para.textContent = studentInfo;
  }
  else {
  para.textContent = "*Bing Bong*";
  }
}
