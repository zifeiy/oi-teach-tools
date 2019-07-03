/**
 * zifeiy: 这个类对应generate页面
 */
var fs = require('fs');

module.exports = {
    controller_name: "/generate",
    get: function (req, res) {
        var row = parseInt(req.query['row']);
        var col = parseInt(req.query['col']);
        var con = req.query['con'];
        console.log(`row=${row}, col=${col}, con=${con}`);

        var sx, sy, ex, ey;

        var genMaze = function (row, col) {
            var maz = [];
            for (var i = 0; i < row; i ++) {
                var tmp = [];
                for (var j = 0; j < col; j ++) tmp.push('.');
                maz.push(tmp);
            }
            sx = Math.floor(Math.random() * row);
            sy = Math.floor(Math.random() * col);
            ex = Math.floor(Math.random() * row);
            ey = Math.floor(Math.random() * col);
            if (sx < Math.floor(row/2) && ex < Math.floor(row/2)) ex += Math.floor(row/2);
            if (sx >= Math.floor(row/2) && ex >= Math.floor(row/2)) ex -= Math.floor(row/2);
            if (sy < Math.floor(col/2) && ey < Math.floor(col/2)) ey += Math.floor(col/2);
            if (sy >= Math.floor(col/2) && ey >= Math.floor(col/2)) ey -= Math.floor(col/2);
            if (sx+1 == ex) { if (sx > 0) sx --; else ex ++; }
            if (ex+1 == sx) { if (ex > 0) ex --; else sx ++; }
            if (sy+1 == ey) { if (sy > 0) sy --; else ey ++; }
            if (ey+1 == sy) { if (ey > 0) ey --; else sy ++; }
            for (var i = 0; i < row; i ++) {
                for (var j = 0; j < col; j ++) {
                    if (Math.random() < 0.7) maz[i][j] = '#';
                }
            }
            maz[sx][sy] = 'S';
            maz[ex][ey] = 'T';
            return maz;
        }
        
        if (con == "auto") {
            con = ( Math.random() <0.5 ) ? "yes" : "no";
        }
        console.log(`row=${row}, col=${col}, con=${con}`);

        var maz = genMaze(row, col);
        
        // // test1
        // console.log("maze origin");
        // maz.forEach( row => console.log(row) );

        var vis = [];
        for (var i = 0; i < row; i ++) {
            var tmp = [];
            for (var j = 0; j < col; j ++) tmp.push(false);
            vis.push(tmp);
        }

        var check = function (x, y) {
            if (vis[x][y]) return false;
            vis[x][y] = true;
            if (maz[x][y] == '#') return false;
            if (x == ex && y == ey) return true;
            if (x+1 < row && check(x+1, y)) return true;
            if (x-1 >= 0 && check(x-1, y)) return true;
            if (y+1 < col && check(x, y+1)) return true;
            if (y-1 >= 0 && check(x, y-1)) return true;
            return false;
        }

        if (con == "yes") {
            while (true) {
                for (var i = 0; i < row; i ++) for (var j = 0; j < col; j ++) vis[i][j] = false;
                if (check(sx, sy)) break;
                var tmp_arr = [];
                for (var i = 0; i < row; i ++) for (var j = 0; j < col; j ++) 
                    if (maz[i][j] == '#') tmp_arr.push([ i, j ]);
                var id = Math.floor(Math.random() * tmp_arr.length);
                maz[ tmp_arr[id][0] ][ tmp_arr[id][1] ] = '.';
            }
        }
        else {  // con == "no"
            while (true) {
                for (var i = 0; i < row; i ++) for (var j = 0; j < col; j ++) vis[i][j] = false;
                if (!check(sx, sy)) break;
                var tmp_arr = [];
                for (var i = 0; i < row; i ++) for (var j = 0; j < col; j ++) 
                    if (maz[i][j] == '.') tmp_arr.push([ i, j ]);
                var id = Math.floor(Math.random() * tmp_arr.length);
                console.log(`id = ${id}, len = ${tmp_arr.length}`);
                if (tmp_arr.length == 0) break;
                maz[ tmp_arr[id][0] ][ tmp_arr[id][1] ] = '#';
            }
        }

        // output maze on console
        console.log("[maze generate]");
        maz.forEach( row => console.log(row) );

        // generate result.html
        var htmlContent = `<!DOCTYPE html><html><head><title>迷宫生成结果 - zifeiy</title></head><body><a href="/">点击返回主页</a><br />行数：${row}；列数：${col}；是否可通行：${con}<br />\n迷宫图像\n<table border="1" cellspacing="0">\n`;
        maz.forEach( row => {
            htmlContent += "<tr>\n";
            row.forEach( ele => {
                if (ele == 'S') htmlContent += `<td style="width:50px;height:50px;background:Tomato">S</td>\n`;
                else if (ele == 'T') htmlContent += `<td style="width:50px;height:50px;background:SlateBlue">T</td>\n`;
                else if (ele == '.') htmlContent += `<td style="width:50px;height:50px;background:PaleGreen ">.</td>\n`;
                else htmlContent += `<td style="width:50px;height:50px;background:grey">#</td>\n`;    // #
            } );
            htmlContent += "</tr>\n";
        } );
        htmlContent += `</tr></table>\n迷宫数据：<br />\n`;
        htmlContent += row + " " + col + "<br>\n";
        maz.forEach(row => {
            var ss = "";
            row.forEach(ele => ss += ele);
            ss += "<br />"
            htmlContent += ss + "\n";
        });
        fs.writeFile(`${__dirname}/../public/result.html`, htmlContent, (err) => {
            if (err) res.send("" + err);
            else res.redirect("/result.html");
        });

        // res.send("ok");
    },
    post: function (req, res) {

    }
}