[orm-service](../README.md) / [Exports](../modules.md) / ExpressionController

# Class: ExpressionController

## Hierarchy

- `Controller`

  ↳ **`ExpressionController`**

## Table of contents

### Constructors

- [constructor](ExpressionController.md#constructor)

### Properties

- [queue](ExpressionController.md#queue)
- [service](ExpressionController.md#service)

### Methods

- [collectRequestParams](ExpressionController.md#collectrequestparams)
- [constraints](ExpressionController.md#constraints)
- [execute](ExpressionController.md#execute)
- [executeQueued](ExpressionController.md#executequeued)
- [handleRequest](ExpressionController.md#handlerequest)
- [metadata](ExpressionController.md#metadata)
- [model](ExpressionController.md#model)
- [parameters](ExpressionController.md#parameters)
- [sendError](ExpressionController.md#senderror)
- [sendResponse](ExpressionController.md#sendresponse)
- [sentence](ExpressionController.md#sentence)

## Constructors

### constructor

• **new ExpressionController**(`service`, `queue?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`ExpressionService`](ExpressionService.md) |
| `queue?` | [`Queue`](../interfaces/Queue.md) |

#### Overrides

Controller.constructor

#### Defined in

[infrastructure/controllers/expressionController.ts:6](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L6)

## Properties

### queue

• `Private` `Optional` `Readonly` **queue**: [`Queue`](../interfaces/Queue.md)

#### Defined in

[infrastructure/controllers/expressionController.ts:6](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L6)

___

### service

• `Private` `Readonly` **service**: [`ExpressionService`](ExpressionService.md)

#### Defined in

[infrastructure/controllers/expressionController.ts:6](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L6)

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

### constraints

▸ **constraints**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:10](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L10)

___

### execute

▸ **execute**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:14](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L14)

___

### executeQueued

▸ **executeQueued**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:18](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L18)

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

### metadata

▸ **metadata**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:25](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L25)

___

### model

▸ **model**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:29](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L29)

___

### parameters

▸ **parameters**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:33](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L33)

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

___

### sentence

▸ **sentence**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[infrastructure/controllers/expressionController.ts:37](https://github.com/FlavioLionelRita/lambdaorm/blob/1f5c1aaa/svc/src/lib/infrastructure/controllers/expressionController.ts#L37)