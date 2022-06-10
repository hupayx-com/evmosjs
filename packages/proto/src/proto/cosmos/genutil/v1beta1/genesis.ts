// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/genutil/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.genutil.v1beta1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            gen_txs?: Uint8Array[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("gen_txs" in data && data.gen_txs != undefined) {
                    this.gen_txs = data.gen_txs;
                }
            }
        }
        get gen_txs() {
            return pb_1.Message.getField(this, 1) as Uint8Array[];
        }
        set gen_txs(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            gen_txs?: Uint8Array[];
        }) {
            const message = new GenesisState({});
            if (data.gen_txs != null) {
                message.gen_txs = data.gen_txs;
            }
            return message;
        }
        toObject() {
            const data: {
                gen_txs?: Uint8Array[];
            } = {};
            if (this.gen_txs != null) {
                data.gen_txs = this.gen_txs;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.gen_txs !== undefined)
                writer.writeRepeatedBytes(1, this.gen_txs);
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
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
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
