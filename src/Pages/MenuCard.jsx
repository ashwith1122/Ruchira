import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ruchira54 from '../assets/ruchira54.png'
import ruchira55 from '../assets/ruchira55.png'
import ruchira56 from '../assets/ruchira56.png'
import ruchira57 from '../assets/ruchira57.png'
import ruchira58 from '../assets/ruchira58.png'
import ruchira59 from '../assets/ruchira59.png'
import ruchira60 from '../assets/ruchira60.png'
import ruchira61 from '../assets/ruchira61.png'
import ruchira62 from '../assets/ruchira62.png'
import ruchira63 from '../assets/ruchira63.png'
import ruchira64 from '../assets/ruchira64.png'
import ruchira65 from '../assets/ruchira65.png'
import ruchira66 from '../assets/ruchira66.png'
import ruchira67 from '../assets/ruchira67.png'
import ruchira68 from '../assets/ruchira68.png'
import ruchira69 from '../assets/ruchira69.png'
import ruchira70 from '../assets/ruchira70.png'
import ruchira71 from '../assets/ruchira71.png'
import ruchira72 from '../assets/ruchira72.png'
import ruchira73 from '../assets/ruchira73.png'
import ruchira74 from '../assets/ruchira74.png'
import ruchira75 from '../assets/ruchira75.png'
import ruchira76 from '../assets/ruchira76.png'
import ruchira77 from '../assets/ruchira77.png'
import ruchira78 from '../assets/ruchira78.png'
import ruchira79 from '../assets/ruchira79.png'
import ruchira80 from '../assets/ruchira80.png'
import ruchira81 from '../assets/ruchira81.png'
import ruchira82 from '../assets/ruchira82.png'
import ruchira83 from '../assets/ruchira83.png'
import ruchira84 from '../assets/ruchira84.png'
import ruchira85 from '../assets/ruchira85.png'
import ruchira86 from '../assets/ruchira86.png'
import ruchira87 from '../assets/ruchira87.png'
import ruchira88 from '../assets/ruchira88.png'
import ruchira89 from '../assets/ruchira89.png'
import ruchira90 from '../assets/ruchira90.png'
import ruchira91 from '../assets/ruchira91.png'
import ruchira92 from '../assets/ruchira92.png'
import ruchira93 from '../assets/ruchira93.png'
import ruchira94 from '../assets/ruchira94.png'
import ruchira95 from '../assets/ruchira95.png'
import ruchira96 from '../assets/ruchira96.png'
import ruchira97 from '../assets/ruchira97.png'
import ruchira98 from '../assets/ruchira98.png'
import ruchira99 from '../assets/ruchira99.png'
import ruchira100 from '../assets/ruchira100.png'
import ruchira101 from '../assets/ruchira101.png'
import ruchira102 from '../assets/ruchira102.png'
import ruchira103 from '../assets/ruchira103.png'
import ruchira104 from '../assets/ruchira104.png'
import ruchira105 from '../assets/ruchira105.png'
import ruchira106 from '../assets/ruchira106.png'
import ruchira107 from '../assets/ruchira107.png'
import ruchira108 from '../assets/ruchira108.png'
import ruchira109 from '../assets/ruchira109.png'
import ruchira110 from '../assets/ruchira110.png'
import ruchira111 from '../assets/ruchira111.png'
import ruchira112 from '../assets/ruchira112.png'
import ruchira113 from '../assets/ruchira113.png'
import ruchira114 from '../assets/ruchira114.png'
import ruchira115 from '../assets/ruchira115.png'
import ruchira116 from '../assets/ruchira116.png'
import ruchira117 from '../assets/ruchira117.png'
import ruchira118 from '../assets/ruchira118.png'
import ruchira119 from '../assets/ruchira119.png'
import ruchira120 from '../assets/ruchira120.png'
import ruchira121 from '../assets/ruchira121.png'
import ruchira122 from '../assets/ruchira122.png'
import ruchira123 from '../assets/ruchira123.png'
import ruchira124 from '../assets/ruchira124.png'
import ruchira125 from '../assets/ruchira125.png'
import ruchira126 from '../assets/ruchira126.png'
import ruchira127 from '../assets/ruchira127.png'
import ruchira128 from '../assets/ruchira128.png'
import ruchira129 from '../assets/ruchira129.png'
import ruchira130 from '../assets/ruchira130.png'
import ruchira131 from '../assets/ruchira131.png'
import ruchira132 from '../assets/ruchira132.png'
import ruchira133 from '../assets/ruchira133.png'
import ruchira134 from '../assets/ruchira134.png'
import ruchira135 from '../assets/ruchira135.png'
import ruchira136 from '../assets/ruchira136.png'
import { CartContext } from '../Context/CartContext'


