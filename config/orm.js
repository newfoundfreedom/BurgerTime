const connection = require("./connection.js");

var orm = {
//     selectAll: function(whatToSelect, tableInput) {
//         var queryString = "SELECT ?? FROM ??";
//         connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             console.log(result);
//         });
//     },
//     insertOne: function(tableInput, colToSearch, valOfCol) {
//         var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//
//         console.log(queryString);
//
//         connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//             console.log(result);
//         });
//     },
//     updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
//         var queryString = "SELECT ?? FROM ?? AS tOne";
//         queryString = queryString + " LEFT JOIN ?? AS tTwo";
//         queryString = queryString + " ON tOne.?? = tTwo.??";
//
//         console.log(queryString);
//
//         connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
//             console.log(result);
//         });
//     }
};

module.exports = orm;