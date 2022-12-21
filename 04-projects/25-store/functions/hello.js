// domain/.netlify/functions/hello
exports.handler = async (event, context) => ({
  statusCode: 200,
  body: 'Hello World'
});
