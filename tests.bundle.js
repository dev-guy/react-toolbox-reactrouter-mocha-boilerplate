//var context = require.context('.', true, /.+\.spec\.jsx?$/);
var context = require.context('./test', true, /.+\.spec\.js?$/);

console.log(context.keys());
context.keys().forEach(context);
module.exports = context;
