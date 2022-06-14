// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: cosmos/feegrant/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./feegrant";
import * as pb_1 from "google-protobuf";
export namespace cosmos.feegrant.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            allowances?: dependency_2.cosmos.feegrant.v1beta1.Grant[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("allowances" in data && data.allowances != undefined) {
                    this.allowances = data.allowances;
                }
            }
        }
        get allowances() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.feegrant.v1beta1.Grant, 1) as dependency_2.cosmos.feegrant.v1beta1.Grant[];
        }
        set allowances(value: dependency_2.cosmos.feegrant.v1beta1.Grant[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            allowances?: ReturnType<typeof dependency_2.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.allowances != null) {
                message.allowances = data.allowances.map(item => dependency_2.cosmos.feegrant.v1beta1.Grant.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                allowances?: ReturnType<typeof dependency_2.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
            } = {};
            if (this.allowances != null) {
                data.allowances = this.allowances.map((item: dependency_2.cosmos.feegrant.v1beta1.Grant) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.allowances !== undefined)
                writer.writeRepeatedMessage(1, this.allowances, (item: dependency_2.cosmos.feegrant.v1beta1.Grant) => item.serialize(writer));
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
                        reader.readMessage(message.allowances, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.feegrant.v1beta1.Grant.deserialize(reader), dependency_2.cosmos.feegrant.v1beta1.Grant));
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
