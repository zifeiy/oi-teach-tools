var generate3 = {};

generate3.generate = function () {
    var arr = [ '进' ], res = [], stk = [ 1 ], sz = 1;
    var in_func = function () {
        arr.push('进');
        sz ++;
        stk.push(sz);
    }
    var out_func = function () {
        arr.push('出');
        res.push(stk[stk.length-1]);
        stk.pop();
    }
    for (var i = 0; i < 7; i ++) {
        var flag = Math.random();
        if (flag < 0.4)         { in_func(); out_func(); }
        else if (flag < 0.8)    { out_func(); in_func(); }
        else                    { in_func(); in_func(); out_func(); }
    }
    // console.log(`arr = ${arr.toString()}`);
    // console.log(`res = ${res.toString()}`);
    var description = 
        "地面上有标号为A、B、C的三根柱，在A柱上放有10个直径相同中间有孔的圆盘，从上到下依次编号为1，2，3……，" + 
        "将A柱上的部分盘子经过B柱移入C柱，也可以在B柱上暂存。如果B柱上的操作记录为“" + 
        arr.toString() +
        "”。那么，在C柱上，从下到上的编号为（ ）。";
    var op1 = res.toString();
    var tmpArr = [];
    for (var i = 6; i >= 0; i --) tmpArr.push(res[i]);
    var op2 = tmpArr.toString();
    tmpArr = res.map(ele => { return (ele+1)%sz+1; })
    var op3 = tmpArr.toString();
    tmpArr = res.map(ele => { return (ele+3)%sz+1; })
    var op4 = tmpArr.toString();
    // console.log(`op1 = ${op1}`);
    // console.log(`op2 = ${op2}`);
    // console.log(`op3 = ${op3}`);
    // console.log(`op4 = ${op4}`);
    var opA, opB, opC, opD, ans;
    var flag = Math.random();
    if (flag < 0.25) {
        opA = op1; opB = op2; opC = op3; opD = op4; ans = 'A';
    }
    else if (flag < 0.5) {
        opA = op2; opB = op4; opC = op3; opD = op1; ans = 'B';
    }
    else if (flag < 0.75) {
        opA = op4; opB = op2; opC = op1; opD = op3; ans = 'C';
    }
    else {
        opA = op3; opB = op2; opC = op4; opD = op1; ans = 'D';
    }
    var data = {
        desc: description,
        A: opA,
        B: opB,
        C: opC,
        D: opD,
        ans: ans
    }
    return data;
}

module.exports = generate3;

// console.log(generate3.generate());