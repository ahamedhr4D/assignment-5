// document.getElementById("btn1").addEventListener("click", function (e){
//     console.log("props");
// })

// function handleClick(e) {
//     console.log("boss");
// }
const allbtn = document.getElementsByClassName("btn");
// console.log(allbtn); 
let count = 0;
for (const btn of allbtn){
    btn.addEventListener("click",function(e){
       count = count + 1;
         document.getElementById("cnt").innerText = count;

       const placename = e.target.parentNode.childNodes[1].innerText;
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


        // console.log(e.target.parentNode.childNodes[].innerText);
        setInnerText("cnt",count);
    });
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}
// let counnt = 8;
// for (const btn of allbtn){
//     btn.addEventListener("click",function(e){
//        count = counnt - 1;
//          document.getElementById("sit").innerText = count;
        
        
//     });
// }
