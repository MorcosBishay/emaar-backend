"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
dotenv_1.default.config();
(0, config_1.connectDB)();
const PORT = process.env.PORT || 4000;
app_1.default.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=server.js.map