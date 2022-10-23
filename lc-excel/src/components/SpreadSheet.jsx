import { useSpreadSheet } from '../hooks/useSpreadSheet';

const FIRST_CHAR_CODE = 65;

const range = length => Array.from({length}, (_, i) => i);
const getColumn = i => String.fromCharCode(FIRST_CHAR_CODE + i);

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
              <Cell x={column} y={row} cell={cells[column][row]} />
            </td>
          })}
        </tr>
      })}
    </table>
  )
}

const Cell = ({ x, y, cell }) => <span contentEditable>{cell}</span>
