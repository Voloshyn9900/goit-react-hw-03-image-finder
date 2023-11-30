import { Header, Form, Button, Span, Input } from './Searchbar.styled';

export const Searchbar = ({ onQuery, onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <Span>Search</Span>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={event => onQuery(event.target.value)}
        />
      </Form>
    </Header>
  )
};
