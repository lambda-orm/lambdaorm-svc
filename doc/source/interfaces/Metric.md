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

[application/ports/metric.ts:3](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/4b62e68/src/application/ports/metric.ts#L3)

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

[application/ports/metric.ts:2](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/4b62e68/src/application/ports/metric.ts#L2)

___

### metrics

▸ **metrics**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[application/ports/metric.ts:4](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/4b62e68/src/application/ports/metric.ts#L4)
