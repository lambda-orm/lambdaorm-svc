[orm-service](../README.md) / [Exports](../modules.md) / Queue

# Interface: Queue

## Table of contents

### Methods

- [execute](Queue.md#execute)
- [executeInBackground](Queue.md#executeinbackground)
- [send](Queue.md#send)
- [start](Queue.md#start)
- [stop](Queue.md#stop)

## Methods

### execute

▸ **execute**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`QueueExecuteArgs`](QueueExecuteArgs.md) |

#### Returns

`string`

#### Defined in

[src/application/ports/queue.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/queue.ts#L6)

___

### executeInBackground

▸ **executeInBackground**(`queueId`, `args`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueId` | `string` |
| `args` | [`QueueExecuteArgs`](QueueExecuteArgs.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/ports/queue.ts:7](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/queue.ts#L7)

___

### send

▸ **send**(`topic`, `messages`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `messages` | `any`[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/ports/queue.ts:8](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/queue.ts#L8)

___

### start

▸ **start**(`queuedInfo`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queuedInfo` | [`QueuedInfo`](QueuedInfo.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/ports/queue.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/queue.ts#L4)

___

### stop

▸ **stop**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/ports/queue.ts:5](https://github.com/lambda-orm/lambdaorm-svc/blob/532896b631f65517f4753a83325f1748c1fdb1ff/src/application/ports/queue.ts#L5)
