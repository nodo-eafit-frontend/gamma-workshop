export const getTasks = async () => {
  const response = await fetch('http://localhost:3001/tasks');
  const { tasks } = await response.json();

  return tasks;
};
