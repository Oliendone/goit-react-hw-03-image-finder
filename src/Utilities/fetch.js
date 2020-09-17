import axios from 'axios';

const key = '18346117-9aafb0c2fea41bcf838806a7d';

export default function searchImages(query, page) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
}
