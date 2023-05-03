"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WCPClient = exports.WCPService = exports.BenchmarksClient = exports.BenchmarksService = exports.voidNoParam = exports.BenchmarkMessage = exports.VmList = exports.ServerInfo = exports.DeployVCInfo = exports.HostInfo = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseHostInfo() {
    return { fqdn: "", password: "", datastore: "" };
}
exports.HostInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fqdn !== "") {
            writer.uint32(10).string(message.fqdn);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        if (message.datastore !== "") {
            writer.uint32(26).string(message.datastore);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fqdn = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.datastore = reader.string();
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
        return {
            fqdn: isSet(object.fqdn) ? String(object.fqdn) : "",
            password: isSet(object.password) ? String(object.password) : "",
            datastore: isSet(object.datastore) ? String(object.datastore) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.fqdn !== undefined && (obj.fqdn = message.fqdn);
        message.password !== undefined && (obj.password = message.password);
        message.datastore !== undefined && (obj.datastore = message.datastore);
        return obj;
    },
    create(base) {
        return exports.HostInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseHostInfo();
        message.fqdn = (_a = object.fqdn) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        message.datastore = (_c = object.datastore) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDeployVCInfo() {
    return {
        host: undefined,
        prefix: "",
        build: undefined,
        password: undefined,
        vmName: undefined,
        ip: "",
        user: undefined,
        featureStates: [],
        size: undefined,
        gateway: "",
    };
}
exports.DeployVCInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== undefined) {
            exports.HostInfo.encode(message.host, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix !== "") {
            writer.uint32(18).string(message.prefix);
        }
        if (message.build !== undefined) {
            writer.uint32(26).string(message.build);
        }
        if (message.password !== undefined) {
            writer.uint32(34).string(message.password);
        }
        if (message.vmName !== undefined) {
            writer.uint32(42).string(message.vmName);
        }
        if (message.ip !== "") {
            writer.uint32(50).string(message.ip);
        }
        if (message.user !== undefined) {
            writer.uint32(58).string(message.user);
        }
        for (const v of message.featureStates) {
            writer.uint32(66).string(v);
        }
        if (message.size !== undefined) {
            writer.uint32(74).string(message.size);
        }
        if (message.gateway !== "") {
            writer.uint32(82).string(message.gateway);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeployVCInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.host = exports.HostInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.prefix = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.build = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.vmName = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ip = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.user = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.featureStates.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.size = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.gateway = reader.string();
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
        return {
            host: isSet(object.host) ? exports.HostInfo.fromJSON(object.host) : undefined,
            prefix: isSet(object.prefix) ? String(object.prefix) : "",
            build: isSet(object.build) ? String(object.build) : undefined,
            password: isSet(object.password) ? String(object.password) : undefined,
            vmName: isSet(object.vmName) ? String(object.vmName) : undefined,
            ip: isSet(object.ip) ? String(object.ip) : "",
            user: isSet(object.user) ? String(object.user) : undefined,
            featureStates: Array.isArray(object === null || object === void 0 ? void 0 : object.featureStates) ? object.featureStates.map((e) => String(e)) : [],
            size: isSet(object.size) ? String(object.size) : undefined,
            gateway: isSet(object.gateway) ? String(object.gateway) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host ? exports.HostInfo.toJSON(message.host) : undefined);
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.build !== undefined && (obj.build = message.build);
        message.password !== undefined && (obj.password = message.password);
        message.vmName !== undefined && (obj.vmName = message.vmName);
        message.ip !== undefined && (obj.ip = message.ip);
        message.user !== undefined && (obj.user = message.user);
        if (message.featureStates) {
            obj.featureStates = message.featureStates.map((e) => e);
        }
        else {
            obj.featureStates = [];
        }
        message.size !== undefined && (obj.size = message.size);
        message.gateway !== undefined && (obj.gateway = message.gateway);
        return obj;
    },
    create(base) {
        return exports.DeployVCInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseDeployVCInfo();
        message.host = (object.host !== undefined && object.host !== null) ? exports.HostInfo.fromPartial(object.host) : undefined;
        message.prefix = (_a = object.prefix) !== null && _a !== void 0 ? _a : "";
        message.build = (_b = object.build) !== null && _b !== void 0 ? _b : undefined;
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : undefined;
        message.vmName = (_d = object.vmName) !== null && _d !== void 0 ? _d : undefined;
        message.ip = (_e = object.ip) !== null && _e !== void 0 ? _e : "";
        message.user = (_f = object.user) !== null && _f !== void 0 ? _f : undefined;
        message.featureStates = ((_g = object.featureStates) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.size = (_h = object.size) !== null && _h !== void 0 ? _h : undefined;
        message.gateway = (_j = object.gateway) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
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
exports.WCPService = {
    deployVc: {
        path: "/benchmarks.WCP/deployVC",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(exports.DeployVCInfo.encode(value).finish()),
        requestDeserialize: (value) => exports.DeployVCInfo.decode(value),
        responseSerialize: (value) => Buffer.from(exports.BenchmarkMessage.encode(value).finish()),
        responseDeserialize: (value) => exports.BenchmarkMessage.decode(value),
    },
};
exports.WCPClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.WCPService, "benchmarks.WCP");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=benchmarks.js.map