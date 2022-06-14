// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: evmos/erc20/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./erc20";
import * as dependency_2 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace evmos.erc20.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            params?: Params;
            token_pairs?: dependency_1.evmos.erc20.v1.TokenPair[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("token_pairs" in data && data.token_pairs != undefined) {
                    this.token_pairs = data.token_pairs;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, Params, 1) as Params;
        }
        set params(value: Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get token_pairs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.evmos.erc20.v1.TokenPair, 2) as dependency_1.evmos.erc20.v1.TokenPair[];
        }
        set token_pairs(value: dependency_1.evmos.erc20.v1.TokenPair[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            token_pairs?: ReturnType<typeof dependency_1.evmos.erc20.v1.TokenPair.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = Params.fromObject(data.params);
            }
            if (data.token_pairs != null) {
                message.token_pairs = data.token_pairs.map(item => dependency_1.evmos.erc20.v1.TokenPair.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof Params.prototype.toObject>;
                token_pairs?: ReturnType<typeof dependency_1.evmos.erc20.v1.TokenPair.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.token_pairs != null) {
                data.token_pairs = this.token_pairs.map((item: dependency_1.evmos.erc20.v1.TokenPair) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.token_pairs !== undefined)
                writer.writeRepeatedMessage(2, this.token_pairs, (item: dependency_1.evmos.erc20.v1.TokenPair) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.token_pairs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.evmos.erc20.v1.TokenPair.deserialize(reader), dependency_1.evmos.erc20.v1.TokenPair));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            enable_erc20?: boolean;
            enable_evm_hook?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("enable_erc20" in data && data.enable_erc20 != undefined) {
                    this.enable_erc20 = data.enable_erc20;
                }
                if ("enable_evm_hook" in data && data.enable_evm_hook != undefined) {
                    this.enable_evm_hook = data.enable_evm_hook;
                }
            }
        }
        get enable_erc20() {
            return pb_1.Message.getField(this, 1) as boolean;
        }
        set enable_erc20(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get enable_evm_hook() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set enable_evm_hook(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            enable_erc20?: boolean;
            enable_evm_hook?: boolean;
        }) {
            const message = new Params({});
            if (data.enable_erc20 != null) {
                message.enable_erc20 = data.enable_erc20;
            }
            if (data.enable_evm_hook != null) {
                message.enable_evm_hook = data.enable_evm_hook;
            }
            return message;
        }
        toObject() {
            const data: {
                enable_erc20?: boolean;
                enable_evm_hook?: boolean;
            } = {};
            if (this.enable_erc20 != null) {
                data.enable_erc20 = this.enable_erc20;
            }
            if (this.enable_evm_hook != null) {
                data.enable_evm_hook = this.enable_evm_hook;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.enable_erc20 !== undefined)
                writer.writeBool(1, this.enable_erc20);
            if (this.enable_evm_hook !== undefined)
                writer.writeBool(2, this.enable_evm_hook);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.enable_erc20 = reader.readBool();
                        break;
                    case 2:
                        message.enable_evm_hook = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
