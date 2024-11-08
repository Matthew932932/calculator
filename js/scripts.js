
//const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World\!");




//const link = document.querySelector(".comm");
//link.textContent = "Mozilla Developer Network";
/*link.href = "https://developer.mozilla.org";*/
/*const sect = document.querySelector("section");
const para = document.createElement("div");
para.textContent = "This is the new div";

para.setAttribute("class", "secDiv");   //auto styled in css as soon as given class, inline styles below
sect.appendChild(para);

const text = document.createTextNode(
    " this is the created text node addition",
  );
  const linkPara = document.querySelector(".secDiv");
  linkPara.appendChild(text);
  sect.appendChild(linkPara);*/

  /*const btn = document.querySelector("#btn");
  btn.addEventListener("click", function (e) {
    sect.removeChild(linkPara);
    e.target.style.background = "blue";
  });*/

//sect.removeChild(linkPara);   //Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use Node.removeChild(), like this
//linkPara.remove();     //When you want to remove a node based only on a reference to itself, which is fairly common, you can use Element.remove()
//linkPara.parentNode.removeChild(linkPara);  //older browsers

//Inline styles
/*para.style.color = "white";
para.style.backgroundColor = "purple";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";*/


let number1 = "";
let number2 = "";
let operator = "";
let equalsFlag = "";
let clearFlag = "";

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbs) {
	return numbs.reduce((sum, current) => sum + current, 0);
};

// const multiply = function(numbs) {
//   return numbs.reduce((sum, current) => sum * current, 1);
// };

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};

const power = function(num, power) {
	return result = Math.pow(num, power);
};

const factorial = function (n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};


function operate(num1, operator, num2)
{
  let result;
  let intNum1 = Number(num1);
  let intNum2 = Number(num2);


  if (operator === "+"){
    result = add(intNum1,intNum2);
    console.log(result); 
  }
  
  if (operator === "-"){
   result = subtract(num1,num2);
   console.log(result);
  }

  if (operator === "X"){ 
    result = multiply(num1,num2);
    console.log(result);
  }

  if (operator === "/"){ 
    result = divide(num1,num2);
    console.log(result);
  }

  const sect = document.querySelector(".display");
  sect.textContent = result;
  return result;

}

function display(btnid)
{
  let temp1 = btnid.substring(0,3);
  console.log(temp1);
  const sect = document.querySelector(".display");

  if(temp1 === "btn" && equalsFlag !== "secondCalc")
  {
    
    if(number1 === "" && operator === ""){
      sect.textContent = btnid.substring(3);// + "here1";
      number1 = btnid.substring(3);
    }else if(number1 !== "" && operator === "")
    {
      sect.textContent = sect.textContent + btnid.substring(3);// + "here3";
      number1 = number1 + btnid.substring(3);
    }
    else if(number2 === "" && operator !== "")
    {
      sect.textContent = sect.textContent + " " + btnid.substring(3);// + "here4";
      number2 = btnid.substring(3);
    }
    else 
    {
        sect.textContent = sect.textContent + btnid.substring(3);// + "here5";
        number2 = number2 + btnid.substring(3);
    }

    
    //const para = document.createElement("div");
    // if(sect.textContent === "0")
    // {
    // sect.textContent = btnid.substring(3) + "here1";
    // }
    // else 
    // {
    //   sect.textContent = sect.textContent + " " + btnid.substring(3) + "here2";
    // }
  }
  else if (temp1 === "opr")
    {
      
      const sect = document.querySelector(".display");
      //const para = document.createElement("div");
      //if(operator === "0")
      //{
      // sect.textContent = btnid.substring(3);// + "here1";
      // operator = btnid.substring(3);
      //}
      // else 
      // {
      sect.textContent = sect.textContent + " " + btnid.substring(3);// + "here2";
      operator = btnid.substring(3);
      equalsFlag = "";
      // }
    }





  //para.setAttribute("class", "secDiv");   //auto styled in css as soon as given class, inline styles below
  //sect.appendChild(para);

}


//const btn = document.querySelector("#btn");
const btn = document.querySelector(".maincont");
  btn.addEventListener("click", function (e) {
    //e.target.style.background = "blue";
    //console.log( e.target.id );
    
    if(equalsFlag === "" || equalsFlag === "secondCalc"){
      display(e.target.id);
    }
    
    if(e.target.id === "clear")
    {
      number1 = "";
      number2 = "";
      operator = "";
      equalsFlag = "";
      //clearFlag = "";
      const sect = document.querySelector(".display");
      sect.textContent = "0";
    } 
    
    if(e.target.id === "equals")
    {
      number1 = operate(number1, operator, number2);
      equalsFlag = "secondCalc";
      
      number2 = "";
      operator = "";
      
    }
    
  });
