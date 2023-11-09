[orm-service](../README.md) / [Exports](../modules.md) / Queue

# Interface: Queue

## Table of contents

### Methods

- [execute](Queue.md#execute)
- [executeInBackground](Queue.md#executeinbackground)
- [start](Queue.md#start)
- [stop](Queue.md#stop)

## Methods

### execute

▸ **execute**(`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `QueueExecuteArgs` |

#### Returns

`string`

#### Defined in

[application/ports/queue.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/a4e67cb/src/lib/application/ports/queue.ts#L6)

___

### executeInBackground

▸ **executeInBackground**(`queueId`, `args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queueId` | `string` |
| `args` | `QueueExecuteArgs` |

#### Returns

`Promise`<`void`\>

#### Defined in

[application/ports/queue.ts:7](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/a4e67cb/src/lib/application/ports/queue.ts#L7)

___

### start

▸ **start**(`queuedInfo`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queuedInfo` | `QueuedInfo` |

#### Returns

`Promise`<`void`\>

#### Defined in

[application/ports/queue.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/a4e67cb/src/lib/application/ports/queue.ts#L4)

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[application/ports/queue.ts:5](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/a4e67cb/src/lib/application/ports/queue.ts#L5)
