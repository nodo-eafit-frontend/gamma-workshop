export const initialState = {
  tasks: [
    {
      description: '',
      isDone: false,
      id: 'asdfasdf',
      isEditing: true,
    },
  ],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'getTasks': {
      return { ...state, tasks: payload };
    }

    case 'modifyTask': {
      const { id, ...content } = payload;
      const { tasks } = state;

      const taskIndex = tasks.findIndex((task) => task.id === id);
      const task = tasks[taskIndex];
      tasks[taskIndex] = { ...task, ...content };

      return { ...state, tasks: tasks };
    }

    case 'addTask': {
      state.tasks.push({ id: Date.now(), description: '', isDone: false, isEditing: true, isPersist: false });

      return { ...state };
    }

    default: {
      return state;
    }
  }
};
