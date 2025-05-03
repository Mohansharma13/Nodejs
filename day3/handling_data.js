let a=20;
let b=0;



let watingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

watingData.then((data)=>{
    
    console.log(a+data)
})