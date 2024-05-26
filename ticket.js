// document.getElementById("btn1").addEventListener("click", function (e){
//     console.log("props");
// })

// function handleClick(e) {
//     console.log("boss");
// }
const allbtn = document.getElementsByClassName("btn");
// const allbtn = document.getElementById("mb");
// console.log(allbtn); 
let count = 0;
for (const btn of allbtn){
    btn.addEventListener("click",function(e){
       count = count + 1;
         document.getElementById("cnt").innerText = count;
        //  const covertedcount = parseInt(count);

        // console.log(typeof parseInt(count));

    
        
       const placename = e.target.parentNode.childNodes[1].innerText;
      //  const placename = e.target.parentNode.childNodes[1].innerText;
      //  const placename = e.target.parentNode.childNodes[1].innerText;
      //  const placename = e.target.parentNode.childNodes[1].innerText;
       const Class = e.target.parentNode.childNodes[9].innerText;
       const Price = e.target.parentNode.childNodes[11].innerText;
          const selectedcontainer = document.getElementById("spl");
          const li = document.createElement("li");
           
          const p = document.createElement("p");
          p.innerText = placename;
          const p2 = document.createElement("p");
          p2.innerText = Class;
          const p3 = document.createElement("p");
          p3.innerText = Price;

          li.appendChild(p)
          li.appendChild(p2)
          li.appendChild(p3)

          const sit = document.getElementById("sit").innerText;
          const covertedsit = parseInt(sit);
          document.getElementById("sit").innerText = covertedsit - parseInt(count);
          // console.log(typeof parseInt(sit));

          selectedcontainer.appendChild(li);

          const totalCost=document.getElementById
          ("total-cost").innerText;
          //console.log(typeof parseInt(totalCost));

          const converterTotalCost = parseInt(totalCost)
          document.getElementById("total-cost").innerText = converterTotalCost+parseInt(Price);
          const gtotalCost=document.getElementById
          ("Grandtotal").innerText;
          //console.log(typeof parseInt(totalCost));

          const convterTotalCost = parseInt(gtotalCost)
          document.getElementById("Grandtotal").innerText = convterTotalCost+parseInt(Price);
           

          const budget = document.getElementById("total-cost").innerText;


        // console.log(e.target.parentNode.childNodes[].innerText);
        setInnerText("cnt",count);
    });
}


function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

 

const counnt = document.getElementById("sit").innerText;
const convertcounnt = parseInt(counnt);
//count =parseInt(counnt) - parseInt("cnt") ;
//document.getElementById("sit").innerText =parseInt(counnt) - document.getElementById("cnt");
//console.log(typeof convertcounnt);
// for (const btn of allbtn){
//     btn.addEventListener("click",function(e){
//        count = parseInt(counnt) - 1;
//          document.getElementById("sit").innerText = count;
        
        
//     });
// }
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('mb');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'green'; // Change this to the desired color
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('mb-1');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'green'; // Change this to the desired color
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('mb-2');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'green'; // Change this to the desired color
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('mb-3');

  button.addEventListener('click', () => {
      button.style.backgroundColor = 'green'; // Change this to the desired color
  });
});


