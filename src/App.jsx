import { Box } from '@mui/material'
import './App.css'
import ItemsList from './Components/ItemsList';

function App() {
  const data = [
    { id: 8, title: 'Eight' },
    { id: 1, title: 'One' },
    { id: 4, title: 'Four' },
    { id: 2, title: 'Two' },
    { id: 5, title: 'Five' },
    { id: 10, title: 'Ten' },
    { id: 6, title: 'Six' },
    { id: 9, title: 'Nine' },
    { id: 3, title: 'Three' },
    { id: 7, title: 'Seven' }
  ];

  return (
    <Box>
      <ItemsList data={data}/>
    </Box>
  )
}

export default App
