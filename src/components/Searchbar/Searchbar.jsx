import React, { Component } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
    // this.props.onQuery(value); 

  };

  handleSubmit = event => {
    event.preventDefault();
     if (this.state.query.trim() === '') {
       return;
     }
    this.props.onSubmit(this.state.query); // Возвращяет форму наверх
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>Поиск</Span>
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Искать изображения и фотографии"
            // value={this.state.query}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
