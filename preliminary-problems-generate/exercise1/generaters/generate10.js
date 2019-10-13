var generate10 = {};

generate10.generate = function () {
    var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var s = "";
    if (Math.random() < 0.4) s = "zifeiy";
    var len = parseInt(Math.random() * 5 + 4);
    for (var i = 0; i < len; i ++) {
        var cc = arr[ parseInt(Math.random() * 26) ];
        if (Math.random() < 0.5) s = cc + s;
        else s = s + cc;
    }
    // console.log(`s = ${s}`);
    var description = 
        "设字符串S=“" + 
        s + 
        "”，S的非空子串的数目是（ ）。";
    var res = (s.length + 1) * s.length / 2;
    var st = res - parseInt(Math.random() * 4);
    var opA = st, opB = st+1, opC = st+2, opD = st+3;
    var ans;
    if (opA == res) ans = 'A'; else if (opB == res) ans = 'B'; else if (opC == res) ans = 'C'; else ans = 'D';
    var data = {
        desc: description,
        A: opA,
        B: opB,
        C: opC,
        D: opD,
        ans: ans
    };
    return data;
}

module.exports = generate10;

// console.log(generate10.generate());