var generate9 = {};

generate9.generate = function () {
    var lson = {}, rson = {}, cnt = 1;
    var build_tree = function (id) {
        if (id > 7) return;
        var flag = Math.random();
        if (id <= 4 || flag < 0.5) {
            lson[id] = ++cnt;
            build_tree(lson[id]);
        }
        if (id <= 4 || flag > 0.25 && flag < 0.75) {
            rson[id] = ++cnt;
            build_tree(rson[id]);
        }
    }
    build_tree(1);  // 建树
    var qx_arr = [], zx_arr = [], hx_arr = [];
    var qx_travel = function (id) {
        qx_arr.push(id);
        if (lson[id] != null) qx_travel(lson[id]);
        if (rson[id] != null) qx_travel(rson[id]);
    };
    var zx_travel = function (id) {
        if (lson[id] != null) zx_travel(lson[id]);
        zx_arr.push(id);
        if (rson[id] != null) zx_travel(rson[id]);
    }
    var hx_travel = function (id) {
        if (lson[id] != null) hx_travel(lson[id]);
        if (rson[id] != null) hx_travel(rson[id]);
        hx_arr.push(id);
    }
    qx_travel(1);   // 前序遍历
    zx_travel(1);   // 中序遍历
    hx_travel(1);   // 后序遍历
    // console.log(`前序遍历 = ${qx_arr.toString()}`);
    // console.log(`中序遍历 = ${zx_arr.toString()}`);
    // console.log(`后序遍历 = ${hx_arr.toString()}`);
    var err_arr = [];
    for (var i = qx_arr.length; i >= 1; i --) err_arr.push(i);
    var opA, opB, opC, opD, ans;
    var flag = Math.random();
    if (flag < 0.25) {
        opA = hx_arr.toString(); opB = zx_arr.toString(); opC = qx_arr.toString(); opD = err_arr.toString(); ans = 'A';
    }
    else if (flag < 0.5) {
        opA = qx_arr.toString(); opB = hx_arr.toString(); opC = zx_arr.toString(); opD = err_arr.toString(); ans = 'B';
    }
    else if (flag < 0.75) {
        opA = qx_arr.toString(); opB = zx_arr.toString(); opC = hx_arr.toString(); opD = err_arr.toString(); ans = 'C';
    }
    else {
        opA = qx_arr.toString(); opB = zx_arr.toString(); opC = err_arr.toString(); opD = hx_arr.toString(); ans = 'D';
    }
    var description = 
        "已知 " +
        qx_arr.length + 
        " 个节点的二叉树的先根遍历是" + 
        qx_arr.toString() + 
        "（数字为节点的编号，以下同），中根遍历是 " + 
        zx_arr.toString() +
        "，则该二叉树的后根遍历是（  ）。";
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

module.exports = generate9;

// console.log(generate9.generate());