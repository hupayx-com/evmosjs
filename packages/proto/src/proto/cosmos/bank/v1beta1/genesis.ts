// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/bank/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./bank";
import * as pb_1 from "google-protobuf";
export namespace cosmos.bank.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            params?: dependency_3.cosmos.bank.v1beta1.Params;
            balances?: Balance[];
            supply?: dependency_2.cosmos.base.v1beta1.Coin[];
            denom_metadata?: dependency_3.cosmos.bank.v1beta1.Metadata[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("balances" in data && data.balances != undefined) {
                    this.balances = data.balances;
                }
                if ("supply" in data && data.supply != undefined) {
                    this.supply = data.supply;
                }
                if ("denom_metadata" in data && data.denom_metadata != undefined) {
                    this.denom_metadata = data.denom_metadata;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.bank.v1beta1.Params, 1) as dependency_3.cosmos.bank.v1beta1.Params;
        }
        set params(value: dependency_3.cosmos.bank.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get balances() {
            return pb_1.Message.getRepeatedWrapperField(this, Balance, 2) as Balance[];
        }
        set balances(value: Balance[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get supply() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set supply(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get denom_metadata() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Metadata, 4) as dependency_3.cosmos.bank.v1beta1.Metadata[];
        }
        set denom_metadata(value: dependency_3.cosmos.bank.v1beta1.Metadata[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Params.prototype.toObject>;
            balances?: ReturnType<typeof Balance.prototype.toObject>[];
            supply?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            denom_metadata?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = dependency_3.cosmos.bank.v1beta1.Params.fromObject(data.params);
            }
            if (data.balances != null) {
                message.balances = data.balances.map(item => Balance.fromObject(item));
            }
            if (data.supply != null) {
                message.supply = data.supply.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.denom_metadata != null) {
                message.denom_metadata = data.denom_metadata.map(item => dependency_3.cosmos.bank.v1beta1.Metadata.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Params.prototype.toObject>;
                balances?: ReturnType<typeof Balance.prototype.toObject>[];
                supply?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                denom_metadata?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.balances != null) {
                data.balances = this.balances.map((item: Balance) => item.toObject());
            }
            if (this.supply != null) {
                data.supply = this.supply.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.denom_metadata != null) {
                data.denom_metadata = this.denom_metadata.map((item: dependency_3.cosmos.bank.v1beta1.Metadata) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.balances !== undefined)
                writer.writeRepeatedMessage(2, this.balances, (item: Balance) => item.serialize(writer));
            if (this.supply !== undefined)
                writer.writeRepeatedMessage(3, this.supply, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.denom_metadata !== undefined)
                writer.writeRepeatedMessage(4, this.denom_metadata, (item: dependency_3.cosmos.bank.v1beta1.Metadata) => item.serialize(writer));
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
                        reader.readMessage(message.params, () => message.params = dependency_3.cosmos.bank.v1beta1.Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.balances, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Balance.deserialize(reader), Balance));
                        break;
                    case 3:
                        reader.readMessage(message.supply, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    case 4:
                        reader.readMessage(message.denom_metadata, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_3.cosmos.bank.v1beta1.Metadata.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Metadata));
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
    export class Balance extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            address?: string;
            coins?: dependency_2.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("coins" in data && data.coins != undefined) {
                    this.coins = data.coins;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get coins() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 2) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set coins(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new Balance({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.coins != null) {
                message.coins = data.coins.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                coins?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.coins != null) {
                data.coins = this.coins.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.coins !== undefined)
                writer.writeRepeatedMessage(2, this.coins, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Balance {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Balance();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Balance {
            return Balance.deserialize(bytes);
        }
    }
}
