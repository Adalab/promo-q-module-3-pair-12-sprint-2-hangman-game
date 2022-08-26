const Options = (props)=>{

  const handleSubmit = (event)=> { 

    event.preventDefault();
 
}
const handleChange = ev => {
  props.handleWord(ev.target.value);
};


  
    return (
    <form onSubmit={ props.handleSubmit} >
        <label className="title" htmlFor="word">
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input  
          autofocus
          autocomplete="off"
          className="form__input"
          maxlength="15"
          type="text"
          id="word"
          name="word"
          onChange={ handleChange}
          value = {props.word}
        />
      </form>
)

}
export default Options;