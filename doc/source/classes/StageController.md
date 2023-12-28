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

[src/infrastructure/controllers/stageController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/stageController.ts#L6)

## Properties

### service

• `Private` `Readonly` **service**: [`StageService`](StageService.md)

#### Defined in

[src/infrastructure/controllers/stageController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/stageController.ts#L6)

## Methods

### collectRequestParams

▸ `Protected` **collectRequestParams**(`request`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |

#### Returns

`any`

#### Inherited from

Controller.collectRequestParams

#### Defined in

[src/infrastructure/controllers/Controller.ts:27](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L27)

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

[src/infrastructure/controllers/stageController.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/stageController.ts#L14)

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

[src/infrastructure/controllers/stageController.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/stageController.ts#L18)

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

[src/infrastructure/controllers/Controller.ts:50](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L50)

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

[src/infrastructure/controllers/stageController.ts:22](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/stageController.ts#L22)

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

[src/infrastructure/controllers/stageController.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/stageController.ts#L10)

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

[src/infrastructure/controllers/Controller.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L18)

___

### sendResponse

▸ `Protected` **sendResponse**(`response`, `payload?`): `void`

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

[src/infrastructure/controllers/Controller.ts:3](https://github.com/lambda-orm/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L3)
