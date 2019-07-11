/**
 * zifeiy: elo_rating
 * 这个脚本用于计算新的rating
 */
var fs = require('fs');
var rating_calc = require('./libs/rating_calc');

var old_rating = JSON.parse(fs.readFileSync(`${__dirname}/data/old_rating.json`, 'utf8'));
var contest_status = JSON.parse(fs.readFileSync(`${__dirname}/data/contest_status.json`, 'utf8'));

rating_calc.calc(old_rating, contest_status);