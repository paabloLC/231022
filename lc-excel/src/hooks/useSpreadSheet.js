import { useReducer } from "react";

const getInitialState = ({ columns, rows }) => {
  const cells = Array.from(
    { length: columns },
    () => Array.from(
      { length: rows },
      () => 0
    )
  )

  return { cells }
}


const reducer = (state) => {
  return state
}

export const useSpreadSheet = ({ columns, rows }) => {
  const [{ cells }] = useReducer(reducer, getInitialState({ columns, rows }))

  const updateCell = ({ x, y, value }) => {
    // dispatch
  }

  return { cells, updateCell }
}
