var generate6 = {};

generate6.generate = function () {
    var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];
    var genOne = function () {
        var out_arr = [], stk = [];
        for (var i = 0; i < 10; i ++) {
            stk.push(arr[i]);
            while (stk.length > 0 && Math.random() < 0.5) {
                out_arr.push(stk[stk.length-1]);
                stk.pop();
            }
        }
        while (stk.length > 0) {
            out_arr.push(stk[stk.length-1]);
            stk.pop();
        }
        return out_arr;
    }
    var genErrOne = function () {
        var out_arr = [], stk = [];
        for (var i = 0; i < 10; i ++) {
            if (i == 2 || i == 3) continue;
            stk.push(arr[i]);
            while (stk.length > 0 && Math.random() < 0.5) {
                out_arr.push(stk[stk.length-1]);
                stk.pop();
            }
        }
        while (stk.length > 0) {
            out_arr.push(stk[stk.length-1]);
            stk.pop();
        }
        out_arr.push(arr[2]);
        out_arr.push(arr[3]);
        return out_arr;
    }
    var res1 = genOne().toString(), res2 = genOne().toString(), res3 = genOne().toString(), res4 = genErrOne().toString();
    // console.log(`res1 = ${res1.toString()}`);
    // console.log(`res2 = ${res2.toString()}`);
    // console.log(`res3 = ${res3.toString()}`);
    // console.log(`res4 = ${res4.toString()}`);
    var description = 
        "对于入栈顺序为 " +
        arr.toString() + 
        "的序列，下列（ ）不可能是合法的出栈序列。";
    var opA, opB, opC, opD, ans;
    var flag = Math.random();
    if (flag < 0.25) {
        opA = res4; opB = res1; opC = res2; opD = res3; ans = 'A';
    }
    else if (flag < 0.5) {
        opA = res1; opB = res4; opC = res3; opD = res2; ans = 'B';
    }
    else if (flag < 0.75) {
        opA = res1; opB = res2; opC = res4; opD = res3; ans = 'C';
    }
    else {
        opA = res1; opB = res2; opC = res3; opD = res4; ans = 'D';
    }
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

module.exports = generate6;

// console.log(generate6.generate());