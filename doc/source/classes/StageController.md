[orm-service](../README.md) / [Exports](../modules.md) / StageController

# Class: StageController

## Hierarchy

- `Controller`

  ↳ **`StageController`**

## Table of contents

### Constructors

- [constructor](StageController.md#constructor)

### Properties

- [service](StageController.md#service)

### Methods

- [collectRequestParams](StageController.md#collectrequestparams)
- [exists](StageController.md#exists)
- [export](StageController.md#export)
- [handleRequest](StageController.md#handlerequest)
- [import](StageController.md#import)
- [list](StageController.md#list)
- [sendError](StageController.md#senderror)
- [sendResponse](StageController.md#sendresponse)

## Constructors

### constructor

• **new StageController**(`service`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`StageService`](StageService.md) |

#### Overrides

Controller.constructor

#### Defined in

[infrastructure/controllers/stageController.ts:6](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/stageController.ts#L6)

## Properties

### service

• `Private` `Readonly` **service**: [`StageService`](StageService.md)

#### Defined in

[infrastructure/controllers/stageController.ts:6](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/stageController.ts#L6)

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

[infrastructure/controllers/Controller.ts:21](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/Controller.ts#L21)

___

### exists

▸ **exists**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/stageController.ts:14](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/stageController.ts#L14)

___

### export

▸ **export**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/stageController.ts:18](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/stageController.ts#L18)

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

[infrastructure/controllers/Controller.ts:44](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/Controller.ts#L44)

___

### import

▸ **import**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/stageController.ts:22](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/stageController.ts#L22)

___

### list

▸ **list**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/stageController.ts:10](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/stageController.ts#L10)

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

[infrastructure/controllers/Controller.ts:12](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/Controller.ts#L12)

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

[infrastructure/controllers/Controller.ts:2](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/Controller.ts#L2)
