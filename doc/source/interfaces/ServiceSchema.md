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

node_modules/lambdaorm-base/schema/domain/schema.d.ts:182

___

### domain

• **domain**: `DomainSchema`

#### Inherited from

Schema.domain

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:180

___

### infrastructure

• **infrastructure**: [`ServiceInfrastructureSchema`](ServiceInfrastructureSchema.md)

#### Overrides

Schema.infrastructure

#### Defined in

[src/domain/serviceSchema.ts:18](https://github.com/lambda-orm/lambdaorm-svc/blob/c6a8fe9507aaf461cdd51965bf4fd0b7faab4ce1/src/domain/serviceSchema.ts#L18)

___

### version

• **version**: `string`

#### Inherited from

Schema.version

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:179
