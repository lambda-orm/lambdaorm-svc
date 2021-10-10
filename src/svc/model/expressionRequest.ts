export default interface ExpressionRequest {
    expression: string
    schema: string
    dialect: 'mysql'| 'mssql'| 'oracle' | 'postgres' | 'nomgo'
}
