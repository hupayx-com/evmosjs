// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.17.3
 * source: ibc/core/connection/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./connection";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.connection.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            connections?: dependency_2.ibc.core.connection.v1.IdentifiedConnection[];
            client_connection_paths?: dependency_2.ibc.core.connection.v1.ConnectionPaths[];
            next_connection_sequence?: number;
            params?: dependency_2.ibc.core.connection.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("connections" in data && data.connections != undefined) {
                    this.connections = data.connections;
                }
                if ("client_connection_paths" in data && data.client_connection_paths != undefined) {
                    this.client_connection_paths = data.client_connection_paths;
                }
                if ("next_connection_sequence" in data && data.next_connection_sequence != undefined) {
                    this.next_connection_sequence = data.next_connection_sequence;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get connections() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.connection.v1.IdentifiedConnection, 1) as dependency_2.ibc.core.connection.v1.IdentifiedConnection[];
        }
        set connections(value: dependency_2.ibc.core.connection.v1.IdentifiedConnection[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get client_connection_paths() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ibc.core.connection.v1.ConnectionPaths, 2) as dependency_2.ibc.core.connection.v1.ConnectionPaths[];
        }
        set client_connection_paths(value: dependency_2.ibc.core.connection.v1.ConnectionPaths[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get next_connection_sequence() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set next_connection_sequence(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.connection.v1.Params, 4) as dependency_2.ibc.core.connection.v1.Params;
        }
        set params(value: dependency_2.ibc.core.connection.v1.Params) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        static fromObject(data: {
            connections?: ReturnType<typeof dependency_2.ibc.core.connection.v1.IdentifiedConnection.prototype.toObject>[];
            client_connection_paths?: ReturnType<typeof dependency_2.ibc.core.connection.v1.ConnectionPaths.prototype.toObject>[];
            next_connection_sequence?: number;
            params?: ReturnType<typeof dependency_2.ibc.core.connection.v1.Params.prototype.toObject>;
        }) {
            const message = new GenesisState({});
            if (data.connections != null) {
                message.connections = data.connections.map(item => dependency_2.ibc.core.connection.v1.IdentifiedConnection.fromObject(item));
            }
            if (data.client_connection_paths != null) {
                message.client_connection_paths = data.client_connection_paths.map(item => dependency_2.ibc.core.connection.v1.ConnectionPaths.fromObject(item));
            }
            if (data.next_connection_sequence != null) {
                message.next_connection_sequence = data.next_connection_sequence;
            }
            if (data.params != null) {
                message.params = dependency_2.ibc.core.connection.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                connections?: ReturnType<typeof dependency_2.ibc.core.connection.v1.IdentifiedConnection.prototype.toObject>[];
                client_connection_paths?: ReturnType<typeof dependency_2.ibc.core.connection.v1.ConnectionPaths.prototype.toObject>[];
                next_connection_sequence?: number;
                params?: ReturnType<typeof dependency_2.ibc.core.connection.v1.Params.prototype.toObject>;
            } = {};
            if (this.connections != null) {
                data.connections = this.connections.map((item: dependency_2.ibc.core.connection.v1.IdentifiedConnection) => item.toObject());
            }
            if (this.client_connection_paths != null) {
                data.client_connection_paths = this.client_connection_paths.map((item: dependency_2.ibc.core.connection.v1.ConnectionPaths) => item.toObject());
            }
            if (this.next_connection_sequence != null) {
                data.next_connection_sequence = this.next_connection_sequence;
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.connections !== undefined)
                writer.writeRepeatedMessage(1, this.connections, (item: dependency_2.ibc.core.connection.v1.IdentifiedConnection) => item.serialize(writer));
            if (this.client_connection_paths !== undefined)
                writer.writeRepeatedMessage(2, this.client_connection_paths, (item: dependency_2.ibc.core.connection.v1.ConnectionPaths) => item.serialize(writer));
            if (this.next_connection_sequence !== undefined)
                writer.writeUint64(3, this.next_connection_sequence);
            if (this.params !== undefined)
                writer.writeMessage(4, this.params, () => this.params.serialize(writer));
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
                        reader.readMessage(message.connections, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ibc.core.connection.v1.IdentifiedConnection.deserialize(reader), dependency_2.ibc.core.connection.v1.IdentifiedConnection));
                        break;
                    case 2:
                        reader.readMessage(message.client_connection_paths, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.ibc.core.connection.v1.ConnectionPaths.deserialize(reader), dependency_2.ibc.core.connection.v1.ConnectionPaths));
                        break;
                    case 3:
                        message.next_connection_sequence = reader.readUint64();
                        break;
                    case 4:
                        reader.readMessage(message.params, () => message.params = dependency_2.ibc.core.connection.v1.Params.deserialize(reader));
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
