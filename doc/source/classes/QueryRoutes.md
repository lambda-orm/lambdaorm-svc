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

[src/infrastructure/routes/queryRoutes.ts:7](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/infrastructure/routes/queryRoutes.ts#L7)

## Properties

### controller

• `Private` `Readonly` **controller**: [`QueryController`](QueryController.md)

#### Defined in

[src/infrastructure/routes/queryRoutes.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/infrastructure/routes/queryRoutes.ts#L6)

## Methods

### getRoutes

▸ **getRoutes**(): `Router`

#### Returns

`Router`

#### Defined in

[src/infrastructure/routes/queryRoutes.ts:11](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/infrastructure/routes/queryRoutes.ts#L11)
