import React, { useRef, useEffect} from 'react'; //useState,

const Character = ({name, allegiance, culture, icon, position, strength }) => {

    let localPlayer1Key = "player1";
    let localPlayer2Key = "player2";
    const cssClass1 = "cards__card--active-color-1";
    const cssClass2 = "cards__card--active-color-2";


  //  const [toggle, setToggle] = useState(false);
   
    // const [player1, setPlayer1] = useState(null);
    // const [player2, setPlayer2] = useState(null);

    useEffect(() => {
      
    }, [])

    let player1 = null;
    let player2 = null;
    const ref = useRef(false);

    function handleClick(e) {
        if(player1 && player2 && !e.currentTarget.classList.contains(cssClass1) && !e.currentTarget.classList.contains(cssClass2)) { 
            return true;
        }
        // setToggle((toggle) => !toggle)
      
        if(player1 === null && !e.currentTarget.classList.contains(cssClass2)){ 
            //setPlayer1(name);
            player1 = name;
            e.currentTarget.classList.add(cssClass1)
            localStorage.setItem(localPlayer1Key, name);
        }else{
            if(e.currentTarget.classList.contains(cssClass1) ) { 
                //setPlayer1(null);
                player1 = null;
                e.currentTarget.classList.remove(cssClass1)
                localStorage.removeItem(localPlayer1Key);
            }else{
                if(e.currentTarget.classList.contains(cssClass2)) { 
                    //setPlayer2(null);
                    player2 = null;
                    e.currentTarget.classList.remove(cssClass2)
                    localStorage.removeItem(localPlayer2Key);
                }else { 
                    if(player2 === null && ref === !e.currentTarget.classList.contains(cssClass1)) { 
                    //setPlayer2(name);
                    player2 = name;
                    e.currentTarget.classList.add(cssClass2);
                    localStorage.setItem(localPlayer2Key, name);
                    }
                }
            }
        }
    }
   

        return (
                <div 
                    className="cards__card cards__card--color" 
                    onClick={handleClick} 
                    key={name}
                    ref={ref}
                   
                    //toggle={toggle}
                    > 
                 
                    <div className="cards__card-body white-text">
                        <img className="cards__icon" src={icon} alt="icon" />
                        <p className="cards__card--active-text"></p>
                        <table className="cards__table">
                            <tr>
                                <th>Name:</th> 
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Allegiance:</th> 
                                <td>{allegiance}</td>
                            </tr>
                            <tr>
                                <th>Culture:</th> 
                                <td>{culture}</td>
                            </tr>
                            <tr>
                                <th>Position:</th> 
                                <td>{position}</td>
                            </tr>
                            <tr>
                                <th>Strength:</th> 
                                <td>{strength}</td>
                            </tr>
                        </table>
                     </div>
                </div>
        );
    };

export default Character;