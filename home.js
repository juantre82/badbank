function Home(){
    return (
        <Card
        bgcolor="secondary"
        txtcolor="white"
        header={<h3>Bank Landing Page</h3>}
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );  
  }