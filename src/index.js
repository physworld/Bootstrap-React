
class TestModal extends React.Component {
  constructor() {
    super();
    this.state = {showFirst: false};
    this.state = {showSecond: false};
  }

  handleCloseFirst(){
    this.setState(state => ({
       showFirst: false
    }));
  }

  handleShowFirst(){
    this.setState(state => ({
       showFirst: true
    }));
  }

  handleCloseSecond(){
    this.setState(state => ({
      showSecond: false
    }));
  }

  handleShowSecond(){
    this.setState(state => ({
      showSecond: true
    }));
  }

  render() {
    return (
      <div>
      <Button variant="primary" onClick={this.handleShowFirst.bind(this)}>
         Launch first demo modal
      </Button>{'  '}
      <Button variant="primary" onClick={this.handleShowSecond.bind(this)}>
         Launch second demo modal
      </Button>
   
      <Modal show={this.state.showFirst} onHide={this.handleCloseFirst.bind(this)} backdrop="static" keyboard="false" size="sm">
         <Modal.Header closeButton>
            <Modal.Title>Demo modal</Modal.Title>
         </Modal.Header>   
         <Modal.Body>
           <p>It's a model for testing this component of react-bootstrap and his features.</p>     
         </Modal.Body>
         <Modal.Footer>
           <Button variant="danger" onClick={this.handleCloseFirst.bind(this)}>Close</Button>
         </Modal.Footer>
      </Modal>
   
      <Modal show={this.state.showSecond} onHide={this.handleCloseSecond.bind(this)} animation={false} size="lg">
      <Modal.Header closeButton>
         <Modal.Title>Demo modal</Modal.Title>
      </Modal.Header>   
      <Modal.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue consectetur viverra. Nulla facilisi. Suspendisse tincidunt imperdiet magna non semper. Sed porta molestie nisl sed consectetur. Donec ut scelerisque nisl. Pellentesque dapibus, ligula id tempor condimentum, ex tellus pretium neque, eu commodo enim tortor id est. Nam pretium, elit et finibus placerat, tellus dolor dictum nisl, quis mollis lacus urna in purus. Nunc lacinia lacinia arcu sit amet ornare.</p>     
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.handleCloseSecond.bind(this)}>Close</Button>
      </Modal.Footer>
   </Modal>
   </div>
    );
  }
}

ReactDOM.render(
  <TestModal/>,
  document.getElementById('root')
);





