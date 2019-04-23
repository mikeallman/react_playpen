import React from 'react'
import {Button, Card} from 'semantic-ui-react'


class Counter extends React.Component {
    
    state = {count: 0}

    onCountButtonclick = () => {
        const n = this.state.count
        this.setState({count: n + 1})
    }

    onResetButtonclick = () => {
        this.setState({count: 0})
    }

    render() {

        return (
          <Card>
             <Card.Content>
              <Card.Header>Awesome Counter</Card.Header>
              <Card.Meta>Playing with React state</Card.Meta>
              <Card.Description>
                The button has been clicked <strong>{this.state.count} </strong> times
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick = {this.onCountButtonclick} >
                  Count!
                </Button>
                <Button basic color='red' onClick = {this.onResetButtonclick}>
                  Reset!
                </Button>
              </div>
            </Card.Content>
          </Card>
        )
    }    

}

export default Counter
