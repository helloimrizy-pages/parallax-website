import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import './ParallaxAnimation.css';

function ParallaxAnimation() {
  return (
    <div className="ParallaxAnimation">
        <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
            <ParallaxLayer offset={0} speed={0}>
                <header className="web-header">
                    <nav className="navigation-menu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </ParallaxLayer>
        
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="text-overlay">hi.</div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.01}>
                <div className="animation-element parallax" id="hill"></div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={0.1} speed={-0.2}>
                <div className="animation-element parallax" id="tree-left"></div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={0.1} speed={0.3}>
                <div className="animation-element parallax" id="tree-right"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.1} speed={0.1}>
                <div className="animation-element parallax" id="mountain"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.1}>
                <div className="animation-element parallax" id="tent"></div>
            </ParallaxLayer>

            <div className="animation-element parallax" id="rock-mountain"></div>
 
            <ParallaxLayer offset={0} speed={-0.2}>
                <div className="animation-element parallax" id="cloud-left"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.1}>
                <div className="animation-element parallax" id="cloud-right"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.3}>
                <div className="animation-element parallax" id="birds-left"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.2}>
                <div className="animation-element parallax" id="birds-right"></div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={1} speed={0}>
                <MainContent />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0}>
                <SecondaryContent />
            </ParallaxLayer>

        </Parallax>
    </div>
  );
}

export default ParallaxAnimation;
