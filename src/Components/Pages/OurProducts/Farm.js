import 'styles/main.css';
import ReactPlayer from 'react-player';

export default function Farm() {
    return (
        <div>
            <p className="info-text mb-8">
                The company is in a process of building its medical, indoor cannabis farm.
                Feel free to take a look at our demonstration.
            </p>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=B5gNzoeCL5Y'
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    );
}
