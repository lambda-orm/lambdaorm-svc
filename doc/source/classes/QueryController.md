[orm-service](../README.md) / [Exports](../modules.md) / QueryController

# Class: QueryController

## Hierarchy

- `Controller`

  ↳ **`QueryController`**

## Table of contents

### Constructors

- [constructor](QueryController.md#constructor)

### Properties

- [queue](QueryController.md#queue)
- [service](QueryController.md#service)

### Methods

- [collectRequestParams](QueryController.md#collectrequestparams)
- [constraints](QueryController.md#constraints)
- [execute](QueryController.md#execute)
- [executeQueued](QueryController.md#executequeued)
- [handleRequest](QueryController.md#handlerequest)
- [metadata](QueryController.md#metadata)
- [model](QueryController.md#model)
- [parameters](QueryController.md#parameters)
- [plan](QueryController.md#plan)
- [sendError](QueryController.md#senderror)
- [sendResponse](QueryController.md#sendresponse)

## Constructors

### constructor

• **new QueryController**(`service`, `queue?`): [`QueryController`](QueryController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`QueryService`](QueryService.md) |
| `queue?` | [`Queue`](../interfaces/Queue.md) |

#### Returns

[`QueryController`](QueryController.md)

#### Overrides

Controller.constructor

#### Defined in

[src/infrastructure/controllers/queryController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L6)

## Properties

### queue

• `Private` `Optional` `Readonly` **queue**: [`Queue`](../interfaces/Queue.md)

#### Defined in

[src/infrastructure/controllers/queryController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L6)

___

### service

• `Private` `Readonly` **service**: [`QueryService`](QueryService.md)

#### Defined in

[src/infrastructure/controllers/queryController.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L6)

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

[src/infrastructure/controllers/queryController.ts:10](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L10)

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

[src/infrastructure/controllers/queryController.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L14)

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

[src/infrastructure/controllers/queryController.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L18)

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

[src/infrastructure/controllers/queryController.ts:25](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L25)

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

[src/infrastructure/controllers/queryController.ts:29](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L29)

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

[src/infrastructure/controllers/queryController.ts:33](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L33)

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

[src/infrastructure/controllers/queryController.ts:37](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/controllers/queryController.ts#L37)

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
