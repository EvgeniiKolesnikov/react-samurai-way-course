type AddressType = {
  city?: string | null,
  country: string | null
}

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  adresses: [] as Array<AddressType>,
  counter: 0
};

export type InitialStateType = typeof initialState;
let state: InitialStateType = {
  name: 'Dimych',
  age: 33,
  counter: 10,
  isSamurai: true,
  adresses: [{city:'Msk', country:'Rus'}],
}


let GET_TASKS = 'APP/GetTASKS'
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS,
}
let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12
}


const summ = (a: number, b: number) => {
  return a + b;
}
summ(10, +'10')

// console.log(summ(10, +'10'));