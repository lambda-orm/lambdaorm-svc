[orm-service](../README.md) / [Exports](../modules.md) / QueryRoutes

# Class: QueryRoutes

## Table of contents

### Constructors

- [constructor](QueryRoutes.md#constructor)

### Properties

- [controller](QueryRoutes.md#controller)

### Methods

- [getRoutes](QueryRoutes.md#getroutes)

## Constructors

### constructor

• **new QueryRoutes**(`service`, `queue?`): [`QueryRoutes`](QueryRoutes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`QueryService`](QueryService.md) |
| `queue?` | [`Queue`](../interfaces/Queue.md) |

#### Returns

[`QueryRoutes`](QueryRoutes.md)

#### Defined in

[src/infrastructure/routes/queryRoutes.ts:7](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/routes/queryRoutes.ts#L7)

## Properties

### controller

• `Private` `Readonly` **controller**: [`QueryController`](QueryController.md)

#### Defined in

[src/infrastructure/routes/queryRoutes.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/routes/queryRoutes.ts#L6)

## Methods

### getRoutes

▸ **getRoutes**(): `Router`

#### Returns

`Router`

#### Defined in

[src/infrastructure/routes/queryRoutes.ts:11](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/routes/queryRoutes.ts#L11)