function MenuCard() {
    const navigate = useNavigate();

    const { addItems } = useContext(CartContext);
    function transaction(item) {
        console.log("CLIKED")
        console.log(item)
        addItems(item);
        navigate('/addtocart');
    }

    const { mcid } = useParams();

    if (mcid == "Starters") {
        const s1 = [{ id: 1, title: "chicken65", image: ruchira54, amount: 180, qnt: 1 }, { id: 2, title: "chicken lollipop", image: ruchira55, amount: 250, qnt: 1 }, { id: 3, title: "prawns fry", image: ruchira56, amount: 320, qnt: 1 }, { id: 4, title: "paneer tikka", image: ruchira57, amount: 220, qnt: 1 }, { id: 5, title: "baby corn manchurian", image: ruchira58, amount: 180, qnt: 1 }, { id: 6, title: "chicken wings", image: ruchira59, amount: 250, qnt: 1 }, { id: 7, title: "chilli chicken", image: ruchira60, amount: 210, qnt: 1 }, { id: 8, title: "garlic prawns", image: ruchira61, amount: 340, qnt: 1 }, { id: 9, title: "crispy corn", image: ruchira62, amount: 200, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s1.map((item) => (
                            <div key={item.id} style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Add to Cart 🛒</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }

    if (mcid == "Soups") {
        const s6 = [{ id: 11, title: "tomato soup", image: ruchira106, amount: 120, qnt: 1 }, { id: 12, title: "sweet corn soup", image: ruchira107, amount: 130, qnt: 1 }, { id: 13, title: "Hot & sour soup", image: ruchira108, amount: 140, qnt: 1 }, { id: 14, title: "chicken Manchow soup", image: ruchira109, amount: 180, qnt: 1 }, { id: 15, title: "veg manchow soup", image: ruchira110, amount: 140, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s6.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }

    if (mcid == "Chinese") {
        const s1 = [{ id: 21, title: "veg hakka noodles", image: ruchira130, amount: 149, qnt: 1 }, { id: 22, title: "chicken hakka noodles", image: ruchira131, amount: 179, qnt: 1 }, { id: 23, title: "veg fried rice", image: ruchira132, amount: 149, qnt: 1 }, { id: 24, title: "chicken fried rice", image: ruchira133, amount: 179, qnt: 1 }, { id: 25, title: "chilli chicken", image: ruchira134, amount: 199, qnt: 1 }, { id: 26, title: "chicken manchurian", image: ruchira135, amount: 199, qnt: 1 }, { id: 27, title: "baby corn manchurian", image: ruchira136, amount: 189, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s1.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Breakfast") {
        const s2 = [{ id: 31, title: "masaladosa", image: ruchira63, amount: 100, qnt: 1 }, { id: 32, title: "plaindosa", image: ruchira64, amount: 70, qnt: 1 }, { id: 33, title: "masalavada", image: ruchira65, amount: 70, qnt: 1 }, { id: 34, title: "idly", image: ruchira66, amount: 60, qnt: 1 }, { id: 35, title: "onionutappam", image: ruchira67, amount: 80, qnt: 1 }, { id: 36, title: "pongal", image: ruchira68, amount: 90, qnt: 1 }, { id: 37, title: "upma", image: ruchira69, amount: 80, qnt: 1 }, { id: 38, title: "pooriwithpotato", image: ruchira70, amount: 90, qnt: 1 }, { id: 39, title: "mysore masala dosa", image: ruchira71, amount: 120, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s2.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Meals") {
        const s8 = [{ id: 41, title: "south indian meals", image: ruchira116, amount: 250, qnt: 1 }, { id: 42, title: "special veg meals", image: ruchira117, amount: 400, qnt: 1 }, { id: 43, title: "chicken meals", image: ruchira118, amount: 450, qnt: 1 }, { id: 44, title: "fish meals", image: ruchira119, amount: 540, qnt: 1 }, { id: 45, title: "mutton meals", image: ruchira120, amount: 620, qnt: 1 }, { id: 46, title: "egg meals", image: ruchira121, amount: 280, qnt: 1 }, { id: 47, title: "curd rice meal", image: ruchira122, amount: 200, qnt: 1 }, { id: 48, title: "andhra meals", image: ruchira123, amount: 399, qnt: 1 }, { id: 49, title: "special ruchira meals", image: ruchira124, amount: 499, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s8.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Deserts") {
        const s1 = [{ id: 51, title: "chocolate brownie", image: ruchira72, amount: 150, qnt: 1 }, { id: 52, title: "Gulab jamun with icecreame", image: ruchira73, amount: 120, qnt: 1 }, { id: 53, title: "caramal custard", image: ruchira74, amount: 100, qnt: 1 }, { id: 54, title: "RedVelvet Cake", image: ruchira75, amount: 160, qnt: 1 }, { id: 55, title: "Mango cheese cake", image: ruchira76, amount: 170, qnt: 1 }, { id: 56, title: "chocolate lava cake", image: ruchira77, amount: 150, qnt: 1 }, { id: 57, title: "kulfy", image: ruchira78, amount: 90, qnt: 1 }, { id: 58, title: "sizzling brownie", image: ruchira79, amount: 140, qnt: 1 }, { id: 59, title: "strawberry icecream", image: ruchira80, amount: 150, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s1.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Beverages") {
        const s3 = [{ id: 61, title: "mango milkshake", image: ruchira81, amount: 110, qnt: 1 }, { id: 62, title: "starwberry milkshake", image: ruchira82, amount: 120, qnt: 1 }, { id: 67, title: "Banana milkshake", image: ruchira83, amount: 100, qnt: 1 }, { id: 63, title: "Chocolate milkshake", image: ruchira84, amount: 110, qnt: 1 }, { id: 64, title: "fresh lime sode", image: ruchira85, amount: 60, qnt: 1 }, { id: 65, title: "mango lime", image: ruchira86, amount: 80, qnt: 1 }, { id: 66, title: "fruit punch", image: ruchira87, amount: 120, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s3.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "TeaCoffee") {
        const s4 = [{ id: 71, title: "masala tea", image: ruchira88, amount: 30, qnt: 1 }, { id: 72, title: "Ginger tea", image: ruchira89, amount: 25, qnt: 1 }, { id: 73, title: "green tea", image: ruchira90, amount: 35, qnt: 1 }, { id: 74, title: "filter coffee", image: ruchira91, amount: 40, qnt: 1 }, { id: 75, title: "cappuccino", image: ruchira92, amount: 90, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s4.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Fastfood") {
        const s7 = [{ id: 81, title: "chicken Burger", image: ruchira111, amount: 150, qnt: 1 }, { id: 82, title: "chicken shawarma", image: ruchira112, amount: 90, qnt: 1 }, { id: 83, title: "chicken pizza", image: ruchira113, amount: 220, qnt: 1 }, { id: 84, title: "veg sandwich", image: ruchira114, amount: 100, qnt: 1 }, { id: 85, title: "chicekn strips", image: ruchira115, amount: 140, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s7.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Panipuri") {
        const s1 = [{ id: 91, title: "classic panipuri", image: ruchira98, amount: 60, qnt: 1 }, { id: 92, title: "belpuri", image: ruchira99, amount: 80, qnt: 1 }, { id: 93, title: "masala sweetpuri", image: ruchira100, amount: 70, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s1.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Snacks") {
        const s5 = [{ id: 121, title: "french fries", image: ruchira93, amount: 80, qnt: 1 }, { id: 122, title: "crispy corn", image: ruchira94, amount: 60, qnt: 1 }, { id: 123, title: "onion pakoda", image: ruchira95, amount: 100, qnt: 1 }, { id: 124, title: "chicken nuggets", image: ruchira96, amount: 140, qnt: 1 }, { id: 125, title: "veg samosa", image: ruchira97, amount: 60, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s5.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Chapathis") {
        const s6 = [{ id: 111, title: "rumalirot", image: ruchira101, amount: 50, qnt: 1 }, { id: 112, title: "butter roti", image: ruchira102, amount: 45, qnt: 1 }, { id: 113, title: "Tandoori roti", image: ruchira103, amount: 40, qnt: 1 }, { id: 114, title: "plain chapathi", image: ruchira104, amount: 30, qnt: 1 }, { id: 115, title: "garlic roti", image: ruchira105, amount: 50, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s6.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }
    if (mcid == "Combos") {
        const s10 = [{ id: 101, title: "chicken feast combo", image: ruchira125, amount: 299, qnt: 1 }, { id: 102, title: "ruchira burger combo", image: ruchira126, amount: 249, qnt: 1 }, { id: 103, title: "pizza party combo", image: ruchira127, amount: 349, qnt: 1 }, { id: 104, title: "family feast combo", image: ruchira128, amount: 799, qnt: 1 }, { id: 105, title: "chinese delight combo", image: ruchira129, amount: 299, qnt: 1 }]
        return (

            <>
                <ul style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '30px' }}>
                    {
                        s10.map((item) => (
                            <div style={{ height: '390px', width: '350px', border: 'rgb(244,111,24) solid 2px', borderRadius: '25px' }} >
                                {/* <h1 style={{ color: 'rgb(244,111,24)' }}>{item.title}</h1> */}
                                <img src={item.image} alt="noimg" style={{ height: '347px', width: '347px', borderRadius: '25px' }}></img>
                                <button onClick={() => transaction(item)} style={{ backgroundColor: 'rgb(244,111,24)', border: '0cap', width: '347px', height: '40px', fontSize: '25px', borderRadius: '25px' }}>Place Order</button>
                            </div>
                        )
                        )
                    }
                </ul >
            </>
        )
    }





}

export default MenuCard
