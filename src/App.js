import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import Save from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function CheckBoxComponent() {
  const { checked, setChecked } = useState(true)
  return (
    <div>
      <FormControlLabel
        control={<Checkbox
          checked={ checked }
          onChange={(e) => setChecked(e.target.checked) }
        />}
        label="Testing checkbox"
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckBoxComponent />
        <ButtonGroup
          size="big"
          color="primary"
          variant="contained"
        >
          <Button>
            <Save />
            Save 
          </Button>
          <Button color="secondary">
            <DeleteIcon />
            Discard
          </Button>

        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
