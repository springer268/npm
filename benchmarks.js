"use strict";
exports.__esModule = true;
exports.BenchmarksClient = exports.BenchmarksService = exports.voidNoParam = exports.BenchmarkMessage = exports.VmList = exports.ServerInfo = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = require("protobufjs/minimal");
function createBaseServerInfo() {
    return { server: "" };
}
exports.ServerInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.server !== "") {
            writer.uint32(10).string(message.server);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.server = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { server: isSet(object.server) ? String(object.server) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.server !== undefined && (obj.server = message.server);
        return obj;
    },
    create: function (base) {
        return exports.ServerInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseServerInfo();
        message.server = (_a = object.server) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseVmList() {
    return { vms: [] };
}
exports.VmList = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.vms; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVmList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.vms.push(reader.string());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { vms: Array.isArray(object === null || object === void 0 ? void 0 : object.vms) ? object.vms.map(function (e) { return String(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.vms) {
            obj.vms = message.vms.map(function (e) { return e; });
        }
        else {
            obj.vms = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.VmList.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseVmList();
        message.vms = ((_a = object.vms) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseBenchmarkMessage() {
    return { text: "" };
}
exports.BenchmarkMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBenchmarkMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { text: isSet(object.text) ? String(object.text) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    create: function (base) {
        return exports.BenchmarkMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBenchmarkMessage();
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBasevoidNoParam() {
    return {};
}
exports.voidNoParam = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasevoidNoParam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.voidNoParam.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBasevoidNoParam();
        return message;
    }
};
exports.BenchmarksService = {
    runKBench: {
        path: "/benchmarks.Benchmarks/runKBench",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(exports.voidNoParam.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.voidNoParam.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.BenchmarkMessage.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.BenchmarkMessage.decode(value); }
    },
    sayHello: {
        path: "/benchmarks.Benchmarks/sayHello",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.voidNoParam.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.voidNoParam.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.BenchmarkMessage.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.BenchmarkMessage.decode(value); }
    },
    getVMs: {
        path: "/benchmarks.Benchmarks/getVMs",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.ServerInfo.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.ServerInfo.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.VmList.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.VmList.decode(value); }
    }
};
exports.BenchmarksClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BenchmarksService, "benchmarks.Benchmarks");
function isSet(value) {
    return value !== null && value !== undefined;
}
