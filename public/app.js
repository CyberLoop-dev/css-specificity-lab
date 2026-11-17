import {compareSelectors} from "./specificity.js";
const a=document.querySelector("#a"),b=document.querySelector("#b"),result=document.querySelector("#result");
document.querySelector("#compare").addEventListener("click",()=>{
 try{const r=compareSelectors(a.value,b.value);result.innerHTML="<div class='scores'><div><small>Selector A</small><strong>"+r.left.join(", ")+"</strong></div><div><small>Selector B</small><strong>"+r.right.join(", ")+"</strong></div></div><p class='winner'>"+(r.winner==="tie"?"Both selectors have equal specificity.":"Selector "+r.winner+" wins.")+"</p>";}
 catch{result.textContent="Could not calculate these selectors.";}
});
document.querySelector("#compare").click();
