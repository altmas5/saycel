var fs = require('fs');
var _ = require('underscore')
var csv = require("fast-csv");

csv.fromPath("rates.sql").on("data", function(data){
    h = _.findWhere(cwu_ar, {ext: data[3].replace(/\W+/g, "")});
    if (h != undefined){
        data[4] = h.cost + ");"
        console.log(data.toString().replace(/\\/g,""))
    }else{
        console.log(data.toString().replace(/\\/g,""))
    }
 }).on("end", function(){})