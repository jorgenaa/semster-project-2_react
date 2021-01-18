import React from 'react';
import gameCharacters from '../../gameContent';
import Character from './Character';

export const Home = () => {
    
    return (
        <>
            <div className="background-img background-img--characterPage">
                <main className="container main">
                    <section className="row main-hd p-3">
                        <h2 className="main-hd__title">Character Selection</h2>
                        <p className="main-hd__text">
                            Two player game. Click on one of the cards to select a player. Max
                            one character per player
                        </p>
                        <div className="status status--color col-sm-12 col-md-6">
                            <p className="status__selected-player">
                                Player 1:<span
                                    id="selected-player-one"
                                    className="status__selected-player status__selected-player--active-1"
                                ></span>
                            </p>

                            <p className="status__selected-player">
                                Player 2:<span
                                    id="selected-player-two"
                                    className="status__selected-player status__selected-player--active-2"
                                ></span>
                            </p>
                        </div>

                        <div className="ml-auto">
                            <a href="game.html">
                                <button
                                    id="continue"
                                    type="button"
                                    className="btn btn--red btn--hover btn--continue mr-2"
                                    disabled
                                >
                                    Click here to continue
                                    <i ></i>
                                </button>
                            </a>
                        </div>
                    
                    </section>
                
                    <section className="cards cards--background ">

                        {gameCharacters.map(gameCharacter => {
                            const {name, allegiance, culture, position, strength, icon } = gameCharacter;
                         
                            return <Character
                                        name={name}
                                        allegiance={allegiance}
                                        culture={culture}
                                        icon={icon}
                                        position={position}
                                        strength={strength}
                                        />
                            })}
                    </section>
                </main>
            </div>
        </>
        )
    }

export default Home;