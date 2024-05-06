[orm-service](../README.md) / [Exports](../modules.md) / QueryService

# Class: QueryService

## Table of contents

### Constructors

- [constructor](QueryService.md#constructor)

### Properties

- [orm](QueryService.md#orm)

### Methods

- [constraints](QueryService.md#constraints)
- [execute](QueryService.md#execute)
- [metadata](QueryService.md#metadata)
- [model](QueryService.md#model)
- [parameters](QueryService.md#parameters)
- [plan](QueryService.md#plan)

## Constructors

### constructor

• **new QueryService**(`orm`): [`QueryService`](QueryService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orm` | `IOrm` |

#### Returns

[`QueryService`](QueryService.md)

#### Defined in

src/application/services/queryService.ts:4

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

src/application/services/queryService.ts:4

## Methods

### constraints

▸ **constraints**(`«destructured»`): `Promise`\<`MetadataConstraint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.query` | `string` |

#### Returns

`Promise`\<`MetadataConstraint`\>

#### Defined in

src/application/services/queryService.ts:6

___

### execute

▸ **execute**(`«destructured»`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.data` | `any` |
| › `body.options?` | `QueryOptions` |
| › `body.query` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

src/application/services/queryService.ts:26

___

### metadata

▸ **metadata**(`«destructured»`): `Promise`\<`Metadata`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.query` | `string` |

#### Returns

`Promise`\<`Metadata`\>

#### Defined in

src/application/services/queryService.ts:10

___

### model

▸ **model**(`«destructured»`): `Promise`\<`MetadataModel`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.query` | `string` |

#### Returns

`Promise`\<`MetadataModel`[]\>

#### Defined in

src/application/services/queryService.ts:14

___

### parameters

▸ **parameters**(`«destructured»`): `Promise`\<`MetadataParameter`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.query` | `string` |

#### Returns

`Promise`\<`MetadataParameter`[]\>

#### Defined in

src/application/services/queryService.ts:18

___

### plan

▸ **plan**(`«destructured»`): `Promise`\<`QueryPlan`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.options?` | `QueryOptions` |
| › `body.query` | `string` |

#### Returns

`Promise`\<`QueryPlan`\>

#### Defined in

src/application/services/queryService.ts:22
