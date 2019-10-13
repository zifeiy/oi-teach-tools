var generate2 = {};

generate2.generate = function () {
    var num = parseInt(Math.random() * 200 + 1) * 100;
    var description = "有一个由 " + num + " 个整数构成的顺序表，假定表中的元素已经按升序排列，采用二分查找定位一个元素。则最多需要几次比较就能确定是否存在所查找的元素：";
    var ans_num = parseInt( Math.log2(num) );
    var flag = Math.random();
    var st, ans;
    if (flag < 0.25)        { st = ans_num; ans = 'A'; }
    else if (flag < 0.5)    { st = ans_num-1; ans = 'B'; }
    else if (flag < 0.75)   { st = ans_num-2; ans = 'C'; }
    else                    { st = ans_num-3; ans = 'D'; }
    var data = {
        desc: description,
        A: st,
        B: st+1,
        C: st+2,
        D: st+3,
        ans: ans
    };
    return data;
};

module.exports = generate2;

// console.log(generate2.generate());