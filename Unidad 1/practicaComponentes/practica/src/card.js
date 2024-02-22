import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card(promps) {
  return (
    <Card style={{ width: '25%' }}>
      <Card.Img variant="top" src={promps.Image} />
      <Card.Body>
        <Card.Title>{promps.Title}</Card.Title>
        <Card.Text>
          {promps.Text}
        </Card.Text>
        <Button variant="primary">Mas info</Button>
      </Card.Body>
    </Card>
  );
}

export default card;