[orm-service](../README.md) / [Exports](../modules.md) / GeneralService

# Class: GeneralService

## Table of contents

### Constructors

- [constructor](GeneralService.md#constructor)

### Properties

- [orm](GeneralService.md#orm)
- [packageVersion](GeneralService.md#packageversion)

### Methods

- [health](GeneralService.md#health)
- [ping](GeneralService.md#ping)
- [version](GeneralService.md#version)

## Constructors

### constructor

• **new GeneralService**(`packageVersion`, `orm?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageVersion` | `string` |
| `orm?` | `IOrm` |

#### Defined in

[src/application/services/generalService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/73e5767/src/application/services/generalService.ts#L4)

## Properties

### orm

• `Private` `Optional` `Readonly` **orm**: `IOrm`

#### Defined in

[src/application/services/generalService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/73e5767/src/application/services/generalService.ts#L4)

___

### packageVersion

• `Private` `Readonly` **packageVersion**: `string`

#### Defined in

[src/application/services/generalService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/73e5767/src/application/services/generalService.ts#L4)

## Methods

### health

▸ **health**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/application/services/generalService.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/73e5767/src/application/services/generalService.ts#L10)

___

### ping

▸ **ping**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/application/services/generalService.ts:28](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/73e5767/src/application/services/generalService.ts#L28)

___

### version

▸ **version**(): `Promise`<{ `version`: `string`  }\>

#### Returns

`Promise`<{ `version`: `string`  }\>

#### Defined in

[src/application/services/generalService.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/73e5767/src/application/services/generalService.ts#L6)
