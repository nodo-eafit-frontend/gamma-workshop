const baseUrl = 'http://localhost:3001';

export const urls = {
  task: {
    put: () => `${baseUrl}/task`, // Create
    get: () => `${baseUrl}/tasks`, // Read
    post: (id) => `${baseUrl}/task/${id}`, // Update
    delete: (id) => `${baseUrl}/task/${id}`, // Delete
  },
};
