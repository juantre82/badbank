function Home(){
    return (
        <Card
        bgcolor="danger"
        txtcolor="white"
        header="Bank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );  
  }