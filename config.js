let PORT = process.env.PORT || 8080;
let connectionString =
    "mongodb+srv://admin:admin123@cluster0.sj3ngcx.mongodb.net/?retryWrites=true&w=majority";
let dbName = "dbtest_night";
let fullUrl =
    "mongodb+srv://admin:admin123@cluster0.sj3ngcx.mongodb.net/" +
    dbName +
    "?retryWrites=true&w=majority";
let PROTOCOL = "https";
let HOST = "backendproyecto-nigth.vercel.app";
let API_ROUTE = "/api/";
let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
let FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;

if (PORT === 80) {
    FULL_PATH = PROTOCOL + "://" + HOST + "/";
    FULL_API_PATH = PROTOCOL + "://" + HOST + API_ROUTE;
}
module.exports = {
    PORT,
    connectionString,
    dbName,
    fullUrl,
    HOST,
    PROTOCOL,
    API_ROUTE,
    FULL_PATH,
    FULL_API_PATH,
};