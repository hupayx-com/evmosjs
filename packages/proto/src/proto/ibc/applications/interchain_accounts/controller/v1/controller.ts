// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: ibc/applications/interchain_accounts/controller/v1/controller.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.controller.v1 {
    export class Params extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            controller_enabled?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("controller_enabled" in data && data.controller_enabled != undefined) {
                    this.controller_enabled = data.controller_enabled;
                }
            }
        }
        get controller_enabled() {
            return pb_1.Message.getField(this, 1) as boolean;
        }
        set controller_enabled(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            controller_enabled?: boolean;
        }) {
            const message = new Params({});
            if (data.controller_enabled != null) {
                message.controller_enabled = data.controller_enabled;
            }
            return message;
        }
        toObject() {
            const data: {
                controller_enabled?: boolean;
            } = {};
            if (this.controller_enabled != null) {
                data.controller_enabled = this.controller_enabled;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.controller_enabled !== undefined)
                writer.writeBool(1, this.controller_enabled);
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
                        message.controller_enabled = reader.readBool();
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
