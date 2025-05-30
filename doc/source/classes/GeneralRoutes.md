[orm-service](../README.md) / [Exports](../modules.md) / GeneralRoutes

# Class: GeneralRoutes

## Table of contents

### Constructors

- [constructor](GeneralRoutes.md#constructor)

### Properties

- [controller](GeneralRoutes.md#controller)

### Methods

- [getRoutes](GeneralRoutes.md#getroutes)

## Constructors

### constructor

• **new GeneralRoutes**(`service`, `metric`): [`GeneralRoutes`](GeneralRoutes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`GeneralService`](GeneralService.md) |
| `metric` | [`Metric`](../interfaces/Metric.md) |

#### Returns

[`GeneralRoutes`](GeneralRoutes.md)

#### Defined in

[src/infrastructure/routes/generalRoutes.ts:7](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/routes/generalRoutes.ts#L7)

## Properties

### controller

• `Private` `Readonly` **controller**: [`GeneralController`](GeneralController.md)

#### Defined in

[src/infrastructure/routes/generalRoutes.ts:6](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/routes/generalRoutes.ts#L6)

## Methods

### getRoutes

▸ **getRoutes**(): `Router`

#### Returns

`Router`

#### Defined in

[src/infrastructure/routes/generalRoutes.ts:11](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/infrastructure/routes/generalRoutes.ts#L11)
