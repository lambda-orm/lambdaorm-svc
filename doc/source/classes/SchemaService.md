[orm-service](../README.md) / [Exports](../modules.md) / SchemaService

# Class: SchemaService

## Table of contents

### Constructors

- [constructor](SchemaService.md#constructor)

### Properties

- [orm](SchemaService.md#orm)

### Methods

- [domain](SchemaService.md#domain)
- [entities](SchemaService.md#entities)
- [entity](SchemaService.md#entity)
- [entityMapping](SchemaService.md#entitymapping)
- [enum](SchemaService.md#enum)
- [enums](SchemaService.md#enums)
- [mapping](SchemaService.md#mapping)
- [mappings](SchemaService.md#mappings)
- [schema](SchemaService.md#schema)
- [source](SchemaService.md#source)
- [sources](SchemaService.md#sources)
- [stage](SchemaService.md#stage)
- [stages](SchemaService.md#stages)
- [version](SchemaService.md#version)
- [views](SchemaService.md#views)

## Constructors

### constructor

• **new SchemaService**(`orm`): [`SchemaService`](SchemaService.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orm` | `IOrm` |

#### Returns

[`SchemaService`](SchemaService.md)

#### Defined in

[src/application/services/schemaService.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L4)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[src/application/services/schemaService.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L4)

## Methods

### domain

▸ **domain**(): `Promise`\<`DomainSchema`\>

#### Returns

`Promise`\<`DomainSchema`\>

#### Defined in

[src/application/services/schemaService.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L10)

___

### entities

▸ **entities**(): `Promise`\<`Entity`[]\>

#### Returns

`Promise`\<`Entity`[]\>

#### Defined in

[src/application/services/schemaService.ts:31](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L31)

___

### entity

▸ **entity**(`«destructured»`): `Promise`\<`undefined` \| `Entity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entity` | `string` |

#### Returns

`Promise`\<`undefined` \| `Entity`\>

#### Defined in

[src/application/services/schemaService.ts:35](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L35)

___

### entityMapping

▸ **entityMapping**(`«destructured»`): `Promise`\<`undefined` \| `EntityMapping`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entity` | `string` |
| › `mapping` | `string` |

#### Returns

`Promise`\<`undefined` \| `EntityMapping`\>

#### Defined in

[src/application/services/schemaService.ts:55](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L55)

___

### enum

▸ **enum**(`«destructured»`): `Promise`\<`undefined` \| `Enum`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `_enum` | `string` |

#### Returns

`Promise`\<`undefined` \| `Enum`\>

#### Defined in

[src/application/services/schemaService.ts:43](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L43)

___

### enums

▸ **enums**(): `Promise`\<`Enum`[]\>

#### Returns

`Promise`\<`Enum`[]\>

#### Defined in

[src/application/services/schemaService.ts:39](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L39)

___

### mapping

▸ **mapping**(`«destructured»`): `Promise`\<`undefined` \| `Mapping`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `mapping` | `string` |

#### Returns

`Promise`\<`undefined` \| `Mapping`\>

#### Defined in

[src/application/services/schemaService.ts:51](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L51)

___

### mappings

▸ **mappings**(): `Promise`\<`Mapping`[]\>

#### Returns

`Promise`\<`Mapping`[]\>

#### Defined in

[src/application/services/schemaService.ts:47](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L47)

___

### schema

▸ **schema**(): `Promise`\<`Schema`\>

#### Returns

`Promise`\<`Schema`\>

#### Defined in

[src/application/services/schemaService.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L14)

___

### source

▸ **source**(`«destructured»`): `Promise`\<\{ `dialect`: `string` ; `name`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `source` | `string` |

#### Returns

`Promise`\<\{ `dialect`: `string` ; `name`: `string`  }\>

#### Defined in

[src/application/services/schemaService.ts:27](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L27)

___

### sources

▸ **sources**(): `Promise`\<\{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Returns

`Promise`\<\{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Defined in

[src/application/services/schemaService.ts:23](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L23)

___

### stage

▸ **stage**(`«destructured»`): `Promise`\<`undefined` \| `Stage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `stage` | `string` |

#### Returns

`Promise`\<`undefined` \| `Stage`\>

#### Defined in

[src/application/services/schemaService.ts:63](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L63)

___

### stages

▸ **stages**(): `Promise`\<`Stage`[]\>

#### Returns

`Promise`\<`Stage`[]\>

#### Defined in

[src/application/services/schemaService.ts:59](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L59)

___

### version

▸ **version**(): `Promise`\<\{ `version`: `string`  }\>

#### Returns

`Promise`\<\{ `version`: `string`  }\>

#### Defined in

[src/application/services/schemaService.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L6)

___

### views

▸ **views**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/application/services/schemaService.ts:67](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/application/services/schemaService.ts#L67)
