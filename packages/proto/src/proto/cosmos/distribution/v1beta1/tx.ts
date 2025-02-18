// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/distribution/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export namespace cosmos.distribution.v1beta1 {
    export class MsgSetWithdrawAddress extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            delegator_address?: string;
            withdraw_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("delegator_address" in data && data.delegator_address != undefined) {
                    this.delegator_address = data.delegator_address;
                }
                if ("withdraw_address" in data && data.withdraw_address != undefined) {
                    this.withdraw_address = data.withdraw_address;
                }
            }
        }
        get delegator_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set delegator_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get withdraw_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set withdraw_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            delegator_address?: string;
            withdraw_address?: string;
        }) {
            const message = new MsgSetWithdrawAddress({});
            if (data.delegator_address != null) {
                message.delegator_address = data.delegator_address;
            }
            if (data.withdraw_address != null) {
                message.withdraw_address = data.withdraw_address;
            }
            return message;
        }
        toObject() {
            const data: {
                delegator_address?: string;
                withdraw_address?: string;
            } = {};
            if (this.delegator_address != null) {
                data.delegator_address = this.delegator_address;
            }
            if (this.withdraw_address != null) {
                data.withdraw_address = this.withdraw_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length)
                writer.writeString(1, this.delegator_address);
            if (typeof this.withdraw_address === "string" && this.withdraw_address.length)
                writer.writeString(2, this.withdraw_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetWithdrawAddress {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetWithdrawAddress();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.delegator_address = reader.readString();
                        break;
                    case 2:
                        message.withdraw_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSetWithdrawAddress {
            return MsgSetWithdrawAddress.deserialize(bytes);
        }
    }
    export class MsgSetWithdrawAddressResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgSetWithdrawAddressResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetWithdrawAddressResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetWithdrawAddressResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSetWithdrawAddressResponse {
            return MsgSetWithdrawAddressResponse.deserialize(bytes);
        }
    }
    export class MsgWithdrawDelegatorReward extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            delegator_address?: string;
            validator_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("delegator_address" in data && data.delegator_address != undefined) {
                    this.delegator_address = data.delegator_address;
                }
                if ("validator_address" in data && data.validator_address != undefined) {
                    this.validator_address = data.validator_address;
                }
            }
        }
        get delegator_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set delegator_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get validator_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set validator_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            delegator_address?: string;
            validator_address?: string;
        }) {
            const message = new MsgWithdrawDelegatorReward({});
            if (data.delegator_address != null) {
                message.delegator_address = data.delegator_address;
            }
            if (data.validator_address != null) {
                message.validator_address = data.validator_address;
            }
            return message;
        }
        toObject() {
            const data: {
                delegator_address?: string;
                validator_address?: string;
            } = {};
            if (this.delegator_address != null) {
                data.delegator_address = this.delegator_address;
            }
            if (this.validator_address != null) {
                data.validator_address = this.validator_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.delegator_address === "string" && this.delegator_address.length)
                writer.writeString(1, this.delegator_address);
            if (typeof this.validator_address === "string" && this.validator_address.length)
                writer.writeString(2, this.validator_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawDelegatorReward {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawDelegatorReward();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.delegator_address = reader.readString();
                        break;
                    case 2:
                        message.validator_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawDelegatorReward {
            return MsgWithdrawDelegatorReward.deserialize(bytes);
        }
    }
    export class MsgWithdrawDelegatorRewardResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgWithdrawDelegatorRewardResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawDelegatorRewardResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawDelegatorRewardResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawDelegatorRewardResponse {
            return MsgWithdrawDelegatorRewardResponse.deserialize(bytes);
        }
    }
    export class MsgWithdrawValidatorCommission extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            validator_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("validator_address" in data && data.validator_address != undefined) {
                    this.validator_address = data.validator_address;
                }
            }
        }
        get validator_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set validator_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            validator_address?: string;
        }) {
            const message = new MsgWithdrawValidatorCommission({});
            if (data.validator_address != null) {
                message.validator_address = data.validator_address;
            }
            return message;
        }
        toObject() {
            const data: {
                validator_address?: string;
            } = {};
            if (this.validator_address != null) {
                data.validator_address = this.validator_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_address === "string" && this.validator_address.length)
                writer.writeString(1, this.validator_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawValidatorCommission {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawValidatorCommission();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.validator_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawValidatorCommission {
            return MsgWithdrawValidatorCommission.deserialize(bytes);
        }
    }
    export class MsgWithdrawValidatorCommissionResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgWithdrawValidatorCommissionResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawValidatorCommissionResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgWithdrawValidatorCommissionResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawValidatorCommissionResponse {
            return MsgWithdrawValidatorCommissionResponse.deserialize(bytes);
        }
    }
    export class MsgFundCommunityPool extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
            depositor?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
                if ("depositor" in data && data.depositor != undefined) {
                    this.depositor = data.depositor;
                }
            }
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 1) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get depositor() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set depositor(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            depositor?: string;
        }) {
            const message = new MsgFundCommunityPool({});
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.depositor != null) {
                message.depositor = data.depositor;
            }
            return message;
        }
        toObject() {
            const data: {
                amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                depositor?: string;
            } = {};
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.depositor != null) {
                data.depositor = this.depositor;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.amount !== undefined)
                writer.writeRepeatedMessage(1, this.amount, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (typeof this.depositor === "string" && this.depositor.length)
                writer.writeString(2, this.depositor);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgFundCommunityPool {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgFundCommunityPool();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    case 2:
                        message.depositor = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgFundCommunityPool {
            return MsgFundCommunityPool.deserialize(bytes);
        }
    }
    export class MsgFundCommunityPoolResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgFundCommunityPoolResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgFundCommunityPoolResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgFundCommunityPoolResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgFundCommunityPoolResponse {
            return MsgFundCommunityPoolResponse.deserialize(bytes);
        }
    }
}
