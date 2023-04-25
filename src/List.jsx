import ListItem from "./Components/ListItem";

export default function List(props) {
    return(
        <ul className="items-list">
            {props.items.map((item, index) => (
                <ListItem item={item} index={index}/>
            ))}
        </ul>
    )
}