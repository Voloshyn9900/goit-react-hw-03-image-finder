import { fetchPhoto } from '../api';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidMount(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState) {

  }

  updateQuery = event => {
    this.setState({ query: event });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const addedPhoto = await fetchPhoto(this.state.query);
      this.setState(prevState => {
        return { images: addedPhoto.hits };
      });
    } catch (error) {
      console.log('error');
    }
    event.target.reset();
  };

  handleLoadMore = async event => {
    try {
      const addedPhoto = await fetchPhoto(this.state.query, this.state.page);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...addedPhoto.hits],
          // page: prevState.page + 1,
        };
      });
    } catch (error) {
      console.log('error');
    }
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onQuery={this.updateQuery} onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
      </>
    );
  }
}
