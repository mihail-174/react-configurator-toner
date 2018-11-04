import React, { Component } from 'react';
// import '../scss/image.scss';

export default class Image extends Component {
  render() {
    const zone = this.props.zone;
    return (
      <div className='st1__image image'>
        {zone === '1' && <div className='image__img image__img_front'>front</div> }
        {zone === '2' && <div className='image__img image__img_front'>front</div> }
        {zone === '2' && <div className='image__img image__img_back'>back</div> }
        {zone === '3' && <div className='image__img image__img_back'>back</div> }
      </div>
    )
  }
}
