import ReactDOM from 'react-dom';
import './index.css';
import {ChangeEvent, useState} from "react";
import {v1} from "uuid";

function LongCommentChecker() {
    const [users, setUsers] = useState( [
        {id: v1(), name: "Alex", isDone: false},
        {id: v1(), name: "Nick", isDone: false},
        {id: v1(), name: "John", isDone: false},
        {id: v1(), name: "Jack", isDone: false},
        {id: v1(), name: "Jane", isDone: false}
    ])
    const [value, setValue] = useState("")
    const [check, setCheck] = useState(false)
    const [click, setClick] = useState(false)
    const [error, setError] = useState(false)
    const [valueSpan, setValueSpan] = useState(users[0].name)
    const [spanInfo, setSpanInfo] = useState(users[0].name)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onChangeChecked = (e:ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }
    const onClickHandler = () => {
        setClick(!click)
    }
    const addTask = () => {
        if (value) {
            setUsers([{id: v1(), name: value, isDone: false}, ...users])
            setValue("")
            setClick(true)
        }
    }
    const changeSpan = () => {
        setError(true)
    }
    const changeInput = () => {
        setSpanInfo(valueSpan)
        setError(false)
    }

    const changeSpanValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSpan(e.currentTarget.value)
    }

    return (
        <div  className={"css"}>
            <div>
                <input placeholder={"Etner your task..."} type="text" onChange={onChangeHandler} value={value}/>
                <button disabled={!value} onClick={addTask}>add Task</button>
            </div>
            <label><input type="checkbox" checked={check} onChange={onChangeChecked}/>
                <span className={check ? 'green' : 'red'}>{check.toString()}</span></label>
            <h3 className={click ? "h3" : ""} onClick={onClickHandler}>click me</h3>
            { click && <ul>
                {users.map(el => {
                    const onChangeChecked = (e:ChangeEvent<HTMLInputElement>) => {
                        setUsers(users.map(n => n.id === el.id ? {...n, isDone: e.currentTarget.checked} : n))
                    }
                    const onClickDelete = () => {
                        setUsers(users.filter(n => n.id !== el.id))
                    }

                return (
                    <li key={el.id} className={el.isDone ? 'checkOn' : 'checkOff'}><label><input onChange={onChangeChecked} type="checkbox" checked={el.isDone}/>{el.name}</label><button onClick={onClickDelete}>X</button></li>
                )
                }
                )}
            </ul> }
            <div className={'value'}>{value}</div>
            { error
            ? <input onBlur={changeInput} onChange={changeSpanValue} value={valueSpan} autoFocus/>
            : <span onDoubleClick={changeSpan}>{spanInfo}</span> }
        </div>
    )
}

ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));

// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:
// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия
// (проверка на длину комментария) должна раздизаблиться.
// ❗ Ответ необходимо дать на основании данных (переменных), которые уже есть в коде