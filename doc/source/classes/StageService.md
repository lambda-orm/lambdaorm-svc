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

• **new StageService**(`orm`): [`StageService`](StageService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orm` | `IOrm` |

#### Returns

[`StageService`](StageService.md)

#### Defined in

[src/application/services/stageService.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/services/stageService.ts#L4)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[src/application/services/stageService.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/services/stageService.ts#L4)

## Methods

### exists

▸ **exists**(`«destructured»`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `stage` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/application/services/stageService.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/services/stageService.ts#L10)

___

### export

▸ **export**(`«destructured»`): `Promise`\<`SchemaData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `stage` | `string` |

#### Returns

`Promise`\<`SchemaData`\>

#### Defined in

[src/application/services/stageService.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/services/stageService.ts#L14)

___

### import

▸ **import**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `body` | `any` |
| › `stage` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/application/services/stageService.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/services/stageService.ts#L18)

___

### list

▸ **list**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/application/services/stageService.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/application/services/stageService.ts#L6)
