// app/swagger/index.ts
import { createSwaggerSpec } from 'next-swagger-doc'
import { issueSwagger } from './docs/issue.swagger'

export const getApiDocs = async () => {
  return createSwaggerSpec({
    apiFolder: 'app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
      },
      paths: {
        ...issueSwagger,
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  })
}
