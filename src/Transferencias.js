function Transferencias({vetor}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Dados</th>
                    <th>Valentia</th>
                    <th>Tipo</th>
                    <th>Nome operador transacionado</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice)=>{
                        <tr key={indice}>
                            <tb> {indice+1}</tb>
                            <tb> {obj.dados}</tb>
                            <tb> {obj.valentia}</tb>
                            <tb> {obj.tipo}</tb>
                            <tb> {obj.nomeOperadorTransicionado}</tb>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
    )
}
export default Transferencias