"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
var initializeArray = function (length) {
    var array = [];
    while (array.length < length) {
        var item = Math.floor(Math.random() * 100) + 1;
        if (array.indexOf(item) === -1)
            array.push(item);
    }
    return array;
};
app.post('/api/generate', function (req, res) {
    if (!req.body.length) {
        res.status(400).json({ message: 'Invalid input' });
    }
    var array = initializeArray(req.body.length);
    res.json({ array: array });
});
dotenv_1.default.config();
var PORT = process.env.PORT;
app.listen(PORT, function () { return console.log("Server running at port " + PORT + "..."); });
