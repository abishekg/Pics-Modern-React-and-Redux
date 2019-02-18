import React, { Component } from 'react'

export class ImageList extends Component {
  render() {
    const images = this.props.images.map((image) => {
      return <img alt={image.description} key={image.id} src={image.urls.regular} />
    })
    return (
      <div>
        {images}
      </div>
    )
  }
}

export default ImageList

