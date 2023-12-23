[orm-service](../README.md) / [Exports](../modules.md) / ServiceSchema

# Interface: ServiceSchema

## Hierarchy

- `Schema`

  ↳ **`ServiceSchema`**

## Table of contents

### Properties

- [application](ServiceSchema.md#application)
- [domain](ServiceSchema.md#domain)
- [infrastructure](ServiceSchema.md#infrastructure)
- [version](ServiceSchema.md#version)

## Properties

### application

• `Optional` **application**: `ApplicationSchema`

#### Inherited from

Schema.application

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:176

___

### domain

• **domain**: `DomainSchema`

#### Inherited from

Schema.domain

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:174

___

### infrastructure

• **infrastructure**: [`ServiceInfrastructureSchema`](ServiceInfrastructureSchema.md)

#### Overrides

Schema.infrastructure

#### Defined in

[src/domain/serviceSchema.ts:18](https://github.com/FlavioLionelRita/lambdaorm-svc/blob/285fb49/src/domain/serviceSchema.ts#L18)

___

### version

• **version**: `string`

#### Inherited from

Schema.version

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:173
