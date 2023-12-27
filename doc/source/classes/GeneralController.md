[orm-service](../README.md) / [Exports](../modules.md) / GeneralController

# Class: GeneralController

## Hierarchy

- `Controller`

  ↳ **`GeneralController`**

## Table of contents

### Constructors

- [constructor](GeneralController.md#constructor)

### Properties

- [metric](GeneralController.md#metric)
- [service](GeneralController.md#service)

### Methods

- [collectRequestParams](GeneralController.md#collectrequestparams)
- [handleRequest](GeneralController.md#handlerequest)
- [health](GeneralController.md#health)
- [metrics](GeneralController.md#metrics)
- [ping](GeneralController.md#ping)
- [sendError](GeneralController.md#senderror)
- [sendResponse](GeneralController.md#sendresponse)
- [version](GeneralController.md#version)

## Constructors

### constructor

• **new GeneralController**(`service`, `metric`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`GeneralService`](GeneralService.md) |
| `metric` | [`Metric`](../interfaces/Metric.md) |

#### Overrides

Controller.constructor

#### Defined in

[src/infrastructure/controllers/generalController.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L6)

## Properties

### metric

• `Private` `Readonly` **metric**: [`Metric`](../interfaces/Metric.md)

#### Defined in

[src/infrastructure/controllers/generalController.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L6)

___

### service

• `Private` `Readonly` **service**: [`GeneralService`](GeneralService.md)

#### Defined in

[src/infrastructure/controllers/generalController.ts:6](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L6)

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

[src/infrastructure/controllers/Controller.ts:27](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L27)

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

[src/infrastructure/controllers/Controller.ts:50](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L50)

___

### health

▸ **health**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/infrastructure/controllers/generalController.ts:14](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L14)

___

### metrics

▸ **metrics**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/infrastructure/controllers/generalController.ts:22](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L22)

___

### ping

▸ **ping**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/infrastructure/controllers/generalController.ts:18](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L18)

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

[src/infrastructure/controllers/Controller.ts:18](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L18)

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

[src/infrastructure/controllers/Controller.ts:3](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/Controller.ts#L3)

___

### version

▸ **version**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `response` | `Response`<`any`, `Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/infrastructure/controllers/generalController.ts:10](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/6d9193f/src/infrastructure/controllers/generalController.ts#L10)
