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

[src/application/services/queryService.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L4)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[src/application/services/queryService.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L4)

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

[src/application/services/queryService.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L6)

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

[src/application/services/queryService.ts:26](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L26)

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

[src/application/services/queryService.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L10)

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

[src/application/services/queryService.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L14)

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

[src/application/services/queryService.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L18)

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

[src/application/services/queryService.ts:22](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/services/queryService.ts#L22)
