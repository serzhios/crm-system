import style from "./TabButton.module.scss";


export default function TabButton({children, isSelected, ...props}) {


    return (

        <li className={style.button}>
            <button className={isSelected ? "active" : undefined} {...props}>{children} </button>
        </li>
    )
}