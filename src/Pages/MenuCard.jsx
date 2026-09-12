import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ruchira38 from '../assets/ruchira38.png'
import ruchira39 from '../assets/ruchira39.png'
import ruchira40 from '../assets/ruchira40.png'

function MenuCard() {
    const navigate = useNavigate();
    function transaction() {
        navigate("/payements")
    }

    const { mcid } = useParams();

    if (mcid == "Starters") {
        const s1 = [{ title: "chicken65", image: ruchira38 }, { title: "chicken lollipop", image: ruchira39 }, { title: "prawns curry", image: ruchira40 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '100px', flexWrap: 'wrap', }}>
                    {
                        s1.map((item) => (
                            <div style={{ height: '300px', width: '350px' }} >
                                <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1>
                                <img src={item.image} alt="noimg" style={{ height: '300px', width: '300px' }}></img>
                                <button onClick={transaction} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '300px', height: '40px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }

    // if (mcid == "Meals") {
    //     return (
    //         <>
    //             <h1 style={{ color: 'rgb(244,111,24)' }}>Welcome to Meals</h1>
    //             <img src={ruchira38} alt="noimg"></img>
    //             <button onClick={handle} style={{ backgroundColor: 'rgb(244,111,24)' }}>Place Order</button>
    //         </>
    //     )
    // }

    // if (mcid == "Deserts") {
    //     return (
    //         <>
    //             <h1 style={{ color: 'rgb(244,111,24)' }}>Welcome to Deserts</h1>
    //             <img src={ruchira38} alt="noimg"></img>
    //             <button onClick={handle} style={{ backgroundColor: 'rgb(244,111,24)' }}>Place Order</button>
    //         </>
    //     )
    // }
}

export default MenuCard
