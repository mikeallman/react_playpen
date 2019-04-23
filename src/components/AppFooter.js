import React from 'react'
import {Segment, Button, Icon} from 'semantic-ui-react'

const AppFooter = () => {

    return (
        <Segment inverted vertical style={{ margin: '2em 2em 2em', padding: '2em 2em', position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <a href="https://github.com/mikeallman/react_playpen">
                <Button color="blue"><Icon name="github"/>Github</Button>
            </a>
            <a href="mailto:mike@allman.io">
                <Button color="blue"><Icon name="mail"/>Email</Button>
            </a>
        </Segment>
    )

}

export default AppFooter