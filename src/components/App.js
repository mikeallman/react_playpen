import React, {Component} from 'react'
import AppMenu from './AppMenu'
import Counter from './Counter'
import ImageSearch from './ImageSeach'
import WeatherForecast from './WeatherForecast'
import { Header, Segment, Container, Icon, Button} from 'semantic-ui-react'

const email = "mike@allman.io"


class App extends Component {

    state = {activeMenuItem: 'counter'}

    handleMenuClick = (e, { name }) => {
        this.setState({ activeMenuItem: name })
    }

    getContent = () => {
        switch (this.state.activeMenuItem) {
            case 'counter': 
                return <Counter />
            case 'image_search':
                return <ImageSearch />
            case 'weather':
                return <WeatherForecast />
        }
    }

    render() {
        return (
            <div>
                <Container textAlign="center">
                    <AppMenu handleMenuClick={this.handleMenuClick} activeItem={this.state.activeMenuItem}/>
                    <Header as='h1' icon>
                        <Icon name="react" loading/>
                        Mike's Learning React!
                    </Header>
                    <Segment raised padded>
                        {this.getContent()}
                    </Segment>
                </Container>
                <Segment inverted vertical style={{ margin: '2em 2em 2em', padding: '2em 2em', position: 'absolute', left: 0, right: 0, bottom: 0}}>
                    <a href="https://github.com/mikeallman/react_playpen">
                        <Button color="blue"><Icon name="github"/>Github</Button>
                    </a>
                    <a href={`mailto:${email}`}>
                        <Button color="blue"><Icon name="mail"/>Email</Button>
                    </a>
                </Segment>
            </div>
        )
    }
}

export default App
