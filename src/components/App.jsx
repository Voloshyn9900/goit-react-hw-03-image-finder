import shortid from 'shortid';
import { Oval } from 'react-loader-spinner';
import { fetchPhoto } from '../api';
import {LoaderWrapper} from "./App.styled"
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    const queryCut = query.split('//');
    const querywithOutId = queryCut[1];

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const addPhoto = await fetchPhoto(querywithOutId, page);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...addPhoto.hits],
          };
        });
      } catch (error) {
        console.log('error');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  // updateInput(newString) {
  //   console.log("newString", newString);
  // }

  handleSubmit = newQuery => {
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
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && (
          <LoaderWrapper>
            <Oval
              height={180}
              width={180}
              color="#2196f3"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#2196f3"
              strokeWidth={4}
              strokeWidthSecondary={2}
            />
          </LoaderWrapper>
        )}
        {images.length > 0 && images.length % 12 === 0 && (
          <Button onLoadMore={this.handleLoadMore} />
        )}
      </>
    );
  }
}
