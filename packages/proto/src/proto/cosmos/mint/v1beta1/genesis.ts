// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/mint/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./mint";
import * as pb_1 from "google-protobuf";
export namespace cosmos.mint.v1beta1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            minter?: dependency_2.cosmos.mint.v1beta1.Minter;
            params?: dependency_2.cosmos.mint.v1beta1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("minter" in data && data.minter != undefined) {
                    this.minter = data.minter;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get minter() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.mint.v1beta1.Minter, 1) as dependency_2.cosmos.mint.v1beta1.Minter;
        }
        set minter(value: dependency_2.cosmos.mint.v1beta1.Minter) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.mint.v1beta1.Params, 2) as dependency_2.cosmos.mint.v1beta1.Params;
        }
        set params(value: dependency_2.cosmos.mint.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            minter?: ReturnType<typeof dependency_2.cosmos.mint.v1beta1.Minter.prototype.toObject>;
            params?: ReturnType<typeof dependency_2.cosmos.mint.v1beta1.Params.prototype.toObject>;
        }) {
            const message = new GenesisState({});
            if (data.minter != null) {
                message.minter = dependency_2.cosmos.mint.v1beta1.Minter.fromObject(data.minter);
            }
            if (data.params != null) {
                message.params = dependency_2.cosmos.mint.v1beta1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                minter?: ReturnType<typeof dependency_2.cosmos.mint.v1beta1.Minter.prototype.toObject>;
                params?: ReturnType<typeof dependency_2.cosmos.mint.v1beta1.Params.prototype.toObject>;
            } = {};
            if (this.minter != null) {
                data.minter = this.minter.toObject();
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.minter !== undefined)
                writer.writeMessage(1, this.minter, () => this.minter.serialize(writer));
            if (this.params !== undefined)
                writer.writeMessage(2, this.params, () => this.params.serialize(writer));
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
                        reader.readMessage(message.minter, () => message.minter = dependency_2.cosmos.mint.v1beta1.Minter.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.params, () => message.params = dependency_2.cosmos.mint.v1beta1.Params.deserialize(reader));
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
}
