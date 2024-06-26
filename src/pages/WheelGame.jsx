import { useContext } from 'react';
import HeroCard from '../components/arcade/wheels/HeroCard';
import { GameContext } from '../context/GameContext';
import Wheels from '../components/arcade/wheels/Wheels';
import WheelProvider from '../context/WheelContext';
import Bulwark from '../components/arcade/wheels/Bulwark';
import Crown from '../components/arcade/wheels/Crown';

export default function WheelGame() {
    
    const { player1, player2 } = useContext(GameContext);

    const playerArray = [player1, player2];
        
    return (
        <section id='Boardgame'>
            {playerArray.map(player => (
                <div key={player.id} className={`player-board${player.id}`}>
                    <div className={`top-player${player.id}`}>
                        <Bulwark player={player} />
                        <Crown player={player} />
                    </div>
                    <div className={`bottom-player${player.id}`}>
                        <HeroCard base={'square'} player={player} />
                        <WheelProvider>
                            <Wheels player={player}/>
                        </WheelProvider>
                        <HeroCard base={'diamond'} player={player} />
                    </div>
                </div>
            ))}
        </section>
    );
}