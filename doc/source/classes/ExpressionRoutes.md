[orm-service](../README.md) / [Exports](../modules.md) / ExpressionRoutes

# Class: ExpressionRoutes

## Table of contents

### Constructors

- [constructor](ExpressionRoutes.md#constructor)

### Properties

- [controller](ExpressionRoutes.md#controller)

### Methods

- [getRoutes](ExpressionRoutes.md#getroutes)

## Constructors

### constructor

• **new ExpressionRoutes**(`service`, `queue?`): [`ExpressionRoutes`](ExpressionRoutes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`ExpressionService`](ExpressionService.md) |
| `queue?` | [`Queue`](../interfaces/Queue.md) |

#### Returns

[`ExpressionRoutes`](ExpressionRoutes.md)

#### Defined in

[src/infrastructure/routes/expressionRoutes.ts:7](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/infrastructure/routes/expressionRoutes.ts#L7)

## Properties

### controller

• `Private` `Readonly` **controller**: [`ExpressionController`](ExpressionController.md)

#### Defined in

[src/infrastructure/routes/expressionRoutes.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/infrastructure/routes/expressionRoutes.ts#L6)

## Methods

### getRoutes

▸ **getRoutes**(): `Router`

#### Returns

`Router`

#### Defined in

[src/infrastructure/routes/expressionRoutes.ts:11](https://github.com/lambda-orm/lambdaorm-svc/blob/c3125b9eb5322ac4673a26ba4710ffb3a3545f04/src/infrastructure/routes/expressionRoutes.ts#L11)
