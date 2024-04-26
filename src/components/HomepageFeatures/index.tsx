import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import go from '../../../static/img/pngwing.com.png'
import node from '../../../static/img/nodejs.png'
import java from '../../../static/img/java.png'
import python from '../../../static/img/python.png'
import netcore from '../../../static/img/netcore.png'


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className=" grid grid-cols-5 gap-5 p-20">
        <img src={go} alt="" style={{width:"80%"}}/>
        <img src={node} alt="" style={{width:"80%"}}/>
        <img src={java} alt="" style={{width:"80%"}}/>
        <img src={python} alt="" style={{width:"80%"}}/>
        <img src={netcore} alt="" style={{width:"80%"}}/>

        </div>
      </div>
    </section>
  );
}
