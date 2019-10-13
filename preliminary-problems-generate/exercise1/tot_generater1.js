var gen1 = require('./generaters/generate1.js');
var gen2 = require('./generaters/generate2.js');
var gen3 = require('./generaters/generate3.js');
var gen4 = require('./generaters/generate4.js');
var gen5 = require('./generaters/generate5.js');
var gen6 = require('./generaters/generate6.js');
var gen7 = require('./generaters/generate7.js');
var gen8 = require('./generaters/generate8.js');
var gen9 = require('./generaters/generate9.js');
var gen10 = require('./generaters/generate10.js');

var fs = require('fs');


var tot_generater1 = {};

tot_generater1.generate = function () {
    var data = [];
    for (var i = 0; i < 10; i ++) {
        data.push(gen1.generate());
        data.push(gen2.generate());
        data.push(gen3.generate());
        data.push(gen4.generate());
        data.push(gen5.generate());
        data.push(gen6.generate());
        data.push(gen7.generate());
        data.push(gen8.generate());
        data.push(gen9.generate());
        data.push(gen10.generate());
    }
    console.log(`data len = ${data.length}`);
    var content = "", content_res = "";
    for (var i = 0; i < 100; i ++) {
        var tmp = (i+1) + ".\t" + data[i].desc + "\r\n";
        tmp += "a)\t" + data[i].A + "\r\n";
        tmp += "b)\t" + data[i].B + "\r\n";
        tmp += "c)\t" + data[i].C + "\r\n";
        tmp += "d)\t" + data[i].D + "\r\n";
        content += tmp;
        content_res += tmp + "答案：" + data[i].ans + "\r\n";
    }
    fs.writeFileSync(`${__dirname}/选择题（算法与数据结构）100题.txt`, content, 'utf8');
    fs.writeFileSync(`${__dirname}/选择题（算法与数据结构）100题——答案.txt`, content_res, 'utf8');
    
}

module.exports = tot_generater1;

tot_generater1.generate();