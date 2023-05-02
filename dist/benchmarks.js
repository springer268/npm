"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenchmarksClient = exports.BenchmarksService = exports.voidNoParam = exports.BenchmarkMessage = exports.VmList = exports.ServerInfo = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseServerInfo() {
    return { server: "" };
}
exports.ServerInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.server !== "") {
            writer.uint32(10).string(message.server);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.server = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { server: isSet(object.server) ? String(object.server) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.server !== undefined && (obj.server = message.server);
        return obj;
    },
    create(base) {
        return exports.ServerInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseServerInfo();
        message.server = (_a = object.server) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseVmList() {
    return { vms: [] };
}
exports.VmList = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVmList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.vms.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { vms: Array.isArray(object === null || object === void 0 ? void 0 : object.vms) ? object.vms.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.vms) {
            obj.vms = message.vms.map((e) => e);
        }
        else {
            obj.vms = [];
        }
        return obj;
    },
    create(base) {
        return exports.VmList.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVmList();
        message.vms = ((_a = object.vms) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseBenchmarkMessage() {
    return { text: "" };
}
exports.BenchmarkMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBenchmarkMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { text: isSet(object.text) ? String(object.text) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    create(base) {
        return exports.BenchmarkMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBenchmarkMessage();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasevoidNoParam() {
    return {};
}
exports.voidNoParam = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasevoidNoParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.voidNoParam.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBasevoidNoParam();
        return message;
    },
};
exports.BenchmarksService = {
    runKBench: {
        path: "/benchmarks.Benchmarks/runKBench",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.voidNoParam.encode(value).finish()),
        requestDeserialize: (value) => exports.voidNoParam.decode(value),
        responseSerialize: (value) => Buffer.from(exports.BenchmarkMessage.encode(value).finish()),
        responseDeserialize: (value) => exports.BenchmarkMessage.decode(value),
    },
    sayHello: {
        path: "/benchmarks.Benchmarks/sayHello",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.voidNoParam.encode(value).finish()),
        requestDeserialize: (value) => exports.voidNoParam.decode(value),
        responseSerialize: (value) => Buffer.from(exports.BenchmarkMessage.encode(value).finish()),
        responseDeserialize: (value) => exports.BenchmarkMessage.decode(value),
    },
    getVMs: {
        path: "/benchmarks.Benchmarks/getVMs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ServerInfo.encode(value).finish()),
        requestDeserialize: (value) => exports.ServerInfo.decode(value),
        responseSerialize: (value) => Buffer.from(exports.VmList.encode(value).finish()),
        responseDeserialize: (value) => exports.VmList.decode(value),
    },
    getVMs2: {
        path: "/benchmarks.Benchmarks/getVMs2",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ServerInfo.encode(value).finish()),
        requestDeserialize: (value) => exports.ServerInfo.decode(value),
        responseSerialize: (value) => Buffer.from(exports.VmList.encode(value).finish()),
        responseDeserialize: (value) => exports.VmList.decode(value),
    },
};
exports.BenchmarksClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BenchmarksService, "benchmarks.Benchmarks");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=benchmarks.js.map