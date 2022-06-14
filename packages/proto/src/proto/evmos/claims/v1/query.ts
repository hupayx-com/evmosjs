// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: evmos/claims/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/api/annotations";
import * as dependency_3 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_4 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_5 from "./claims";
import * as dependency_6 from "./genesis";
import * as pb_1 from "google-protobuf";
export namespace evmos.claims.v1 {
    export class QueryTotalUnclaimedRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryTotalUnclaimedRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTotalUnclaimedRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTotalUnclaimedRequest();
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
        static deserializeBinary(bytes: Uint8Array): QueryTotalUnclaimedRequest {
            return QueryTotalUnclaimedRequest.deserialize(bytes);
        }
    }
    export class QueryTotalUnclaimedResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            coins?: dependency_4.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("coins" in data && data.coins != undefined) {
                    this.coins = data.coins;
                }
            }
        }
        get coins() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1) as dependency_4.cosmos.base.v1beta1.Coin[];
        }
        set coins(value: dependency_4.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            coins?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new QueryTotalUnclaimedResponse({});
            if (data.coins != null) {
                message.coins = data.coins.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                coins?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.coins != null) {
                data.coins = this.coins.map((item: dependency_4.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.coins !== undefined)
                writer.writeRepeatedMessage(1, this.coins, (item: dependency_4.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTotalUnclaimedResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTotalUnclaimedResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryTotalUnclaimedResponse {
            return QueryTotalUnclaimedResponse.deserialize(bytes);
        }
    }
    export class QueryParamsRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryParamsRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
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
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            params?: dependency_6.evmos.claims.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_6.evmos.claims.v1.Params, 1) as dependency_6.evmos.claims.v1.Params;
        }
        set params(value: dependency_6.evmos.claims.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_6.evmos.claims.v1.Params.prototype.toObject>;
        }) {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_6.evmos.claims.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_6.evmos.claims.v1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_6.evmos.claims.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
    export class QueryClaimsRecordsRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageRequest, 1) as dependency_3.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }) {
            const message = new QueryClaimsRecordsRequest({});
            if (data.pagination != null) {
                message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pagination !== undefined)
                writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClaimsRecordsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryClaimsRecordsRequest {
            return QueryClaimsRecordsRequest.deserialize(bytes);
        }
    }
    export class QueryClaimsRecordsResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            claims?: dependency_5.evmos.claims.v1.ClaimsRecordAddress[];
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("claims" in data && data.claims != undefined) {
                    this.claims = data.claims;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get claims() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.evmos.claims.v1.ClaimsRecordAddress, 1) as dependency_5.evmos.claims.v1.ClaimsRecordAddress[];
        }
        set claims(value: dependency_5.evmos.claims.v1.ClaimsRecordAddress[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_3.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            claims?: ReturnType<typeof dependency_5.evmos.claims.v1.ClaimsRecordAddress.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }) {
            const message = new QueryClaimsRecordsResponse({});
            if (data.claims != null) {
                message.claims = data.claims.map(item => dependency_5.evmos.claims.v1.ClaimsRecordAddress.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                claims?: ReturnType<typeof dependency_5.evmos.claims.v1.ClaimsRecordAddress.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.claims != null) {
                data.claims = this.claims.map((item: dependency_5.evmos.claims.v1.ClaimsRecordAddress) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.claims !== undefined)
                writer.writeRepeatedMessage(1, this.claims, (item: dependency_5.evmos.claims.v1.ClaimsRecordAddress) => item.serialize(writer));
            if (this.pagination !== undefined)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClaimsRecordsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.claims, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_5.evmos.claims.v1.ClaimsRecordAddress.deserialize(reader), dependency_5.evmos.claims.v1.ClaimsRecordAddress));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_3.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryClaimsRecordsResponse {
            return QueryClaimsRecordsResponse.deserialize(bytes);
        }
    }
    export class QueryClaimsRecordRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            address?: string;
        }) {
            const message = new QueryClaimsRecordRequest({});
            if (data.address != null) {
                message.address = data.address;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClaimsRecordRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryClaimsRecordRequest {
            return QueryClaimsRecordRequest.deserialize(bytes);
        }
    }
    export class QueryClaimsRecordResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            initial_claimable_amount?: string;
            claims?: dependency_5.evmos.claims.v1.Claim[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("initial_claimable_amount" in data && data.initial_claimable_amount != undefined) {
                    this.initial_claimable_amount = data.initial_claimable_amount;
                }
                if ("claims" in data && data.claims != undefined) {
                    this.claims = data.claims;
                }
            }
        }
        get initial_claimable_amount() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set initial_claimable_amount(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get claims() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.evmos.claims.v1.Claim, 2) as dependency_5.evmos.claims.v1.Claim[];
        }
        set claims(value: dependency_5.evmos.claims.v1.Claim[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            initial_claimable_amount?: string;
            claims?: ReturnType<typeof dependency_5.evmos.claims.v1.Claim.prototype.toObject>[];
        }) {
            const message = new QueryClaimsRecordResponse({});
            if (data.initial_claimable_amount != null) {
                message.initial_claimable_amount = data.initial_claimable_amount;
            }
            if (data.claims != null) {
                message.claims = data.claims.map(item => dependency_5.evmos.claims.v1.Claim.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                initial_claimable_amount?: string;
                claims?: ReturnType<typeof dependency_5.evmos.claims.v1.Claim.prototype.toObject>[];
            } = {};
            if (this.initial_claimable_amount != null) {
                data.initial_claimable_amount = this.initial_claimable_amount;
            }
            if (this.claims != null) {
                data.claims = this.claims.map((item: dependency_5.evmos.claims.v1.Claim) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.initial_claimable_amount === "string" && this.initial_claimable_amount.length)
                writer.writeString(1, this.initial_claimable_amount);
            if (this.claims !== undefined)
                writer.writeRepeatedMessage(2, this.claims, (item: dependency_5.evmos.claims.v1.Claim) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClaimsRecordResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryClaimsRecordResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.initial_claimable_amount = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.claims, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.evmos.claims.v1.Claim.deserialize(reader), dependency_5.evmos.claims.v1.Claim));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryClaimsRecordResponse {
            return QueryClaimsRecordResponse.deserialize(bytes);
        }
    }
}
