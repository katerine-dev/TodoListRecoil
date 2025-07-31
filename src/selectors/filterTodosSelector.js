import { selector } from 'recoil';
import { todoListState } from '../atoms/todoAtom';
import { todoFilterState } from '../atoms/filterAtom';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoFilterState);
    const list   = get(todoListState);

    switch (filter) {
      case 'completed':
        return list.filter(todo => todo.isComplete);
      case 'pending':
        return list.filter(todo => !todo.isComplete);
      default:
        return list;
    }
  },
});
