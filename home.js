function Home(){
    return (
        <Card
        bgcolor="dark"
        txtcolor="white"
        header={<h3>Golden Bank</h3>}
        title="Welcome to the Golden Bank"
        text="The Bank for all your money needs."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );  
  }