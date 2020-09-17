import React, { Component } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import Loader from 'react-loader-spinner';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import searchImages from '../Utilities/fetch';
import '../components/styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    searchQuery: '',
    largeImage: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    searchImages(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => {
        this.setState({ error: error.message });
        console.log(error);
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
        this.setState({ loading: false });
      });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleModalWindow = largeImage => {
    this.setState({ largeImage: largeImage });
    this.toggleModal();
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  render() {
    const { images, loading, showModal, largeImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {loading && (
          <Loader
            className="Loader"
            type="Circles"
            color="#f89656"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.handleModalWindow} />
        )}
        {images.length > 0 && !loading && (
          <Button loadMore={this.fetchImages} />
        )}
        {showModal && <Modal image={largeImage} toggle={this.toggleModal} />}
      </>
    );
  }
}
