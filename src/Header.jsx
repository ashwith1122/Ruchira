import "./Header.css"

function Header() {
    return (
        <div
            className="ruchira-header"
            style={{
                textAlign: 'center',
                color: 'black',
                backgroundColor: 'rgb(244,111,23)',
                margin: 0,
                padding: 0
            }}
        >
            <h1 className="ruchira-title" style={{ margin: 0 }}>
                👨‍🍳꧁𝙍𝙪𝙘𝙝𝙞𝙧𝙖꧂🍽️
            </h1>

            <h6
                className="ruchira-tagline"
                style={{
                    margin: 0,
                    textAlign: 'right',
                    marginRight: '15%'
                }}
            >
                <i>
                    <b>~The Art of Taste𓆩♡𓆪</b>
                </i>
            </h6>

        </div>
    )
}

export default Header
