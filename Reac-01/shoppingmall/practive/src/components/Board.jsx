export default function Board({onUpadte, onDelete, todo}) {

 const {id, name, status} = todo; 

 const handleDelete = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpadte({...todo, status});  
 }

    return(
        <>
        <td>
            <input type="checkbox" id = {id} checked = {status === 'completed'} onChange={hadleChange} />
            <label htmlFor={id}>{name}</label>
            <button onClick = {handleDelete}>삭제</button>
        </td>
                
        </>
    )
}