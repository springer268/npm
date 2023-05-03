import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
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
export declare const ServerInfo: {
    encode(message: ServerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerInfo;
    fromJSON(object: any): ServerInfo;
    toJSON(message: ServerInfo): unknown;
    create<I extends {
        server?: string | undefined;
    } & {
        server?: string | undefined;
    } & { [K in Exclude<keyof I, "server">]: never; }>(base?: I | undefined): ServerInfo;
    fromPartial<I_1 extends {
        server?: string | undefined;
    } & {
        server?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "server">]: never; }>(object: I_1): ServerInfo;
};
export declare const VmList: {
    encode(message: VmList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VmList;
    fromJSON(object: any): VmList;
    toJSON(message: VmList): unknown;
    create<I extends {
        vms?: string[] | undefined;
    } & {
        vms?: (string[] & string[] & { [K in Exclude<keyof I["vms"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "vms">]: never; }>(base?: I | undefined): VmList;
    fromPartial<I_1 extends {
        vms?: string[] | undefined;
    } & {
        vms?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["vms"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "vms">]: never; }>(object: I_1): VmList;
};
export declare const BenchmarkMessage: {
    encode(message: BenchmarkMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BenchmarkMessage;
    fromJSON(object: any): BenchmarkMessage;
    toJSON(message: BenchmarkMessage): unknown;
    create<I extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & { [K in Exclude<keyof I, "text">]: never; }>(base?: I | undefined): BenchmarkMessage;
    fromPartial<I_1 extends {
        text?: string | undefined;
    } & {
        text?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "text">]: never; }>(object: I_1): BenchmarkMessage;
};
export declare const voidNoParam: {
    encode(_: voidNoParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): voidNoParam;
    fromJSON(_: any): voidNoParam;
    toJSON(_: voidNoParam): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): voidNoParam;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): voidNoParam;
};
export type BenchmarksService = typeof BenchmarksService;
export declare const BenchmarksService: {
    readonly runKBench: {
        readonly path: "/benchmarks.Benchmarks/runKBench";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: voidNoParam) => Buffer;
        readonly requestDeserialize: (value: Buffer) => voidNoParam;
        readonly responseSerialize: (value: BenchmarkMessage) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BenchmarkMessage;
    };
    readonly sayHello: {
        readonly path: "/benchmarks.Benchmarks/sayHello";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: voidNoParam) => Buffer;
        readonly requestDeserialize: (value: Buffer) => voidNoParam;
        readonly responseSerialize: (value: BenchmarkMessage) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BenchmarkMessage;
    };
    readonly getVMs: {
        readonly path: "/benchmarks.Benchmarks/getVMs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ServerInfo) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ServerInfo;
        readonly responseSerialize: (value: VmList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => VmList;
    };
    readonly getVMs2: {
        readonly path: "/benchmarks.Benchmarks/getVMs2";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ServerInfo) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ServerInfo;
        readonly responseSerialize: (value: VmList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => VmList;
    };
};
export interface BenchmarksServer extends UntypedServiceImplementation {
    runKBench: handleServerStreamingCall<voidNoParam, BenchmarkMessage>;
    sayHello: handleUnaryCall<voidNoParam, BenchmarkMessage>;
    getVMs: handleUnaryCall<ServerInfo, VmList>;
    getVMs2: handleUnaryCall<ServerInfo, VmList>;
}
export interface BenchmarksClient extends Client {
    runKBench(request: voidNoParam, options?: Partial<CallOptions>): ClientReadableStream<BenchmarkMessage>;
    runKBench(request: voidNoParam, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<BenchmarkMessage>;
    sayHello(request: voidNoParam, callback: (error: ServiceError | null, response: BenchmarkMessage) => void): ClientUnaryCall;
    sayHello(request: voidNoParam, metadata: Metadata, callback: (error: ServiceError | null, response: BenchmarkMessage) => void): ClientUnaryCall;
    sayHello(request: voidNoParam, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BenchmarkMessage) => void): ClientUnaryCall;
    getVMs(request: ServerInfo, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
    getVMs(request: ServerInfo, metadata: Metadata, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
    getVMs(request: ServerInfo, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
    getVMs2(request: ServerInfo, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
    getVMs2(request: ServerInfo, metadata: Metadata, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
    getVMs2(request: ServerInfo, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: VmList) => void): ClientUnaryCall;
}
export declare const BenchmarksClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BenchmarksClient;
    service: typeof BenchmarksService;
};
export type WCPService = typeof WCPService;
export declare const WCPService: {
    readonly deployVc: {
        readonly path: "/benchmarks.WCP/deployVC";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: voidNoParam) => Buffer;
        readonly requestDeserialize: (value: Buffer) => voidNoParam;
        readonly responseSerialize: (value: BenchmarkMessage) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BenchmarkMessage;
    };
};
export interface WCPServer extends UntypedServiceImplementation {
    deployVc: handleServerStreamingCall<voidNoParam, BenchmarkMessage>;
}
export interface WCPClient extends Client {
    deployVc(request: voidNoParam, options?: Partial<CallOptions>): ClientReadableStream<BenchmarkMessage>;
    deployVc(request: voidNoParam, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<BenchmarkMessage>;
}
export declare const WCPClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): WCPClient;
    service: typeof WCPService;
};
