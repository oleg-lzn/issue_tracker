export const issueSwagger = {
  '/api/issue': {
    get: {
      summary: 'Get all issues',
      description: 'Returns a list of all issues',
      responses: {
        200: {
          description: 'List of issues retrieved successfully',
        },
        500: {
          description: 'Server error',
        },
      },
    },
    post: {
      summary: 'Create a new issue',
      description: 'Creates a new issue with a title and description',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['title'],
              properties: {
                title: { type: 'string', example: 'Bug in login page' },
                description: {
                  type: 'string',
                  example: 'Error 500 when submitting form',
                },
              },
            },
          },
        },
      },
      responses: {
        201: { description: 'Issue created successfully' },
        400: { description: 'Invalid request data' },
      },
    },
  },

  '/api/issue/{id}': {
    get: {
      summary: 'Get issue by ID',
      description: 'Fetches a specific issue using its ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'ID of the issue to retrieve',
        },
      ],
      responses: {
        200: { description: 'Issue retrieved successfully' },
        404: { description: 'Issue not found' },
      },
    },

    delete: {
      summary: 'Delete an issue by ID',
      description: 'Deletes a specific issue using its ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'ID of the issue to delete',
        },
      ],
      responses: {
        200: { description: 'Issue deleted successfully' },
        404: { description: 'Issue not found' },
        500: { description: 'Internal server error' },
      },
    },
  },
}
