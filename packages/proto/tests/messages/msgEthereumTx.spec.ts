import {
  bytesToLegacyTx,
  bytesToMsgEthereumTx,
} from '../../src/messages/msgEthereumTx'
import {
  bytesToAuthInfo,
  bytesToTxBody,
  bytesToTxRaw,
} from '../../src/messages/txRaw'
import * as google from '../../src/proto/google/protobuf/any'

describe('msgEthereumTx tests', () => {
  const blockchainTx =
    'CroICoYICh8vZXRoZXJtaW50LmV2bS52MS5Nc2dFdGhlcmV1bVR4EuIHCpIHChovZXRoZXJtaW50LmV2bS52MS5MZWdhY3lUeBLzBgiMCBINNTAwMDAwMDAwMDAwMBiAn0kiKjB4NzUyYTIxYUI2M2ZjMkM3ODg3NzQ3ZTc1NDQwNWQ5NzVDRDM1MUQ1NCoBMDLkBaKr5U4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIuIFFmETVNZmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbl+kIHZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAP5jeVCccTRCn3sK792m8rdNgra8AAAAAAAAAAAAAAAA4cEQ4bG0od7QyvPkK/vbt7XXzhwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACbyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxAAAAAAAAAAAAAAAADjbNV4hCwlX2oYGChpFhFTFalMQAAAAAAAAAAAAAAAAMISIyScooOXtLZUHf+uzFOb/wxZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcQAAAAAAAAAAAAAAAAGCQUFZw+7xQ1r5G88NEqvL4nekYAAAAAAAAAAAAAAABcf4pXDVeO2E5j/fp7Huct6uGuIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJvIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAHOgFWQiBXQ6FNYBwVz4wVf5KpY7ldwXg3TnOCeO6xfcuzDA5JIEogNw+TTcQqXv3X+fyanCS4bDl3f3bHL5f7+T9UV9z/wckRAAAAAACIikAaQjB4ZmQxODk2ZWEwNzQ4MjllODQ1OGRlMjE2NjBkZjdiNTc3OWQzMzQ5Y2Y4YjA3YWU2ZmMxZmNhOTY3ZGRhNzRjY/o/LgosL2V0aGVybWludC5ldm0udjEuRXh0ZW5zaW9uT3B0aW9uc0V0aGVyZXVtVHgSJhIkCh4KB2Jhc2Vjcm8SEzYwMDAwMDAwMDAwMDAwMDAwMDAQgJ9J'
  it('bytesToMsgEthereumTx from rawTx', () => {
    // Create txRaw
    const txRawProto = bytesToTxRaw(Buffer.from(blockchainTx, 'base64'))

    // Create body
    const bodyProto = bytesToTxBody(txRawProto.body_bytes)

    // Create the authInfo
    const authInfoProto = bytesToAuthInfo(txRawProto.auth_info_bytes)
    expect(authInfoProto.toObject()).toStrictEqual({
      signer_infos: [],
      fee: {
        amount: [
          {
            amount: '6000000000000000000',
            denom: 'basecro',
          },
        ],
        gas_limit: 1200000,
      },
    })

    // Get the messages
    const bodyProtoMessages = bodyProto.messages as google.google.protobuf.Any[]
    expect(bodyProtoMessages).toBeDefined()
    expect(bodyProtoMessages.length).toBeGreaterThan(0)

    // Make sure that the message is MsgEthTx
    expect(bodyProtoMessages[0].type_url).toBe(
      '/ethermint.evm.v1.MsgEthereumTx',
    )

    // Create the MsgEthTx proto
    expect(bodyProtoMessages[0].value).toBeDefined()
    const msgEthereumTxProto = bytesToMsgEthereumTx(
      bodyProtoMessages[0].value as Uint8Array,
    )
    const msgEthTx = msgEthereumTxProto.toObject()

    // Create the LegacyTx/AccessListTx/DynamicFeeTx depending on the type_url
    expect(msgEthTx.data?.type_url).toBe('/ethermint.evm.v1.LegacyTx')

    // Create the LegacyTX
    const ethTx = bytesToLegacyTx(msgEthTx.data?.value as Uint8Array).toObject()
    expect(ethTx.nonce as number).toBe(1036)
    expect(ethTx.gas_price as string).toBe('5000000000000')
    expect(ethTx.gas as number).toBe(1200000)
    expect(ethTx.to as string).toBe(
      '0x752a21aB63fc2C7887747e754405d975CD351D54',
    )
    expect(ethTx.value as string).toBe('0')
    expect(ethTx.data as Uint8Array).toStrictEqual(
      new Uint8Array([
        162, 171, 229, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 139, 136, 20, 89, 132, 77, 83, 89, 154, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 229, 250, 66,
        7, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 99, 121, 80, 156, 113, 52, 66, 159,
        123, 10, 239, 221, 166, 242, 183, 77, 130, 182, 188, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 225, 193, 16, 225, 177, 180, 161, 222, 208, 202, 243,
        228, 43, 251, 219, 183, 181, 215, 206, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 38, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 16, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 227, 108, 213, 120, 132, 44, 37, 95, 106, 24, 24, 40, 105,
        22, 17, 83, 21, 169, 76, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 194,
        18, 35, 36, 156, 162, 131, 151, 180, 182, 84, 29, 255, 174, 204, 83,
        155, 255, 12, 89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 242, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 39, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 36, 20,
        21, 156, 62, 239, 20, 53, 175, 145, 188, 240, 209, 42, 188, 190, 39,
        122, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 127, 138, 87, 13, 87,
        142, 216, 78, 99, 253, 250, 123, 30, 231, 45, 234, 225, 174, 35, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 16,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 255, 255, 0, 7,
      ]),
    )
  })
})
