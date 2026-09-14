import React, { useState } from 'react'
import ruchira41 from "../assets/ruchira41.png";
import ruchira44 from "../assets/ruchira44.png";
import "./payement.css";
import { useNavigate } from 'react-router-dom';

function Payements() {
    const navigate = useNavigate();
    const [name, setname] = useState("")
    const [nameerror, setnameerror] = useState("")
    const [payement, setpayement] = useState("")
    const [payementerror, setpayementerror] = useState("")
    function submitted(event) {
        event.preventDefault();
        var isValid = true
        if (name.trim() === "") {
            setnameerror("Name should not be Empty")
            isValid = false
        }
        else {
            setnameerror("")
        }
        if (payement === "") {
            setpayementerror("Payement method should be selected ")
            isValid = false
        }
        else {
            setpayementerror("")
        }
        if (isValid) {
            navigate("/gratitude")
        }
    }
    return (
        <div>
            <img src={ruchira41} style={{ height: '500px', display: 'block', margin: '0 auto', paddingTop: '30px', width: '900px' }}></img>
            <div className="container">
                <form onSubmit={submitted}>
                    <div class="form-group" id="formy">

                        <input type="text"
                            class="form-control" value={name} aria-describedby="helpId" placeholder="Enter your Name" onChange={(event) => setname(event.target.value)} style={{ width: '300px' }} />
                        <small style={{ color: 'red' }}>{nameerror}</small><br />
                        <label style={{ color: 'black' }}><u>Payement Mode:</u></label>
                        <div class="form-check">

                            <label class="form-check-label" style={{ color: 'black' }}>
                                <input type="radio" class="form-check-input" value="cod" checked={payement == "cod"} onChange={(event) => setpayement(event.target.value)} />Cash On delivery💵<br />
                                <input type="radio" class="form-check-input" value="upi" checked={payement == "upi"} onChange={(event) => setpayement(event.target.value)} />UPI Payemen🏦t<br />
                                <input type="radio" class="form-check-input" value="net" checked={payement == "net"} onChange={(event) => setpayement(event.target.value)} />NetBanking📱<br/>
                                <small style={{ color: 'red' }}>{payementerror}</small>


                            </label>
                        </div>
                      
                        <input type="submit" value="Procceed Here" style={{ backgroundColor: 'rgb(244,111,24)', width: '300px', border: '0cap', height: '40px' }} />
                        <img src={ruchira44} style={{ height: '100px', width: '280px' }} id="butta"></img>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Payements
