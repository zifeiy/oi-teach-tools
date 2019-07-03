var fs = require('fs');
var path = require('path');

/*
这个类用于去/controllers/目录下去找所有的类
如果找到一个类的controller_name不为空，
则app将响应这个类作为controller_name对应的动作。
*/
var controllersNameRegister = {};

// 登录验证，如果没有登陆则进入login界面
controllersNameRegister.loginCheck = function (req) {
    if (req.session.role != null) {
        return true;
    } else {
        return false;
    }
}

controllersNameRegister.handle = function (app) {
    var fileList = [];
    var getFiles = function (dir) {
        fs.readdirSync(dir).forEach(file => {
            // console.log(file);
            var fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                getFiles(path.join(dir, file));
            } else {
                fileList.push(path.join(dir, file));
            }
        });
    }
    getFiles(__dirname + '/../../controllers/');
    fileList.forEach(file => {
        var obj = require(file);
        app.get(obj.controller_name, (req, res)=> obj.get(req, res));
        app.post(obj.controller_name, (req, res)=> obj.post(req, res));
        /*
        // 增加登录验证
        app.get(obj.controller_name, (req, res) => {
            if (obj.controller_name == '/login' || controllersNameRegister.loginCheck(req)) obj.get(req, res);
            else res.render('login');
        });
        app.post(obj.controller_name, (req, res) => {
            if (obj.controller_name == '/login' || controllersNameRegister.loginCheck(req)) obj.post(req, res);
            else res.render('login');
        });
        */
    });
}

module.exports = controllersNameRegister;