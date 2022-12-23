function Conta(){
    return(
    <form>
        <input type='date' placeholder='Data de início'/>
        <input type='date' placeholder='Data de Fim'/>
        <input type='number' placeholder='Nome operador transacionado'/>

        <input type='button' value='Pesquisar' className='btn btn-primary'/>
    </form>
    )
}

export default Conta;