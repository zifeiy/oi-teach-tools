var generate8 = {};

generate8.generate = function () {
    var num = parseInt(Math.random() * 500 + 9);
    var res = parseInt((num-1)/2);
    var description = "已知一棵二叉树有 " + num + " 个节点，则其中至多有（ ）个节点有 2 个子节点。";
    var st = res - parseInt(Math.random() * 4);
    var opA = st, opB = st+1, opC = st+2, opD = st+3, ans;
    if (res == opA) ans = 'A'; else if (res == opB) ans = 'B'; else if (res == opC) ans = 'C'; else if (res == opD) ans = 'D';
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

module.exports = generate8;

// console.log(generate8.generate());