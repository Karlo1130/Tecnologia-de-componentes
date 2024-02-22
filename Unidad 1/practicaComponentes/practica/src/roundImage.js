import Image from 'react-bootstrap/Image';

function RoundImage(props) {
  return (
    <Image src={props.Image} width={100} height={100} roundedCircle />
  );
}

export default RoundImage;