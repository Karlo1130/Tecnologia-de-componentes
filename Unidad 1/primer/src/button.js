function button(text, disabled) {
    
    if(disabled){
        return(
        <button disabled>
            {text}
        </button>
        )
    }else{
        return(
            <button>
                {text}
            </button>
        )
    }
}

export default button;