import { urls } from './urls';

async function makeRequest(url, options = {}) {
  const { body } = options;
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(url, options);
  const data = await response.json();

  return { status: response.status, data };
}

export const taskApi = {
  getTasks: async () => {
    const url = urls.task.get();
    const { status, data } = await makeRequest(url);

    return data.tasks;
  },
  createTask: async (body) => {
    const url = urls.task.put();
    const { status, data } = await makeRequest(url, { method: 'PUT', body });

    return data.id;
  },
  updateTask: async (body) => {
    const { id, ...restBody } = body;
    const url = urls.task.post(id);
    const { status, data } = await makeRequest(url, { method: 'POST', body: restBody });

    return data;
  },
  deleteTask: async (body) => {
    const { id } = body;
    const url = urls.task.delete(id);

    const { status, data } = await makeRequest(url, { method: 'DELETE' });

    return status;
  },
};
