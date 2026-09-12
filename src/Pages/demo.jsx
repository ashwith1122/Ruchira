
import ruchira16 from "../assets/ruchira16.png";
import ruchira17 from "../assets/ruchira17.png";
import ruchira18 from "../assets/ruchira18.png";
import ruchira19 from "../assets/ruchira19.png";
import ruchira20 from "../assets/ruchira20.png";
import ruchira21 from "../assets/ruchira21.png";
import ruchira22 from "../assets/ruchira22.png";
import ruchira23 from "../assets/ruchira23.png";
import ruchira24 from "../assets/ruchira24.png";
import ruchira25 from "../assets/ruchira25.png";
import ruchira26 from "../assets/ruchira26.png";
import ruchira27 from "../assets/ruchira27.png";

export const Demo = () => {

    const list = [ruchira16];

    return (
        <>
            <h1> Menu Card</h1>

            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} >
                {
                    list.map((ele) => {
                        return (
                            <li> <div style={{ height: '20rem', width: '12rem', backgroundColor: 'white' }} >
                                <img src={ele} />
                            </div>
                                <button style={{ width: '12rem' }}>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}