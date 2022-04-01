const Main = function (props) {
    return (
        <main className="main">
            <h2 className="main--heading">Fun facts about React</h2>
            {(props.list.length > 0) ?
                 <ul className="main--list">
                    {props.list.map((item) =>
                        <li className="main--list-item">{item}</li>)}
                </ul> 
                : ''
            }
        </main>
    )
}

export default Main;