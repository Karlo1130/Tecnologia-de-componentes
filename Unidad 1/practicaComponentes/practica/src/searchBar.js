import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  return (
    <div id="searchBarDiv">
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Button>
        Buscar
      </Button>
    </div>
  );
}

export default SearchBar;