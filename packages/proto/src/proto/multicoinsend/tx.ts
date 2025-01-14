// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: multicoinsend/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../gogoproto/gogo";
import * as dependency_2 from "./../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export namespace hupayxcom.multicoinsend.multicoinsend {
    export class MsgCoinSend extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            creator?: string;
            receivers?: Receiver[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("creator" in data && data.creator != undefined) {
                    this.creator = data.creator;
                }
                if ("receivers" in data && data.receivers != undefined) {
                    this.receivers = data.receivers;
                }
            }
        }
        get creator() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set creator(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get receivers() {
            return pb_1.Message.getRepeatedWrapperField(this, Receiver, 2) as Receiver[];
        }
        set receivers(value: Receiver[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            creator?: string;
            receivers?: ReturnType<typeof Receiver.prototype.toObject>[];
        }) {
            const message = new MsgCoinSend({});
            if (data.creator != null) {
                message.creator = data.creator;
            }
            if (data.receivers != null) {
                message.receivers = data.receivers.map(item => Receiver.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                creator?: string;
                receivers?: ReturnType<typeof Receiver.prototype.toObject>[];
            } = {};
            if (this.creator != null) {
                data.creator = this.creator;
            }
            if (this.receivers != null) {
                data.receivers = this.receivers.map((item: Receiver) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.creator === "string" && this.creator.length)
                writer.writeString(1, this.creator);
            if (this.receivers !== undefined)
                writer.writeRepeatedMessage(2, this.receivers, (item: Receiver) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCoinSend {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCoinSend();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.creator = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.receivers, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Receiver.deserialize(reader), Receiver));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCoinSend {
            return MsgCoinSend.deserialize(bytes);
        }
    }
    export class Receiver extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            to?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("to" in data && data.to != undefined) {
                    this.to = data.to;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get to() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set to(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 2) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            to?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new Receiver({});
            if (data.to != null) {
                message.to = data.to;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                to?: string;
                amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.to != null) {
                data.to = this.to;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.to === "string" && this.to.length)
                writer.writeString(1, this.to);
            if (this.amount !== undefined)
                writer.writeRepeatedMessage(2, this.amount, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Receiver {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Receiver();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.to = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Receiver {
            return Receiver.deserialize(bytes);
        }
    }
    export class MsgCoinSendResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            cntValue?: string;
            totalAmount?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("cntValue" in data && data.cntValue != undefined) {
                    this.cntValue = data.cntValue;
                }
                if ("totalAmount" in data && data.totalAmount != undefined) {
                    this.totalAmount = data.totalAmount;
                }
            }
        }
        get cntValue() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set cntValue(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get totalAmount() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set totalAmount(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            cntValue?: string;
            totalAmount?: string;
        }) {
            const message = new MsgCoinSendResponse({});
            if (data.cntValue != null) {
                message.cntValue = data.cntValue;
            }
            if (data.totalAmount != null) {
                message.totalAmount = data.totalAmount;
            }
            return message;
        }
        toObject() {
            const data: {
                cntValue?: string;
                totalAmount?: string;
            } = {};
            if (this.cntValue != null) {
                data.cntValue = this.cntValue;
            }
            if (this.totalAmount != null) {
                data.totalAmount = this.totalAmount;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.cntValue === "string" && this.cntValue.length)
                writer.writeString(1, this.cntValue);
            if (typeof this.totalAmount === "string" && this.totalAmount.length)
                writer.writeString(2, this.totalAmount);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCoinSendResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCoinSendResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.cntValue = reader.readString();
                        break;
                    case 2:
                        message.totalAmount = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCoinSendResponse {
            return MsgCoinSendResponse.deserialize(bytes);
        }
    }
}
