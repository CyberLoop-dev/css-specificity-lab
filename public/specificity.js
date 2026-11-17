export function splitTopLevel(value,separator=","){
  const out=[];let start=0,depth=0,quote="";
  for(let i=0;i<value.length;i++){const c=value[i];if(quote){if(c===quote&&value[i-1]!=="\\")quote="";continue;}if(c==="'"||c==='"'){quote=c;continue;}if(c==="("||c==="[")depth++;else if(c===")"||c==="]")depth=Math.max(0,depth-1);else if(c===separator&&depth===0){out.push(value.slice(start,i).trim());start=i+1;}}
  out.push(value.slice(start).trim());return out.filter(Boolean);
}
function maxTuple(items){return items.reduce((best,item)=>compare(item,best)>0?item:best,[0,0,0]);}
export function compare(a,b){for(let i=0;i<3;i++){if(a[i]!==b[i])return a[i]-b[i];}return 0;}
export function calculateSpecificity(selector){
  let score=[0,0,0],i=0;
  const s=selector.trim();
  while(i<s.length){
    const c=s[i];
    if(c==="#"){i++;while(i<s.length&&/[\w-]/.test(s[i]))i++;score[0]++;continue;}
    if(c==="." ){i++;while(i<s.length&&/[\w-]/.test(s[i]))i++;score[1]++;continue;}
    if(c==="["){let d=1;i++;while(i<s.length&&d){if(s[i]==="[")d++;if(s[i]==="]")d--;i++;}score[1]++;continue;}
    if(c===":"){
      const pseudoElement=s[i+1]===":";i+=pseudoElement?2:1;const start=i;while(i<s.length&&/[\w-]/.test(s[i]))i++;const name=s.slice(start,i).toLowerCase();
      let args="";if(s[i]==="("){let d=1,j=++i;while(i<s.length&&d){if(s[i]==="(")d++;if(s[i]===")")d--;i++;}args=s.slice(j,i-1);}
      if(pseudoElement||["before","after","first-line","first-letter"].includes(name)){score[2]++;continue;}
      if(name==="where")continue;
      if(["is","not","has"].includes(name)){const tuples=splitTopLevel(args).map(calculateSpecificity);score=score.map((v,k)=>v+maxTuple(tuples)[k]);continue;}
      score[1]++;continue;
    }
    if(/[a-zA-Z_*|]/.test(c)){
      const prev=s.slice(0,i).trimEnd().slice(-1);
      if(c!=="*"&&c!=="|"&&(i===0||/[>+~,(]/.test(prev)||/\s/.test(s[i-1])))score[2]++;
      while(i<s.length&&/[\w-]/.test(s[i]))i++;
      if(s[i]==="|")i++;
      continue;
    }
    i++;
  }
  return score;
}
export function compareSelectors(a,b){const left=calculateSpecificity(a),right=calculateSpecificity(b),result=compare(left,right);return {left,right,winner:result===0?"tie":result>0?"A":"B"};}
