const input= document.getElementById("numberOfWords");
let wordNumber;

const WordGenerator=(n)=>{
    let letters="abcdefghijklmnopqrstuvwxyz";
    let word='';

    for(let i=1;i<=n;i++)
    {
        let index=Math.floor(Math.random()*letters.length/*26*/);
        word+=letters[index];
    }
    return word;
}


const generatePara=()=>{
  wordNumber=(Number(input.value));

  let finalPara='';

  for(let i=1;i<=wordNumber;i++){

      let random=Math.floor(Math.random()*10)+1;
      finalPara=finalPara+' '+WordGenerator(random);
  }
  
  let para=document.createElement("p");
  para.innerText=finalPara;

  para.setAttribute("class","paras");
  
  let container=document.querySelector(".container");
  container.append(para);
}

