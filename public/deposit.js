
function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(100);
  const [newBalance, setNewBalance]= React.useState(100);
  const [depositAmount, setDepositAmount] = React.useState('');
  const ctx = React.useContext(UserContext); 
  //var ctx2 = Array(ctx); 

  function validate(depositAmount) {
    if(!depositAmount) {
      setStatus('Error: Please enter a value');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if(isNaN(depositAmount)) {
      //(amount === NaN) doesnt work
      setStatus('Error: Please enter a valid number');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if(depositAmount * 1 < 0) {
      setStatus("Error: Cannot deposit a negative amount");
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

function handleCreate(){
  console.log(depositAmount);
  if (!validate(depositAmount)) return;
  ctx.users.push({balance});
  setBalance(newBalance * 1 + depositAmount * 1)
  setNewBalance(balance * 1 + depositAmount * 1)
  setShow(false);
}

  function clearForm(){
    setDepositAmount('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              <h5>Balance: ${balance}</h5>
              <br/>
              Deposit Amount<br/>
              <input type="deposit" className="form-control bg-dark" id="deposit" placeholder="Deposit Amount $" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</button>
              </>
            )}
    />
  )
}