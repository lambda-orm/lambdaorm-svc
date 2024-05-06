[orm-service](../README.md) / [Exports](../modules.md) / Logger

# Interface: Logger

## Table of contents

### Methods

- [error](Logger.md#error)
- [info](Logger.md#info)

## Methods

### error

▸ **error**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/ports/logger.ts:2](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/logger.ts#L2)

___

### info

▸ **info**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/ports/logger.ts:3](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/logger.ts#L3)
