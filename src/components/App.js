import React, {Component} from 'react'
import AppMenu from './AppMenu'
import AppFooter from './AppFooter'
import Counter from './Counter'
import ImageSearch from './ImageSeach'
import WeatherForecast from './WeatherForecast'
import { Header, Segment, Container, Icon} from 'semantic-ui-react'


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
                <AppFooter />
            </div>
        )
    }
}

export default App
