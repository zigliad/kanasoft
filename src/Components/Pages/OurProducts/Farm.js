import 'styles/main.css';
import ReactPlayer from 'react-player';

export default function Farm() {
    return (
        <div>
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
