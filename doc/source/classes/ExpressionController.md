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
- [plan](ExpressionController.md#plan)
- [sendError](ExpressionController.md#senderror)
- [sendResponse](ExpressionController.md#sendresponse)

## Constructors

### constructor

• **new ExpressionController**(`service`, `queue?`): [`ExpressionController`](ExpressionController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`ExpressionService`](ExpressionService.md) |
| `queue?` | [`Queue`](../interfaces/Queue.md) |

#### Returns

[`ExpressionController`](ExpressionController.md)

#### Overrides

Controller.constructor

#### Defined in

[src/infrastructure/controllers/expressionController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L6)

## Properties

### queue

• `Private` `Optional` `Readonly` **queue**: [`Queue`](../interfaces/Queue.md)

#### Defined in

[src/infrastructure/controllers/expressionController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L6)

___

### service

• `Private` `Readonly` **service**: [`ExpressionService`](ExpressionService.md)

#### Defined in

[src/infrastructure/controllers/expressionController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L6)

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

[src/infrastructure/controllers/Controller.ts:27](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/Controller.ts#L27)

___

### constraints

▸ **constraints**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L10)

___

### execute

▸ **execute**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L14)

___

### executeQueued

▸ **executeQueued**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L18)

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

[src/infrastructure/controllers/Controller.ts:50](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/Controller.ts#L50)

___

### metadata

▸ **metadata**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:25](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L25)

___

### model

▸ **model**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:29](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L29)

___

### parameters

▸ **parameters**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:33](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L33)

___

### plan

▸ **plan**(`request`, `response`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `response` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/infrastructure/controllers/expressionController.ts:37](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/expressionController.ts#L37)

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

[src/infrastructure/controllers/Controller.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/Controller.ts#L18)

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

[src/infrastructure/controllers/Controller.ts:3](https://github.com/lambda-orm/lambdaorm-svc/blob/454fa1df10e472bc978f8a973a986e73b6e90794/src/infrastructure/controllers/Controller.ts#L3)
