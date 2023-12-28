# Expressions on Schema

All the expressions that are used for the definition of conditions and for the execution of actions are based on the expression engine [3xpr](https://www.npmjs.com/package/3xpr)

## LambdaOrm  functions

In addition to the operations and functions defined in [3xpr](https://www.npmjs.com/package/3xpr) lambdaorm extends the expression model with the following functions.

| Function 																									| Description 																|
| --------------------------------------------------------- | ------------------------------------------- |
| toBase64(value:string):string 														| Encode a string to base64 									|
| getBase64(value:string):string 														| Decode a base64 string 											|
| encrypt(value:string,key:string):string 									| Encrypt a string with a key 								|
| decrypt(value:string,key:string):string 									| Decrypt a string with a key 								|
| orm.execute(expression:string,data:any,options:any):any 	| Execute an expression and return the result |
| orm.plan(expression:string,options:any):any 							| Return the execution plan of the expression |
| orm.metadata(expression:string):any 											| Return the metadata of the expression 			|
| orm.model(expression:string):any 													| Return the model of the expression 					|
| orm.parameters(expression:string):any 										| Return the parameters of the expression 		|
| orm.constraints(expression:string):any 										| Return the constraints of the expression 		|

## Service functions

In addition to the operations and functions defined in [3xpr](https://www.npmjs.com/package/3xpr) and [lambdaorm](https://github.com/lambda-orm/lambdaorm/wiki/SchemaDefinition-Expressions), lambdaOrm Service extends the expression model with the following functions.

| Function 																									| Description 																|
| --------------------------------------------------------- | ------------------------------------------- |
| kafka.send(topic:string,messages:any[]):void 						  | Send a message to a kafka topic 						|

**Example:**

```yaml
application:
  listeners:
    - name: syncInsights
      on: [insert, bulkInsert, update, delete ]
      condition: options.stage.in("default","cqrs")
       after: kafka.send("insights-sync",[{expression:expression,data:data}])    
```
