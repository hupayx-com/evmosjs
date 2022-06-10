// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: ibc/applications/interchain_accounts/v1/account.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../cosmos_proto/cosmos";
import * as dependency_2 from "./../../../../gogoproto/gogo";
import * as dependency_3 from "./../../../../cosmos/auth/v1beta1/auth";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.v1 {
    export class InterchainAccount extends pb_1.Message {
        constructor(data?: any[] | {
            base_account?: dependency_3.cosmos.auth.v1beta1.BaseAccount;
            account_owner?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_account" in data && data.base_account != undefined) {
                    this.base_account = data.base_account;
                }
                if ("account_owner" in data && data.account_owner != undefined) {
                    this.account_owner = data.account_owner;
                }
            }
        }
        get base_account() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.auth.v1beta1.BaseAccount, 1) as dependency_3.cosmos.auth.v1beta1.BaseAccount;
        }
        set base_account(value: dependency_3.cosmos.auth.v1beta1.BaseAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get account_owner() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set account_owner(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            base_account?: ReturnType<typeof dependency_3.cosmos.auth.v1beta1.BaseAccount.prototype.toObject>;
            account_owner?: string;
        }) {
            const message = new InterchainAccount({});
            if (data.base_account != null) {
                message.base_account = dependency_3.cosmos.auth.v1beta1.BaseAccount.fromObject(data.base_account);
            }
            if (data.account_owner != null) {
                message.account_owner = data.account_owner;
            }
            return message;
        }
        toObject() {
            const data: {
                base_account?: ReturnType<typeof dependency_3.cosmos.auth.v1beta1.BaseAccount.prototype.toObject>;
                account_owner?: string;
            } = {};
            if (this.base_account != null) {
                data.base_account = this.base_account.toObject();
            }
            if (this.account_owner != null) {
                data.account_owner = this.account_owner;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.base_account !== undefined)
                writer.writeMessage(1, this.base_account, () => this.base_account.serialize(writer));
            if (typeof this.account_owner === "string" && this.account_owner.length)
                writer.writeString(2, this.account_owner);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InterchainAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InterchainAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_account, () => message.base_account = dependency_3.cosmos.auth.v1beta1.BaseAccount.deserialize(reader));
                        break;
                    case 2:
                        message.account_owner = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): InterchainAccount {
            return InterchainAccount.deserialize(bytes);
        }
    }
}
