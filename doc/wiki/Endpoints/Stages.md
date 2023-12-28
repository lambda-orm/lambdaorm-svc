# Stage endpoints

![stage-methods](https://raw.githubusercontent.com/lambda-orm/lambdaorm-svc/HEAD/images/stage-methods.png)

## Exists

Check if the stage was created and the file that maintains the state exists within the data folder.

Request:

```sh
curl -X GET "http://localhost:9291/stages/default/exists?format=beautiful"
```

Response

```json
{
  "exists": false
}
```

## Export

Returns the records of all the entities that belong to the stage

Request:

```sh
curl -X GET "http://localhost:9291/stages/default/export?format=beautiful"
```

## Import

Import the records into the entities belonging to the stage

Request:

```sh
curl -X POST "http://localhost:9291/stages/default/import" -H "Content-Type: application/json" -d @data.json
```
