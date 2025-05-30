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
- [domain](SchemaController.md#domain)
- [entities](SchemaController.md#entities)
- [entity](SchemaController.md#entity)
- [entityMapping](SchemaController.md#entitymapping)
- [enum](SchemaController.md#enum)
- [enums](SchemaController.md#enums)
- [handleRequest](SchemaController.md#handlerequest)
- [mapping](SchemaController.md#mapping)
- [mappings](SchemaController.md#mappings)
- [schema](SchemaController.md#schema)
- [sendError](SchemaController.md#senderror)
- [sendResponse](SchemaController.md#sendresponse)
- [source](SchemaController.md#source)
- [sources](SchemaController.md#sources)
- [stage](SchemaController.md#stage)
- [stages](SchemaController.md#stages)
- [version](SchemaController.md#version)
- [views](SchemaController.md#views)

## Constructors

### constructor

• **new SchemaController**(`service`): [`SchemaController`](SchemaController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`SchemaService`](SchemaService.md) |

#### Returns

[`SchemaController`](SchemaController.md)

#### Overrides

Controller.constructor

#### Defined in

[src/infrastructure/controllers/schemaController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L6)

## Properties

### service

• `Private` `Readonly` **service**: [`SchemaService`](SchemaService.md)

#### Defined in

[src/infrastructure/controllers/schemaController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L6)

## Methods

### collectRequestParams

▸ **collectRequestParams**(`request`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |

#### Returns

`any`

#### Inherited from

Controller.collectRequestParams

#### Defined in

[src/infrastructure/controllers/Controller.ts:27](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/Controller.ts#L27)

___

### domain

▸ **domain**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L18)

___

### entities

▸ **entities**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:30](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L30)

___

### entity

▸ **entity**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:34](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L34)

___

### entityMapping

▸ **entityMapping**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:38](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L38)

___

### enum

▸ **enum**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:46](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L46)

___

### enums

▸ **enums**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:42](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L42)

___

### handleRequest

▸ **handleRequest**(`request`, `response`, `serviceOperation`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `any` |
| `response` | `any` |
| `serviceOperation` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Controller.handleRequest

#### Defined in

[src/infrastructure/controllers/Controller.ts:50](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/Controller.ts#L50)

___

### mapping

▸ **mapping**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:54](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L54)

___

### mappings

▸ **mappings**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:50](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L50)

___

### schema

▸ **schema**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L14)

___

### sendError

▸ **sendError**(`response`, `error`): `void`

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

[src/infrastructure/controllers/Controller.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/Controller.ts#L18)

___

### sendResponse

▸ **sendResponse**(`response`, `payload?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |
| `payload?` | `any` |

#### Returns

`void`

#### Inherited from

Controller.sendResponse

#### Defined in

[src/infrastructure/controllers/Controller.ts:3](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/Controller.ts#L3)

___

### source

▸ **source**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:22](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L22)

___

### sources

▸ **sources**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:26](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L26)

___

### stage

▸ **stage**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:62](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L62)

___

### stages

▸ **stages**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:58](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L58)

___

### version

▸ **version**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L10)

___

### views

▸ **views**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/schemaController.ts:66](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/schemaController.ts#L66)
