import React, { Component} from 'react'
import { Menu } from 'semantic-ui-react'

class AppMenu extends Component {
   
    render() {

      return (
        <Menu fluid widths={3}>
          <Menu.Item name='counter' active={this.props.activeItem === 'counter'} onClick={this.props.handleMenuClick}>
            Counter
          </Menu.Item>
  
          <Menu.Item name='image_search' active={this.props.activeItem === 'image_search'} onClick={this.props.handleMenuClick}>
            Image Search
          </Menu.Item>
  
          <Menu.Item name='weather' active={this.props.activeItem === 'weather'} onClick={this.props.handleMenuClick}>
            Weather Forecast
          </Menu.Item>
        </Menu>
      )
    }
  }
  
export default AppMenu