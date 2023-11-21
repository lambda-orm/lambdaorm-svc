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

[application/services/expressionService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L4)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[application/services/expressionService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L4)

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

[application/services/expressionService.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L6)

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

[application/services/expressionService.ts:26](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L26)

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

[application/services/expressionService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L10)

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

[application/services/expressionService.ts:14](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L14)

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

[application/services/expressionService.ts:18](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L18)

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

[application/services/expressionService.ts:22](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/expressionService.ts#L22)
