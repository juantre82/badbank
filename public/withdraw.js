function Withdraw(){
    const [show, setShow] =React.useState(true);
    const [status, setStatus] =React.useState('');
    const [balance, setBalance] =React.useState(100);
    const [newBalance, setNewBalance] =React.useState(100);
    const [withdrawalAmount, setWithDrawalAmount] =React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(withdrawalAmount){
        if(!withdrawalAmount) {
            setStatus('Error: No Amount Entered')
            setTimeout(()=> setStatus(''),3000);
            return false;
        }
        if(withdrawalAmount * 1 > newBalance || withdrawalAmount * 1 > balance) {
            setStatus('Error: Transaction failed');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if(isNaN(withdrawalAmount)) {
            setStatus('Error: Withdaral amount is not a valid number');
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(withdrawalAmount);
        if(!validate(withdrawalAmount)) return;
        ctx.users.push({balance});
        setBalance(newBalance * 1 - withdrawalAmount * 1)
        setNewBalance(balance * 1 - withdrawalAmount * 1)
        setShow(false);
    }
    function clearForm(){
        setWithDrawalAmount('');
        setShow(true);
    }

    return (
        <Card
        bgcolor="dark"
        header="Withdraw"
        status={status}
        body={show?(
            <>
            <h5>Balance: ${balance}</h5>
            <br/>
            Withdrawal Amount<br/>
            <input type="number-input" className="form-control bg-dark" id="number" placeholder='Withdrawal Amount $' value={withdrawalAmount} onChange={e => setWithDrawalAmount(e.currentTarget.value)} /> <br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
            </>
        ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdraw?</button>
            </>
        )}
        />
    )

}