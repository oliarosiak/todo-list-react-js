
import { MotivationImage, MotivationText } from './Motivation.styled';

export default function Motivation({ background }) {  
  const urls = background.map(({ webformatURL }) => webformatURL);
  const picture = urls[1];
  return (
    <>
      <MotivationImage style={{ backgroundImage: `url(${picture})` }} >
        <MotivationText>
          today you are the best version of yourself!
        </MotivationText>
      </MotivationImage>
    </>
  );
}


//.webformatURL