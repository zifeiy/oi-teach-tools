var fs = require('fs');

module.exports = {
    calc: function (old_rating, contest_status) {
        var userMap = {};
        contest_status.forEach( user => userMap[user.name] = {
            "points": user.points,
            "rating": 1500
        } );
        old_rating.forEach( user => {
            if (userMap[user.name] != null) {
                userMap[user.name].rating = user.rating;
            }
        } );
        var expectedPointsArr = contest_status.map(ele => { return ele.points }).sort();
        var userArr = Object.keys(userMap).map( name => { return {
            "name": name,
            "points": userMap[name].points,
            "rating": userMap[name].rating
        } } );
        var cmp = function (a, b) {
            return a.rating - b.rating;
        }
        userArr.sort(cmp);
        for (var i = 0; i < userArr.length; i ++) 
            userArr[i].expected_points = expectedPointsArr[i];
        userArr.forEach( user => {
            // user.new_rating = Math.floor( user.rating + 150 * ( 0.5 - 1./(1. + Math.pow(10. , (user.points-user.expected_points)/2000.)) ) );
            user.delta_rating = Math.floor( 150 * ( 0.5 - 1./(1. + Math.pow(10. , (user.points-user.expected_points)/2000.)) ) );
            user.new_rating = user.rating + user.delta_rating;
            fs.writeFileSync(`${__dirname}/../data/new_rating.json`, JSON.stringify(userArr), 'utf8');
        } );

    }
};