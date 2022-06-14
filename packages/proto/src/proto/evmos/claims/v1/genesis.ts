// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: evmos/claims/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/protobuf/duration";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./claims";
import * as pb_1 from "google-protobuf";
export namespace evmos.claims.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            params?: Params;
            claims_records?: dependency_4.evmos.claims.v1.ClaimsRecordAddress[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("claims_records" in data && data.claims_records != undefined) {
                    this.claims_records = data.claims_records;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, Params, 1) as Params;
        }
        set params(value: Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get claims_records() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.evmos.claims.v1.ClaimsRecordAddress, 2) as dependency_4.evmos.claims.v1.ClaimsRecordAddress[];
        }
        set claims_records(value: dependency_4.evmos.claims.v1.ClaimsRecordAddress[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            claims_records?: ReturnType<typeof dependency_4.evmos.claims.v1.ClaimsRecordAddress.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = Params.fromObject(data.params);
            }
            if (data.claims_records != null) {
                message.claims_records = data.claims_records.map(item => dependency_4.evmos.claims.v1.ClaimsRecordAddress.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof Params.prototype.toObject>;
                claims_records?: ReturnType<typeof dependency_4.evmos.claims.v1.ClaimsRecordAddress.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.claims_records != null) {
                data.claims_records = this.claims_records.map((item: dependency_4.evmos.claims.v1.ClaimsRecordAddress) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.claims_records !== undefined)
                writer.writeRepeatedMessage(2, this.claims_records, (item: dependency_4.evmos.claims.v1.ClaimsRecordAddress) => item.serialize(writer));
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
                        reader.readMessage(message.claims_records, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_4.evmos.claims.v1.ClaimsRecordAddress.deserialize(reader), dependency_4.evmos.claims.v1.ClaimsRecordAddress));
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
            enable_claims?: boolean;
            airdrop_start_time?: dependency_3.google.protobuf.Timestamp;
            duration_until_decay?: dependency_2.google.protobuf.Duration;
            duration_of_decay?: dependency_2.google.protobuf.Duration;
            claims_denom?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("enable_claims" in data && data.enable_claims != undefined) {
                    this.enable_claims = data.enable_claims;
                }
                if ("airdrop_start_time" in data && data.airdrop_start_time != undefined) {
                    this.airdrop_start_time = data.airdrop_start_time;
                }
                if ("duration_until_decay" in data && data.duration_until_decay != undefined) {
                    this.duration_until_decay = data.duration_until_decay;
                }
                if ("duration_of_decay" in data && data.duration_of_decay != undefined) {
                    this.duration_of_decay = data.duration_of_decay;
                }
                if ("claims_denom" in data && data.claims_denom != undefined) {
                    this.claims_denom = data.claims_denom;
                }
            }
        }
        get enable_claims() {
            return pb_1.Message.getField(this, 1) as boolean;
        }
        set enable_claims(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get airdrop_start_time() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2) as dependency_3.google.protobuf.Timestamp;
        }
        set airdrop_start_time(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get duration_until_decay() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 3) as dependency_2.google.protobuf.Duration;
        }
        set duration_until_decay(value: dependency_2.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get duration_of_decay() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Duration, 4) as dependency_2.google.protobuf.Duration;
        }
        set duration_of_decay(value: dependency_2.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get claims_denom() {
            return pb_1.Message.getField(this, 5) as string;
        }
        set claims_denom(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            enable_claims?: boolean;
            airdrop_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            duration_until_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            duration_of_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
            claims_denom?: string;
        }) {
            const message = new Params({});
            if (data.enable_claims != null) {
                message.enable_claims = data.enable_claims;
            }
            if (data.airdrop_start_time != null) {
                message.airdrop_start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.airdrop_start_time);
            }
            if (data.duration_until_decay != null) {
                message.duration_until_decay = dependency_2.google.protobuf.Duration.fromObject(data.duration_until_decay);
            }
            if (data.duration_of_decay != null) {
                message.duration_of_decay = dependency_2.google.protobuf.Duration.fromObject(data.duration_of_decay);
            }
            if (data.claims_denom != null) {
                message.claims_denom = data.claims_denom;
            }
            return message;
        }
        toObject() {
            const data: {
                enable_claims?: boolean;
                airdrop_start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                duration_until_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
                duration_of_decay?: ReturnType<typeof dependency_2.google.protobuf.Duration.prototype.toObject>;
                claims_denom?: string;
            } = {};
            if (this.enable_claims != null) {
                data.enable_claims = this.enable_claims;
            }
            if (this.airdrop_start_time != null) {
                data.airdrop_start_time = this.airdrop_start_time.toObject();
            }
            if (this.duration_until_decay != null) {
                data.duration_until_decay = this.duration_until_decay.toObject();
            }
            if (this.duration_of_decay != null) {
                data.duration_of_decay = this.duration_of_decay.toObject();
            }
            if (this.claims_denom != null) {
                data.claims_denom = this.claims_denom;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.enable_claims !== undefined)
                writer.writeBool(1, this.enable_claims);
            if (this.airdrop_start_time !== undefined)
                writer.writeMessage(2, this.airdrop_start_time, () => this.airdrop_start_time.serialize(writer));
            if (this.duration_until_decay !== undefined)
                writer.writeMessage(3, this.duration_until_decay, () => this.duration_until_decay.serialize(writer));
            if (this.duration_of_decay !== undefined)
                writer.writeMessage(4, this.duration_of_decay, () => this.duration_of_decay.serialize(writer));
            if (typeof this.claims_denom === "string" && this.claims_denom.length)
                writer.writeString(5, this.claims_denom);
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
                        message.enable_claims = reader.readBool();
                        break;
                    case 2:
                        reader.readMessage(message.airdrop_start_time, () => message.airdrop_start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.duration_until_decay, () => message.duration_until_decay = dependency_2.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.duration_of_decay, () => message.duration_of_decay = dependency_2.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 5:
                        message.claims_denom = reader.readString();
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
