import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar(promps) {
  return (
    <div id="searchBarDiv">
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={promps.Search}
      />
      <Button>
        Buscar
      </Button>
    </div>
  );
}

export default SearchBar;