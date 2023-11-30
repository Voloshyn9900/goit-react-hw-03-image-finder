import shortid from 'shortid';
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

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    const queryCut = query.split("//")
    const querywithOutId = queryCut[1]


    if (prevState.query !== query || prevState.page !== page) {
      try {
        const addPhoto = await fetchPhoto(querywithOutId, page);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...addPhoto.hits],
          };
        });
      } catch (error) {
        console.log('error');
      }
    }
  }

  // updateInput(newString) {
  //   console.log("newString", newString);
  // }

  handleSubmit = newQuery => {
    console.log('Submitting query:', newQuery);
    this.setState({
      query: `${shortid.generate()}//${newQuery}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
      </>
    );
  }
}
