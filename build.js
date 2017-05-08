console.log("new log");

const fs = require("fs");
const path = require("path");

fs.readdir('./markdown',function(error,files){
    for(var i=0;i<files.length;i++){
        var p = path.join('./markdown',files[i]);
        var markdown = fs.readFileSync(p).toString();
        // console.log(markdown);
        var template = fs.readFileSync("./template.html").toString();
        var result = template.replace('%content%',markdown);
    // console.log(result);
        fs.writeFileSync(files[i]+'.html',result);
    }
});
