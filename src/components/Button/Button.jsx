import { LoadMoreBtn } from './Button.styled';

export function Button({ onLoadMore }) {
  return <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>;
}
