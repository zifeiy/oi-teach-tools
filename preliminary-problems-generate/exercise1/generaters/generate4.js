var generate4 = {};

generate4.generate = function () {
    var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ], stk = [], out_arr = [];
    var max_num = 0;
    for (var i = 0; i < 7; i ++) {
        stk.push(arr[i]);
        max_num = Math.max(max_num, stk.length);
        while (stk.length > 0 && Math.random() < 0.4) {
            out_arr.push(stk[stk.length-1]);
            stk.pop();
        }
    }
    var len = stk.length;
    for (var i = len-1; i >=0; i --) out_arr.push(stk[i]);
    // console.log(`arr=${arr.toString()}`);
    // console.log(`out=${out_arr.toString()}`);
    // console.log(`max_num=${max_num}`);
    var description = 
        "设栈 S 的初始状态为空，元素 a，b，c，d，e，f，g 依次入栈 S ，出栈的序列为 " +
        out_arr.toString() + "，则栈S的容量至少应该是（ ）。";
    var opA, opB, opC, opD, ans;
    if (max_num < 4) {
        opA = max_num;
        opB = max_num + 1;
        opC = max_num + 2;
        opD = max_num + 3;
        ans = 'A';
    }
    else {
        opA = 4; opB = 5; opC = 6; opD = 7;
        if (opA == max_num) ans = 'A';
        else if (opB == max_num) ans = 'B';
        else if (opC == max_num) ans = 'C';
        else ans = 'D';
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

module.exports = generate4;

// console.log(generate4.generate());