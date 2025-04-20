const http =require('http')


http.createServer((req,resp)=>{
        resp.write("hello from server");
        resp.end();
}).listen(4500)

