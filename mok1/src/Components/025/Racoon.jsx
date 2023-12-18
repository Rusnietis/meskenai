import Rabit from "./Rabit";

export default function Racoon({svoris, name, color, randomColor, children}) {

    const doThing = _ => {
        return 'Nice animal'
    }

    const yes = <><h3>yes, true</h3>{doThing()}</>;


    return (
        <>



            <h2 style={{ color: what.color}}>

                Racoon
                {what.name}
                {' '}
                {/* {svoris *2} kg */}

                
            </h2>
            <i>
                {
                    doThing()
                }
                {
                    0
                    ?
                    yes
                    :
                    <Rabit randomColor={randomColor} />
                }
                {
                    0 && <h3>False</h3>

                }
            </i>
           {children}
        </>

    )










}