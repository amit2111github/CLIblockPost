var fs = require("fs");
var http = require("http");
const readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

rl.question("Enter First Number ",ans=>{
	var ans1 = Number(ans)
	rl.question("Enter Second Number ",ans=>{
		var ans2 = Number(ans)
		var data = `The Sum of ${ans1} and ${ans2} isEqual to  ${ans1+ans2}`
		fs.writeFile("./Read.txt" ,data,(err)=>{
			if(err) throw err
				console.log("successfullly append")
		})
		http.createServer((req,res)=>{
			fs.readFile("./Read.txt",(err,data)=>{
				if(err) throw err
					res.writeHead(200,{"content-type":"text/html"})
					res.write(`<h2>${data}</h2>`)
					res.end();
			})
		}).listen(3000,"localhost")
		rl.close()

	})

})



