var generate1 = {};

generate1.generate = function () {
    var arr = [];
    for (var i = 1; ; i ++) {
        if (Math.random() < 0.35) {
            arr.push(i);
            if (arr.length >= 12) break;
        }
    }
    var idx = parseInt(Math.random() * 12);
    var L = 0, R = 11, cnt = 0;
    while (L <= R) {
        var mid = parseInt( (L+R)/2 );
        cnt ++;
        // console.log(`mid=${mid} , idx=${idx}`);
        if (mid == idx) break;
        else if (mid > idx) R = mid - 1;
        else L = mid + 1;    
    }
    // console.log(`cnt = ${cnt}`);
    var description = "对有序数组{" + arr.toString() + "}进行二分查找，成功查找元素" + arr[idx] + "的查找长度（比较次数）是（ ）。";
    var st = 1;
    var ans;
    if (cnt == st) ans = 'A'; else if (cnt == st+1) ans = 'B'; else if (cnt == st+2) ans = 'C'; else ans = 'D';
    var data = {
        desc: description,
        A: "" + st + "次",
        B: "" + (st+1) + "次",
        C: "" + (st+2) + "次",
        D: "" + (st+3) + "次",
        ans: ans
    }
    return data;
}

module.exports = generate1;

// console.log(generate1.generate());