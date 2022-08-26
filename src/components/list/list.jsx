import './list.css';


export function List() {
    return (
        <div className="list-wrapper">
        <ul className="list-ul">
            <li className="list-border"><div>Task 1</div><div><button className="button1">Delete</button><button className="button2">!</button></div></li>
            <li className="list-border"><div>Task 2</div><div><button className="button1">Delete</button><button className="button2">!</button></div></li>
            <li className="list-border"><div>Task 3</div><div><button className="button1">Delete</button><button className="button2">!</button></div></li>
        </ul>
        </div>
    )
}