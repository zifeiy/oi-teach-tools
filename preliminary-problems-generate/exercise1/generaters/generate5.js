var generate5 = {};

generate5.generate = function () {
    var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ], seq = [ '进栈' ], stk = [ 'a' ];
    for (var i = 1; i < 10; i ++) {
        var flag = Math.random();
        if (stk.length > 2 && flag > 0.5) { seq.push('出栈'); stk.pop(); }
        if (flag < 0.4)         { seq.push('进栈'); seq.push('出栈'); }
        else if (flag < 0.8)    { seq.push('出栈'); seq.push('进栈'); }
        else                    { seq.push('进栈'); stk.push(arr[i]); }
    }
    var top_ele = stk[stk.length-1];
    var description = 
        "今有一空栈 S，对下列待进栈的数据元素序列" + 
        arr.toString() +
        "依次进行“" + 
        seq.toString() +
        "”的操作，则此操作完成后，栈 S 的栈顶元素为:";
    // console.log(`desc=${description}`);
    // console.log(`top_ele=${top_ele}`);
    var opA, opB, opC, opD, ans;
    if (['a', 'b', 'c', 'd'].indexOf(top_ele) != -1) {
        opA = 'a'; opB = 'b'; opC = 'c'; opD = 'd';
        if (top_ele == 'a') ans = 'A';
        else if (top_ele == 'b') ans = 'B';
        else if (top_ele == 'c') ans = 'C';
        else ans = 'D';
    }
    else {
        opA = 'a'; opB = 'b';
        if (Math.random() < 0.5) opC = 'c';
        else opC = 'd';
        opD = top_ele;
        ans = 'D';
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

module.exports = generate5;

// console.log(generate5.generate());