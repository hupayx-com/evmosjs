// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: ethermint/types/v1/web3.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ethermint.types.v1 {
    export class ExtensionOptionsWeb3Tx extends pb_1.Message {
        constructor(data?: any[] | {
            typed_data_chain_id?: number;
            fee_payer?: string;
            fee_payer_sig?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("typed_data_chain_id" in data && data.typed_data_chain_id != undefined) {
                    this.typed_data_chain_id = data.typed_data_chain_id;
                }
                if ("fee_payer" in data && data.fee_payer != undefined) {
                    this.fee_payer = data.fee_payer;
                }
                if ("fee_payer_sig" in data && data.fee_payer_sig != undefined) {
                    this.fee_payer_sig = data.fee_payer_sig;
                }
            }
        }
        get typed_data_chain_id() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set typed_data_chain_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get fee_payer() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set fee_payer(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get fee_payer_sig() {
            return pb_1.Message.getField(this, 3) as Uint8Array;
        }
        set fee_payer_sig(value: Uint8Array) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            typed_data_chain_id?: number;
            fee_payer?: string;
            fee_payer_sig?: Uint8Array;
        }) {
            const message = new ExtensionOptionsWeb3Tx({});
            if (data.typed_data_chain_id != null) {
                message.typed_data_chain_id = data.typed_data_chain_id;
            }
            if (data.fee_payer != null) {
                message.fee_payer = data.fee_payer;
            }
            if (data.fee_payer_sig != null) {
                message.fee_payer_sig = data.fee_payer_sig;
            }
            return message;
        }
        toObject() {
            const data: {
                typed_data_chain_id?: number;
                fee_payer?: string;
                fee_payer_sig?: Uint8Array;
            } = {};
            if (this.typed_data_chain_id != null) {
                data.typed_data_chain_id = this.typed_data_chain_id;
            }
            if (this.fee_payer != null) {
                data.fee_payer = this.fee_payer;
            }
            if (this.fee_payer_sig != null) {
                data.fee_payer_sig = this.fee_payer_sig;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.typed_data_chain_id !== undefined)
                writer.writeUint64(1, this.typed_data_chain_id);
            if (typeof this.fee_payer === "string" && this.fee_payer.length)
                writer.writeString(2, this.fee_payer);
            if (this.fee_payer_sig !== undefined)
                writer.writeBytes(3, this.fee_payer_sig);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtensionOptionsWeb3Tx {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExtensionOptionsWeb3Tx();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.typed_data_chain_id = reader.readUint64();
                        break;
                    case 2:
                        message.fee_payer = reader.readString();
                        break;
                    case 3:
                        message.fee_payer_sig = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ExtensionOptionsWeb3Tx {
            return ExtensionOptionsWeb3Tx.deserialize(bytes);
        }
    }
}
