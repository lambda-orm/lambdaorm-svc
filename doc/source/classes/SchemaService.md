[orm-service](../README.md) / [Exports](../modules.md) / SchemaService

# Class: SchemaService

## Table of contents

### Constructors

- [constructor](SchemaService.md#constructor)

### Properties

- [orm](SchemaService.md#orm)

### Methods

- [dataSource](SchemaService.md#datasource)
- [dataSources](SchemaService.md#datasources)
- [entities](SchemaService.md#entities)
- [entity](SchemaService.md#entity)
- [entityMapping](SchemaService.md#entitymapping)
- [enum](SchemaService.md#enum)
- [enums](SchemaService.md#enums)
- [mapping](SchemaService.md#mapping)
- [mappings](SchemaService.md#mappings)
- [stage](SchemaService.md#stage)
- [stages](SchemaService.md#stages)

## Constructors

### constructor

• **new SchemaService**(`orm`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orm` | `IOrm` |

#### Defined in

[application/services/schemaService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L4)

## Properties

### orm

• `Private` `Readonly` **orm**: `IOrm`

#### Defined in

[application/services/schemaService.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L4)

## Methods

### dataSource

▸ **dataSource**(`«destructured»`): `Promise`<{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `datasource` | `string` |

#### Returns

`Promise`<{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Defined in

[application/services/schemaService.ts:11](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L11)

___

### dataSources

▸ **dataSources**(): `Promise`<{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Returns

`Promise`<{ `dialect`: `string` ; `name`: `string`  }[]\>

#### Defined in

[application/services/schemaService.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L6)

___

### entities

▸ **entities**(): `Promise`<`Entity`[]\>

#### Returns

`Promise`<`Entity`[]\>

#### Defined in

[application/services/schemaService.ts:17](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L17)

___

### entity

▸ **entity**(`«destructured»`): `Promise`<`undefined` \| `Entity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entity` | `string` |

#### Returns

`Promise`<`undefined` \| `Entity`\>

#### Defined in

[application/services/schemaService.ts:21](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L21)

___

### entityMapping

▸ **entityMapping**(`«destructured»`): `Promise`<`undefined` \| `EntityMapping`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `entity` | `string` |
| › `mapping` | `string` |

#### Returns

`Promise`<`undefined` \| `EntityMapping`\>

#### Defined in

[application/services/schemaService.ts:41](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L41)

___

### enum

▸ **enum**(`«destructured»`): `Promise`<`undefined` \| `Enum`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `_enum` | `string` |

#### Returns

`Promise`<`undefined` \| `Enum`\>

#### Defined in

[application/services/schemaService.ts:29](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L29)

___

### enums

▸ **enums**(): `Promise`<`Enum`[]\>

#### Returns

`Promise`<`Enum`[]\>

#### Defined in

[application/services/schemaService.ts:25](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L25)

___

### mapping

▸ **mapping**(`«destructured»`): `Promise`<`undefined` \| `Mapping`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `mapping` | `string` |

#### Returns

`Promise`<`undefined` \| `Mapping`\>

#### Defined in

[application/services/schemaService.ts:37](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L37)

___

### mappings

▸ **mappings**(): `Promise`<`Mapping`[]\>

#### Returns

`Promise`<`Mapping`[]\>

#### Defined in

[application/services/schemaService.ts:33](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L33)

___

### stage

▸ **stage**(`«destructured»`): `Promise`<`undefined` \| `Stage`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `stage` | `string` |

#### Returns

`Promise`<`undefined` \| `Stage`\>

#### Defined in

[application/services/schemaService.ts:50](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L50)

___

### stages

▸ **stages**(): `Promise`<`Stage`[]\>

#### Returns

`Promise`<`Stage`[]\>

#### Defined in

[application/services/schemaService.ts:46](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/8b4c881/src/lib/application/services/schemaService.ts#L46)
