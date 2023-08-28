import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

  const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('NULL');

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }
    
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      currency: selectedCurrency,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setSelectedCurrency('Null');
  };



  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Moeda</C.Label>
          <C.CurrencySelector
            selectedCurrency={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value='NULL'>Selecione</option>
            <option value='EUR'>Euro</option>
            <option value='USD'>Dólar</option>
            <option value='USDT'>Dólar turismo</option>
            <option value='CAD'>Dólar canadense</option>
            <option value='AUD'>Dólar australiano</option>
            <option value='GBP'>Libra Esterlina</option>
            <option value='ARS'>Peso argentino</option>
            <option value='JPY'>Iene Japonês</option>
            <option value='CNY'>Yuan Chinês</option>
            <option value='CHF'>Franco Suíço</option>
            <option value='ILS'>Novo Shekel Israelense</option>
            <option value='BTC'>Bitcoin</option>
            <option value='ETH'>Ethereum</option>
            <option value='LTC'>Litecoin</option>
            <option value='DOGE'>Dogecoin</option>
            <option value='XRP'>XRP</option>
          </C.CurrencySelector>
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;