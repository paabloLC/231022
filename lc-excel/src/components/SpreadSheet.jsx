import { useState } from 'react';
import { useSpreadSheet } from '../hooks/useSpreadSheet';
import { getColumn } from '../utils';



const range = length => Array.from({length}, (_, i) => i);

export function SpreadSheet ({ rows, columns }) {
  const {cells, updateCell } = useSpreadSheet({columns, rows});
  return (
    <table className="[&_td]:w-16">
      <thead>
        <th />
        {range(columns).map(i => (
          <th className="bg-slate-300 text-center" key={i}>{getColumn(i)}</th>
        ))}
      </thead>
      {range(rows).map(row => {
        return <tr key={row}>
          <td className="bg-slate-300 text-center" key={`first-${row}`}>{row}</td>
          {range(columns).map(column => {
            return <td key={column}>
              <Cell 
                x={column} 
                y={row} 
                cell={cells[column][row]} 
                update={ (value) => updateCell({ x: column, y: row, value })}
                />
            </td>
          })}
        </tr>
      })}
    </table>
  )
}

const Cell = ({ x, y, cell, update }) => {
  const [isInput, setIsInput] = useState(false)

  if (isInput) {
    return (
      <input
        autoFocus
        className='w-full'
        defaultValue={cell.value}
        onBlur={(evt) => {
          setIsInput(false)
          update(evt.target.value)
        }}
      />
    )
  }

  return <span className="w-full block text-center" onClick={() => setIsInput(true)}>{cell.computedValue}</span>
}
