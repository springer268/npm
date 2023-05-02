/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientReadableStream,
  ClientUnaryCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export interface ServerInfo {
  server: string;
}

export interface VmList {
  vms: string[];
}

export interface BenchmarkMessage {
  text: string;
}

export interface voidNoParam {
}

function createBaseServerInfo(): ServerInfo {
  return { server: "" };
}

export const ServerInfo = {
  encode(message: ServerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.server !== "") {
      writer.uint32(10).string(message.server);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ServerInfo {
    return { server: isSet(object.server) ? String(object.server) : "" };
  },

  toJSON(message: ServerInfo): unknown {
    const obj: any = {};
    message.server !== undefined && (obj.server = message.server);
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerInfo>, I>>(base?: I): ServerInfo {
    return ServerInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ServerInfo>, I>>(object: I): ServerInfo {
    const message = createBaseServerInfo();
    message.server = object.server ?? "";
    return message;
  },
};

function createBaseVmList(): VmList {
  return { vms: [] };
}

export const VmList = {
  encode(message: VmList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VmList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVmList();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): VmList {
    return { vms: Array.isArray(object?.vms) ? object.vms.map((e: any) => String(e)) : [] };
  },

  toJSON(message: VmList): unknown {
    const obj: any = {};
    if (message.vms) {
      obj.vms = message.vms.map((e) => e);
    } else {
      obj.vms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VmList>, I>>(base?: I): VmList {
    return VmList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VmList>, I>>(object: I): VmList {
    const message = createBaseVmList();
    message.vms = object.vms?.map((e) => e) || [];
    return message;
  },
};

function createBaseBenchmarkMessage(): BenchmarkMessage {
  return { text: "" };
}

export const BenchmarkMessage = {
  encode(message: BenchmarkMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BenchmarkMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBenchmarkMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): BenchmarkMessage {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: BenchmarkMessage): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<BenchmarkMessage>, I>>(base?: I): BenchmarkMessage {
    return BenchmarkMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BenchmarkMessage>, I>>(object: I): BenchmarkMessage {
    const message = createBaseBenchmarkMessage();
    message.text = object.text ?? "";
    return message;
  },
};

function createBasevoidNoParam(): voidNoParam {
  return {};
}

export const voidNoParam = {
  encode(_: voidNoParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): voidNoParam {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevoidNoParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): voidNoParam {
    return {};
  },

  toJSON(_: voidNoParam): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<voidNoParam>, I>>(base?: I): voidNoParam {
    return voidNoParam.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<voidNoParam>, I>>(_: I): voidNoParam {
    const message = createBasevoidNoParam();
    return message;
  },
};

export type BenchmarksService = typeof BenchmarksService;
export const BenchmarksService = {
  runKBench: {
    path: "/benchmarks.Benchmarks/runKBench",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: voidNoParam) => Buffer.from(voidNoParam.encode(value).finish()),
    requestDeserialize: (value: Buffer) => voidNoParam.decode(value),
    responseSerialize: (value: BenchmarkMessage) => Buffer.from(BenchmarkMessage.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BenchmarkMessage.decode(value),
  },
  sayHello: {
    path: "/benchmarks.Benchmarks/sayHello",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: voidNoParam) => Buffer.from(voidNoParam.encode(value).finish()),
    requestDeserialize: (value: Buffer) => voidNoParam.decode(value),
    responseSerialize: (value: BenchmarkMessage) => Buffer.from(BenchmarkMessage.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BenchmarkMessage.decode(value),
  },
  getVMs: {
    path: "/benchmarks.Benchmarks/getVMs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ServerInfo) => Buffer.from(ServerInfo.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServerInfo.decode(value),
    responseSerialize: (value: VmList) => Buffer.from(VmList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => VmList.decode(value),
  },
} as const;

export interface BenchmarksServer extends UntypedServiceImplementation {
  runKBench: handleServerStreamingCall<voidNoParam, BenchmarkMessage>;
  sayHello: handleUnaryCall<voidNoParam, BenchmarkMessage>;
  getVMs: handleUnaryCall<ServerInfo, VmList>;
}

export interface BenchmarksClient extends Client {
  runKBench(request: voidNoParam, options?: Partial<CallOptions>): ClientReadableStream<BenchmarkMessage>;
  runKBench(
    request: voidNoParam,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<BenchmarkMessage>;
  sayHello(
    request: voidNoParam,
    callback: (error: ServiceError | null, response: BenchmarkMessage) => void,
  ): ClientUnaryCall;
  sayHello(
    request: voidNoParam,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BenchmarkMessage) => void,
  ): ClientUnaryCall;
  sayHello(
    request: voidNoParam,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BenchmarkMessage) => void,
  ): ClientUnaryCall;
  getVMs(request: ServerInfo, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
  getVMs(
    request: ServerInfo,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: VmList) => void,
  ): ClientUnaryCall;
  getVMs(
    request: ServerInfo,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: VmList) => void,
  ): ClientUnaryCall;
}

export const BenchmarksClient = makeGenericClientConstructor(BenchmarksService, "benchmarks.Benchmarks") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BenchmarksClient;
  service: typeof BenchmarksService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
