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

[src/application/ports/logger.ts:2](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/ports/logger.ts#L2)

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

[src/application/ports/logger.ts:3](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/ports/logger.ts#L3)
