[orm-service](../README.md) / [Exports](../modules.md) / ServiceInfrastructureSchema

# Interface: ServiceInfrastructureSchema

## Hierarchy

- `InfrastructureSchema`

  ↳ **`ServiceInfrastructureSchema`**

## Table of contents

### Properties

- [mappings](ServiceInfrastructureSchema.md#mappings)
- [paths](ServiceInfrastructureSchema.md#paths)
- [queue](ServiceInfrastructureSchema.md#queue)
- [server](ServiceInfrastructureSchema.md#server)
- [service](ServiceInfrastructureSchema.md#service)
- [sources](ServiceInfrastructureSchema.md#sources)
- [stages](ServiceInfrastructureSchema.md#stages)
- [views](ServiceInfrastructureSchema.md#views)

## Properties

### mappings

• `Optional` **mappings**: `Mapping`[]

#### Inherited from

InfrastructureSchema.mappings

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:167

___

### paths

• `Optional` **paths**: `AppPathsConfig`

#### Inherited from

InfrastructureSchema.paths

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:166

___

### queue

• **queue**: [`QueuedInfo`](QueuedInfo.md)

#### Defined in

[src/domain/serviceSchema.ts:14](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/domain/serviceSchema.ts#L14)

___

### server

• `Optional` **server**: `ServerConfig`

#### Inherited from

InfrastructureSchema.server

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:171

___

### service

• **service**: [`ServiceConfig`](ServiceConfig.md)

#### Defined in

[src/domain/serviceSchema.ts:13](https://github.com/lambda-orm/lambdaorm-svc/blob/329a1ab8cb856cb7ce9bb3c8d329805dd7e67b36/src/domain/serviceSchema.ts#L13)

___

### sources

• `Optional` **sources**: `Source`[]

#### Inherited from

InfrastructureSchema.sources

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:169

___

### stages

• `Optional` **stages**: `Stage`[]

#### Inherited from

InfrastructureSchema.stages

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:170

___

### views

• `Optional` **views**: `View`[]

#### Inherited from

InfrastructureSchema.views

#### Defined in

node_modules/lambdaorm-base/schema/domain/schema.d.ts:168
