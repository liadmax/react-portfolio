import { Children } from 'react';
import {useSpring, animated as A} from 'react-spring'
import './Spring.css'





const SpringIn = () => {
    const animatedProps = useSpring({
        opacity: 1,
        marginRigth: 5,
        from: {opacity: 0, marginRigth: -200},
        config :{mass: 1, tension: 150, friction: 10}
    });

  return (
    <>
    <A.div style={animatedProps}>{Children}</A.div>
    
    
  </>
  )

}

export default SpringIn