// 0. type들 (state타입, action타입)

type CounterStateType = {
  number: number;
};

// 1. Initial State
const initialState: CounterStateType = {
  number: 0,
};

// 2. Action Value
// 액션 타입(action value라고도 함)을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.

const ADD_NUMBER = 'counter1/ADD_NUMBER' as const;
const ADD_NUMBER2 = 'counter1/ADD_NUMBER' as const;

// 3. Action Creator
export const addNumber = (payload: number) => {
  return {
    type: ADD_NUMBER,
    payload: payload,
  };
};

export const addNumber2 = (payload: number) => {
  return {
    type: ADD_NUMBER2,
    payload: payload,
  };
};

// 3-2 counterAction의 타입
// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.

type CounterAction =
  | ReturnType<typeof addNumber>
  | ReturnType<typeof addNumber2>;

// 4. Reducer
// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.

const counter1 = (
  state: CounterStateType = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case ADD_NUMBER:
      console.log(state.number);
      return {
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

// 5. export default reducer
export default counter1;
