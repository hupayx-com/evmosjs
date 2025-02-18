// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/base/store/v1beta1/snapshot.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.store.v1beta1 {
    export class SnapshotItem extends pb_1.Message {
        #one_of_decls = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            store?: SnapshotStoreItem;
            iavl?: never;
        } | {
            store?: never;
            iavl?: SnapshotIAVLItem;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("store" in data && data.store != undefined) {
                    this.store = data.store;
                }
                if ("iavl" in data && data.iavl != undefined) {
                    this.iavl = data.iavl;
                }
            }
        }
        get store() {
            return pb_1.Message.getWrapperField(this, SnapshotStoreItem, 1) as SnapshotStoreItem;
        }
        set store(value: SnapshotStoreItem) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get iavl() {
            return pb_1.Message.getWrapperField(this, SnapshotIAVLItem, 2) as SnapshotIAVLItem;
        }
        set iavl(value: SnapshotIAVLItem) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get item() {
            const cases: {
                [index: number]: "none" | "store" | "iavl";
            } = {
                0: "none",
                1: "store",
                2: "iavl"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            store?: ReturnType<typeof SnapshotStoreItem.prototype.toObject>;
            iavl?: ReturnType<typeof SnapshotIAVLItem.prototype.toObject>;
        }) {
            const message = new SnapshotItem({});
            if (data.store != null) {
                message.store = SnapshotStoreItem.fromObject(data.store);
            }
            if (data.iavl != null) {
                message.iavl = SnapshotIAVLItem.fromObject(data.iavl);
            }
            return message;
        }
        toObject() {
            const data: {
                store?: ReturnType<typeof SnapshotStoreItem.prototype.toObject>;
                iavl?: ReturnType<typeof SnapshotIAVLItem.prototype.toObject>;
            } = {};
            if (this.store != null) {
                data.store = this.store.toObject();
            }
            if (this.iavl != null) {
                data.iavl = this.iavl.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.store !== undefined)
                writer.writeMessage(1, this.store, () => this.store.serialize(writer));
            if (this.iavl !== undefined)
                writer.writeMessage(2, this.iavl, () => this.iavl.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.store, () => message.store = SnapshotStoreItem.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.iavl, () => message.iavl = SnapshotIAVLItem.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotItem {
            return SnapshotItem.deserialize(bytes);
        }
    }
    export class SnapshotStoreItem extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get name() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            name?: string;
        }) {
            const message = new SnapshotStoreItem({});
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotStoreItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotStoreItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotStoreItem {
            return SnapshotStoreItem.deserialize(bytes);
        }
    }
    export class SnapshotIAVLItem extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: number;
            height?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
            }
        }
        get key() {
            return pb_1.Message.getField(this, 1) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get value() {
            return pb_1.Message.getField(this, 2) as Uint8Array;
        }
        set value(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get version() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set version(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get height() {
            return pb_1.Message.getField(this, 4) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
            version?: number;
            height?: number;
        }) {
            const message = new SnapshotIAVLItem({});
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            if (data.height != null) {
                message.height = data.height;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: Uint8Array;
                value?: Uint8Array;
                version?: number;
                height?: number;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            if (this.height != null) {
                data.height = this.height;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key !== undefined)
                writer.writeBytes(1, this.key);
            if (this.value !== undefined)
                writer.writeBytes(2, this.value);
            if (this.version !== undefined)
                writer.writeInt64(3, this.version);
            if (this.height !== undefined)
                writer.writeInt32(4, this.height);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotIAVLItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotIAVLItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readBytes();
                        break;
                    case 2:
                        message.value = reader.readBytes();
                        break;
                    case 3:
                        message.version = reader.readInt64();
                        break;
                    case 4:
                        message.height = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotIAVLItem {
            return SnapshotIAVLItem.deserialize(bytes);
        }
    }
}
