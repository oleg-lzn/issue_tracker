export const issueSwagger = {
  '/api/issue': {
    get: {
      summary: 'Get all issues',
      description: 'Returns a list of issues',
      responses: {
        200: {
          description: 'Successful response',
        },
      },
    },
    post: {
      summary: 'Create new issue',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                description: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        201: { description: 'Issue created' },
      },
    },
  },
}
