[orm-service](../README.md) / [Exports](../modules.md) / ExpressionService

# Class: ExpressionService

## Table of contents

### Constructors

- [constructor](ExpressionService.md#constructor)

### Properties

- [orm](ExpressionService.md#orm)

### Methods

- [constraints](ExpressionService.md#constraints)
- [execute](ExpressionService.md#execute)
- [metadata](ExpressionService.md#metadata)
- [model](ExpressionService.md#model)
- [parameters](ExpressionService.md#parameters)
- [sentence](ExpressionService.md#sentence)

## Constructors

### constructor

• **new ExpressionService**(`orm`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orm` | `IOrm` |

#### Defined in

[application/services/expressionService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L10)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[application/services/expressionService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L10)

## Methods

### constraints

▸ **constraints**(`«destructured»`): `Promise`<`MetadataConstraint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.expression` | `string` |

#### Returns

`Promise`<`MetadataConstraint`\>

#### Defined in

[application/services/expressionService.ts:12](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L12)

___

### execute

▸ **execute**(`«destructured»`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.data` | `any` |
| › `body.expression` | `string` |
| › `body.options?` | `QueryOptions` |

#### Returns

`Promise`<`any`\>

#### Defined in

[application/services/expressionService.ts:32](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L32)

___

### metadata

▸ **metadata**(`«destructured»`): `Promise`<`Metadata`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.expression` | `string` |

#### Returns

`Promise`<`Metadata`\>

#### Defined in

[application/services/expressionService.ts:16](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L16)

___

### model

▸ **model**(`«destructured»`): `Promise`<`MetadataModel`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.expression` | `string` |

#### Returns

`Promise`<`MetadataModel`[]\>

#### Defined in

[application/services/expressionService.ts:20](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L20)

___

### parameters

▸ **parameters**(`«destructured»`): `Promise`<`MetadataParameter`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.expression` | `string` |

#### Returns

`Promise`<`MetadataParameter`[]\>

#### Defined in

[application/services/expressionService.ts:24](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L24)

___

### sentence

▸ **sentence**(`«destructured»`): `Promise`<`QueryInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `Object` |
| › `body.expression` | `string` |
| › `body.options?` | `QueryOptions` |

#### Returns

`Promise`<`QueryInfo`\>

#### Defined in

[application/services/expressionService.ts:28](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/76094ff/src/lib/application/services/expressionService.ts#L28)
