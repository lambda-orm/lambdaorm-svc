[orm-service](../README.md) / [Exports](../modules.md) / StageService

# Class: StageService

## Table of contents

### Constructors

- [constructor](StageService.md#constructor)

### Properties

- [orm](StageService.md#orm)

### Methods

- [exists](StageService.md#exists)
- [export](StageService.md#export)
- [import](StageService.md#import)
- [list](StageService.md#list)

## Constructors

### constructor

• **new StageService**(`orm`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orm` | `IOrm` |

#### Defined in

[application/services/stageService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/stageService.ts#L4)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[application/services/stageService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/stageService.ts#L4)

## Methods

### exists

▸ **exists**(`«destructured»`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `stage` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[application/services/stageService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/stageService.ts#L10)

___

### export

▸ **export**(`«destructured»`): `Promise`<`SchemaConfig`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `stage` | `string` |

#### Returns

`Promise`<`SchemaConfig`\>

#### Defined in

[application/services/stageService.ts:14](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/stageService.ts#L14)

___

### import

▸ **import**(`«destructured»`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `schemaData` | `any` |
| › `stage` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[application/services/stageService.ts:18](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/stageService.ts#L18)

___

### list

▸ **list**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[application/services/stageService.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/24d7055/src/application/services/stageService.ts#L6)
