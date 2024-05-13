[orm-service](../README.md) / [Exports](../modules.md) / Metric

# Interface: Metric

## Table of contents

### Methods

- [after](Metric.md#after)
- [before](Metric.md#before)
- [metrics](Metric.md#metrics)

## Methods

### after

▸ **after**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`void`

#### Defined in

[src/application/ports/metric.ts:3](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/ports/metric.ts#L3)

___

### before

▸ **before**(`req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `any` |
| `res` | `any` |
| `next` | `any` |

#### Returns

`void`

#### Defined in

[src/application/ports/metric.ts:2](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/ports/metric.ts#L2)

___

### metrics

▸ **metrics**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/application/ports/metric.ts:4](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/application/ports/metric.ts#L4)
