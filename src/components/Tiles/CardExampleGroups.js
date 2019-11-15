import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
        />
        <Card.Header>Task</Card.Header>
        <Card.Meta>User</Card.Meta>
        <Card.Description>
          Assigned by<strong>PlaceHolder</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
        />
        <Card.Header>Task</Card.Header>
        <Card.Meta>User</Card.Meta>
        <Card.Description>
          Assigned by <strong>Place Holder</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
        />
        <Card.Header>Task</Card.Header>
        <Card.Meta>User</Card.Meta>
        <Card.Description>
          Assigned by
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleGroups