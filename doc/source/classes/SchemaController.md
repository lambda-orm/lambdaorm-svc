[orm-service](../README.md) / [Exports](../modules.md) / SchemaController

# Class: SchemaController

## Hierarchy

- `Controller`

  ↳ **`SchemaController`**

## Table of contents

### Constructors

- [constructor](SchemaController.md#constructor)

### Properties

- [service](SchemaController.md#service)

### Methods

- [collectRequestParams](SchemaController.md#collectrequestparams)
- [dataSource](SchemaController.md#datasource)
- [dataSources](SchemaController.md#datasources)
- [entities](SchemaController.md#entities)
- [entity](SchemaController.md#entity)
- [entityMapping](SchemaController.md#entitymapping)
- [enum](SchemaController.md#enum)
- [enums](SchemaController.md#enums)
- [handleRequest](SchemaController.md#handlerequest)
- [mapping](SchemaController.md#mapping)
- [mappings](SchemaController.md#mappings)
- [sendError](SchemaController.md#senderror)
- [sendResponse](SchemaController.md#sendresponse)
- [stage](SchemaController.md#stage)
- [stages](SchemaController.md#stages)

## Constructors

### constructor

• **new SchemaController**(`service`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`SchemaService`](SchemaService.md) |

#### Overrides

Controller.constructor

#### Defined in

[infrastructure/controllers/schemaController.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L6)

## Properties

### service

• `Private` `Readonly` **service**: [`SchemaService`](SchemaService.md)

#### Defined in

[infrastructure/controllers/schemaController.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L6)

## Methods

### collectRequestParams

▸ `Protected` **collectRequestParams**(`request`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `any` |

#### Returns

`any`

#### Inherited from

Controller.collectRequestParams

#### Defined in

[infrastructure/controllers/Controller.ts:21](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/Controller.ts#L21)

___

### dataSource

▸ **dataSource**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L10)

___

### dataSources

▸ **dataSources**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:14](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L14)

___

### entities

▸ **entities**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:18](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L18)

___

### entity

▸ **entity**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:22](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L22)

___

### entityMapping

▸ **entityMapping**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:26](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L26)

___

### enum

▸ **enum**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:34](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L34)

___

### enums

▸ **enums**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:30](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L30)

___

### handleRequest

▸ `Protected` **handleRequest**(`request`, `response`, `serviceOperation`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `any` |
| `response` | `any` |
| `serviceOperation` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Controller.handleRequest

#### Defined in

[infrastructure/controllers/Controller.ts:44](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/Controller.ts#L44)

___

### mapping

▸ **mapping**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:42](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L42)

___

### mappings

▸ **mappings**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:38](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L38)

___

### sendError

▸ `Protected` **sendError**(`response`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |
| `error` | `any` |

#### Returns

`void`

#### Inherited from

Controller.sendError

#### Defined in

[infrastructure/controllers/Controller.ts:12](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/Controller.ts#L12)

___

### sendResponse

▸ `Protected` **sendResponse**(`response`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |
| `payload` | `any` |

#### Returns

`void`

#### Inherited from

Controller.sendResponse

#### Defined in

[infrastructure/controllers/Controller.ts:2](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/Controller.ts#L2)

___

### stage

▸ **stage**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:50](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L50)

___

### stages

▸ **stages**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/schemaController.ts:46](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/e9f8a66/src/lib/infrastructure/controllers/schemaController.ts#L46)
