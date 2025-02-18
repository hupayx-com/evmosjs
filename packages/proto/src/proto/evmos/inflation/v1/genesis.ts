// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: evmos/inflation/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./inflation";
import * as pb_1 from "google-protobuf";
export namespace evmos.inflation.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            params?: Params;
            period?: number;
            epoch_identifier?: string;
            epochs_per_period?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("period" in data && data.period != undefined) {
                    this.period = data.period;
                }
                if ("epoch_identifier" in data && data.epoch_identifier != undefined) {
                    this.epoch_identifier = data.epoch_identifier;
                }
                if ("epochs_per_period" in data && data.epochs_per_period != undefined) {
                    this.epochs_per_period = data.epochs_per_period;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, Params, 1) as Params;
        }
        set params(value: Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get period() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set period(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get epoch_identifier() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set epoch_identifier(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get epochs_per_period() {
            return pb_1.Message.getField(this, 4) as number;
        }
        set epochs_per_period(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof Params.prototype.toObject>;
            period?: number;
            epoch_identifier?: string;
            epochs_per_period?: number;
        }) {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = Params.fromObject(data.params);
            }
            if (data.period != null) {
                message.period = data.period;
            }
            if (data.epoch_identifier != null) {
                message.epoch_identifier = data.epoch_identifier;
            }
            if (data.epochs_per_period != null) {
                message.epochs_per_period = data.epochs_per_period;
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof Params.prototype.toObject>;
                period?: number;
                epoch_identifier?: string;
                epochs_per_period?: number;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.period != null) {
                data.period = this.period;
            }
            if (this.epoch_identifier != null) {
                data.epoch_identifier = this.epoch_identifier;
            }
            if (this.epochs_per_period != null) {
                data.epochs_per_period = this.epochs_per_period;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.period !== undefined)
                writer.writeUint64(2, this.period);
            if (typeof this.epoch_identifier === "string" && this.epoch_identifier.length)
                writer.writeString(3, this.epoch_identifier);
            if (this.epochs_per_period !== undefined)
                writer.writeInt64(4, this.epochs_per_period);
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
                        message.period = reader.readUint64();
                        break;
                    case 3:
                        message.epoch_identifier = reader.readString();
                        break;
                    case 4:
                        message.epochs_per_period = reader.readInt64();
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
            mint_denom?: string;
            exponential_calculation?: dependency_2.evmos.inflation.v1.ExponentialCalculation;
            inflation_distribution?: dependency_2.evmos.inflation.v1.InflationDistribution;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("mint_denom" in data && data.mint_denom != undefined) {
                    this.mint_denom = data.mint_denom;
                }
                if ("exponential_calculation" in data && data.exponential_calculation != undefined) {
                    this.exponential_calculation = data.exponential_calculation;
                }
                if ("inflation_distribution" in data && data.inflation_distribution != undefined) {
                    this.inflation_distribution = data.inflation_distribution;
                }
            }
        }
        get mint_denom() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set mint_denom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get exponential_calculation() {
            return pb_1.Message.getWrapperField(this, dependency_2.evmos.inflation.v1.ExponentialCalculation, 2) as dependency_2.evmos.inflation.v1.ExponentialCalculation;
        }
        set exponential_calculation(value: dependency_2.evmos.inflation.v1.ExponentialCalculation) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get inflation_distribution() {
            return pb_1.Message.getWrapperField(this, dependency_2.evmos.inflation.v1.InflationDistribution, 3) as dependency_2.evmos.inflation.v1.InflationDistribution;
        }
        set inflation_distribution(value: dependency_2.evmos.inflation.v1.InflationDistribution) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        static fromObject(data: {
            mint_denom?: string;
            exponential_calculation?: ReturnType<typeof dependency_2.evmos.inflation.v1.ExponentialCalculation.prototype.toObject>;
            inflation_distribution?: ReturnType<typeof dependency_2.evmos.inflation.v1.InflationDistribution.prototype.toObject>;
        }) {
            const message = new Params({});
            if (data.mint_denom != null) {
                message.mint_denom = data.mint_denom;
            }
            if (data.exponential_calculation != null) {
                message.exponential_calculation = dependency_2.evmos.inflation.v1.ExponentialCalculation.fromObject(data.exponential_calculation);
            }
            if (data.inflation_distribution != null) {
                message.inflation_distribution = dependency_2.evmos.inflation.v1.InflationDistribution.fromObject(data.inflation_distribution);
            }
            return message;
        }
        toObject() {
            const data: {
                mint_denom?: string;
                exponential_calculation?: ReturnType<typeof dependency_2.evmos.inflation.v1.ExponentialCalculation.prototype.toObject>;
                inflation_distribution?: ReturnType<typeof dependency_2.evmos.inflation.v1.InflationDistribution.prototype.toObject>;
            } = {};
            if (this.mint_denom != null) {
                data.mint_denom = this.mint_denom;
            }
            if (this.exponential_calculation != null) {
                data.exponential_calculation = this.exponential_calculation.toObject();
            }
            if (this.inflation_distribution != null) {
                data.inflation_distribution = this.inflation_distribution.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.mint_denom === "string" && this.mint_denom.length)
                writer.writeString(1, this.mint_denom);
            if (this.exponential_calculation !== undefined)
                writer.writeMessage(2, this.exponential_calculation, () => this.exponential_calculation.serialize(writer));
            if (this.inflation_distribution !== undefined)
                writer.writeMessage(3, this.inflation_distribution, () => this.inflation_distribution.serialize(writer));
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
                        message.mint_denom = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.exponential_calculation, () => message.exponential_calculation = dependency_2.evmos.inflation.v1.ExponentialCalculation.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.inflation_distribution, () => message.inflation_distribution = dependency_2.evmos.inflation.v1.InflationDistribution.deserialize(reader));
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
