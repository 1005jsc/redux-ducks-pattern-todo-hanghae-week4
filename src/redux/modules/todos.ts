// module을 만들때 순서

// 0. state타입

export type TodoType = {
  id: number;
  title: string | undefined;
  content: string | undefined;
  isDone: boolean;
};

export type TodosStateType = TodoType[];

// 1. Initial State

const initialState: TodosStateType = [
  {
    id: 1,
    title: '리엑트 공부하기',
    content: '리엑트 기초를 공부해봅시다',
    isDone: false,
  },
  {
    id: 2,
    title: '재신재신',
    content: '나는 재신재신입니다',
    isDone: false,
  },
  {
    id: 3,
    title: '아이유',
    content: '나는 아이유입니다',
    isDone: true,
  },
];

// 2. Action Value

const HANDLE_REDUX_SUBMIT = 'todos/HANDLE_REDUX_SUBMIT' as const;
const SET_REDUX_TODOS = 'todos/SET_REDUX_TODOS' as const;

// 3. Action Creator

export const handleReduxSubmit = (payload: TodoType) => {
  return {
    type: HANDLE_REDUX_SUBMIT,
    payload: payload,
  };
};

export const setReduxTodos = (payload: TodoType[]) => {
  return {
    type: SET_REDUX_TODOS,
    payload: payload,
  };
};

// 3-2 Action타입

type TodosAction =
  | ReturnType<typeof handleReduxSubmit>
  | ReturnType<typeof setReduxTodos>;

// 4. Reducer (state에 state타입, action에 action타입을 넣는다 )

const todos = (
  state: TodosStateType = initialState,
  action: TodosAction
): TodoType[] => {
  switch (action.type) {
    case HANDLE_REDUX_SUBMIT:
      return [...state, action.payload];
    case SET_REDUX_TODOS:
      return [...action.payload];
    default:
      return state;
  }
};

// 5. export default reducer

export default todos;
