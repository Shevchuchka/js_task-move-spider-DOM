var t=document.querySelector(".wall"),e=document.querySelector(".spider"),i=t.getBoundingClientRect();document.addEventListener("click",function(c){var l=(i.width-t.clientWidth)/2,n=c.clientY-i.top-l-e.clientHeight/2,d=c.clientX-i.left-l-e.clientWidth/2,o=t.clientWidth-e.clientWidth,h=t.clientHeight-e.clientHeight,r=i.left,p=i.left+i.width,u=i.top,a=i.top+i.height;n<0&&(n=0),n>h&&(n=h),d<0&&(d=0),d>o&&(d=o),!(c.clientX<r)&&!(c.clientX>p)&&(c.clientY<u||c.clientY>a||(e.style.top="".concat(n,"px"),e.style.left="".concat(d,"px")))});
//# sourceMappingURL=index.6e64df57.js.map
