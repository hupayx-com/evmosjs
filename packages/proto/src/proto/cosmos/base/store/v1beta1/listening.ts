// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/base/store/v1beta1/listening.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.store.v1beta1 {
    export class StoreKVPair extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            store_key?: string;
            delete?: boolean;
            key?: Uint8Array;
            value?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("store_key" in data && data.store_key != undefined) {
                    this.store_key = data.store_key;
                }
                if ("delete" in data && data.delete != undefined) {
                    this.delete = data.delete;
                }
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get store_key() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set store_key(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get delete() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set delete(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        get key() {
            return pb_1.Message.getField(this, 3) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 3, value);
        }
        get value() {
            return pb_1.Message.getField(this, 4) as Uint8Array;
        }
        set value(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            store_key?: string;
            delete?: boolean;
            key?: Uint8Array;
            value?: Uint8Array;
        }) {
            const message = new StoreKVPair({});
            if (data.store_key != null) {
                message.store_key = data.store_key;
            }
            if (data.delete != null) {
                message.delete = data.delete;
            }
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                store_key?: string;
                delete?: boolean;
                key?: Uint8Array;
                value?: Uint8Array;
            } = {};
            if (this.store_key != null) {
                data.store_key = this.store_key;
            }
            if (this.delete != null) {
                data.delete = this.delete;
            }
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.store_key === "string" && this.store_key.length)
                writer.writeString(1, this.store_key);
            if (this.delete !== undefined)
                writer.writeBool(2, this.delete);
            if (this.key !== undefined)
                writer.writeBytes(3, this.key);
            if (this.value !== undefined)
                writer.writeBytes(4, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StoreKVPair {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StoreKVPair();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.store_key = reader.readString();
                        break;
                    case 2:
                        message.delete = reader.readBool();
                        break;
                    case 3:
                        message.key = reader.readBytes();
                        break;
                    case 4:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): StoreKVPair {
            return StoreKVPair.deserialize(bytes);
        }
    }
}
