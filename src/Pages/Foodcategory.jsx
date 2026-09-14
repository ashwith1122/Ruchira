import FoodInfoCard from '../Components/FoodInfoCard'
import { useParams } from 'react-router-dom'
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
import ruchira42 from "../assets/ruchira42.png";
import "./FoodCateogory.css";

function Foodcategory() {
    const { food } = useParams();
    return (
        <div>
            {food === "starters" && (
                <div>
                    <img src={ruchira16} alt="NO image" style={{ width: '100%' }} />
                    {/* <button className="btn" id="b1">Add To cart🛒❤️</button>
                    <button className="btn" id="b2">Add To cart🛒❤️</button>
                    <button className="btn" id="b3">Add To cart🛒❤️</button>
                    <button className="btn" id="b4">Add To cart🛒❤️</button>
                    <button className="btn" id="b5">Add To cart🛒❤️</button>
                    <button className="btn" id="b6">Add To cart🛒❤️</button>
                    <button className="btn" id="b7">Add To cart🛒❤️</button>
                    <button className="btn" id="b8">Add To cart🛒❤️</button>
                    <button className="btn" id="b9">Add To cart🛒❤️</button>
                    <button className="btn" id="b10">Add To cart🛒❤️</button> */}
                </div>
            )
            }
            {food === "chinese" && (
                <div>
                    <img src={ruchira17} alt="NO image" style={{ width: '100%' }} />

                </div>
            )
            }
            {
                food === "soups" && (
                    <div>
                        <img src={ruchira18} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "breakfast" && (
                    <div>
                        <img src={ruchira19} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "meals" && (
                    <div>
                        <img src={ruchira20} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "deserts" && (
                    <div>
                        <img src={ruchira21} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "beverages" && (
                    <div>
                        <img src={ruchira22} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "teacoffee" && (
                    <div>
                        <img src={ruchira23} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "fastfood" && (
                    <div>
                        <img src={ruchira24} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "panipuri" && (
                    <div>
                        <img src={ruchira25} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "snacks" && (
                    <div>
                        <img src={ruchira26} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "combos" && (
                    <div>
                        <img src={ruchira27} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }
            {
                food === "chapathis" && (
                    <div>
                        <img src={ruchira42} alt="noimg" style={{ width: '100%' }}></img>
                    </div>
                )
            }




        </div>
    )
}


export default Foodcategory

