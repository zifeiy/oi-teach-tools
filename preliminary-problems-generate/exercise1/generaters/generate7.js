var generate7 = {};

generate7.generate = function () {
    var num = parseInt(Math.random() * 100) * 100;
    if (Math.random() < 0.9) {
        var pp = parseInt(Math.random() * 15 + 2);
        num = 2**pp;
    }
    var res = Math.ceil(Math.log2(num+1));
    // console.log(`num = ${num}, res = ${res}`);
    var description = 
        "如果根结点的深度记为1，则一棵恰有 " +
        num +
        " 个叶结点的二叉树的深度最少是（ ）。";
    var opA, opB, opC, opD, ans;
    if (Math.random() < 0.5) {
        opA = res-1;
        opB = res;
        opC = res+1;
        opD = res+2;
        ans = 'B';
    }
    else {
        opA = res-2;
        opB = res-1;
        opC = res;
        opD = res+1;
        ans = 'C';
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

module.exports = generate7;

// console.log(generate7.generate());