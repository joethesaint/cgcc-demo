var e=/^[=+\-@\t\r]/,t=t=>{let n=String(t??``);return e.test(n)&&(n=`'${n}`),/[",\r\n]/.test(n)?`"${n.replace(/"/g,`""`)}"`:n},n=e=>e.map(t).join(`,`),r=(e,t=`\r
`)=>e.map(n).join(t);export{r as n,t};