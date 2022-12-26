import { useState, useCallback } from "react";
import api from './plugins/axios';
import InputMask from 'react-input-mask';


function Conta(){

    
    const [conta, setContas]=useState({});
    const [value, setValue] = useState({
        value: '',
    })

    const [dateStart, setDateStart] = useState({
        value: '',
    })

    const [dateEnd, setDateEnd] = useState({
        value: '',
    })

    const handleChanging = (e) => {
        setValue({value: e.target.value})
    }

    const handleStartChanging = (e) => {
        let dataInArray = e.target.value.split('-')
        let dataInvertida = dataInArray[2]+'-'+dataInArray[1]+'-'+dataInArray[0];
        setDateStart({value: dataInvertida})
    }

    const handleEndChanging = (e) => {
        let dataInArray = e.target.value.split('-')
        let dataInvertida = dataInArray[2]+'-'+dataInArray[1]+'-'+dataInArray[0];
        setDateEnd({value: dataInvertida})
    }

    const getContas = useCallback( async () => {
        let id = value.value;
        if(value.value.length == 0 || value.value === '') {
            alert('Por favor, campos precisam ser preenchidos!');
            return;
        }
        await api.get(`/contas/${id}`)
            .then( res => {
                setContas(res.data);
                console.log(res.data)
            })
            .catch( error => {
                console.warn(error);
            })
    });
    
    return(
        
        <>
        
            <form>
                <div>
                    <h1>Extrato da Conta</h1>
                </div><br></br>
                <input type='date' onChange={handleStartChanging} value={dateStart.value} placeholder='Data de início'/>
                <input type='date' onChange={handleEndChanging} value={dateEnd.value} placeholder='Data de Fim'/>
                <input id="idAccount" type='number' value={value.value} onChange={handleChanging} placeholder='Numero da conta operador transacionado'/>

                <input type='button' onClick={getContas} value='Pesquisar' className='btn btn-primary'/>
                <div>
                <html>Total da conta: {conta.soma}</html>
                <html>Total da das transferencias:{conta.transferencias.valorTransf} </html>
                </div>
            </form>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Dados</th>
                        <th scope="col">Valentia</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Nome operador transacionado</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            conta?.transferencias?.map((data) => {
                                return (
                                    <>
                                        <tr key={conta.transferencias.length}>
                                            <th scope="row">{data.dataTransferencia}</th>
                                            <td>R$ {data.valor}</td>
                                            <td>{data.tipo}</td>
                                            <td>{conta.nomeResponsavel}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                </tbody>
            </table>
        </>
    )
}

export default Conta;