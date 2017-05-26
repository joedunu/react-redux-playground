import React, { Component } from 'react'
import Modal from 'react-modal'

import styles from './ReactModal.css'

Modal.setAppElement('#app')

class ReactModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    console.log('Opening modal')
    this.setState({
      isModalOpen: true
    })
  }

  handleCloseModal () {
    console.log('Closing modal')
    this.setState({
      isModalOpen: false
    })
  }

  render () {
    return (
      <div>
        <h1>React Modal</h1>
        <button className='btn btn-primary' onClick={this.handleOpenModal}>Open Modal</button>
        <Modal
          isOpen={this.state.isModalOpen}
          onAfterOpen={this.handleOpenModal}
          onRequestClose={this.handleCloseModal}
          closeTimeoutMS={500}
          // style={modalStyle}
          contentLabel='React Modal'
          // role='dialog'
          ariaHideApp
          shouldCloseOnOverlayClick
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <h2>Modal Content</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, velit sit amet condimentum
            condimentum, leo est aliquam risus, eget suscipit lacus dolor et mauris. Ut vestibulum mollis risus quis
            rhoncus. Nam malesuada fringilla dolor ut facilisis. Ut interdum ipsum quam, nec scelerisque sapien dictum
            eget. Duis in placerat nibh, vitae feugiat elit. Donec ac rutrum nulla. Aenean a quam sit amet leo tempor
            porttitor bibendum vitae dui. Cras quis sem mauris. Vestibulum lacinia libero ac finibus consequat. Cras
            malesuada, metus quis dapibus ultrices, arcu elit aliquet tellus, vitae pellentesque augue nisi quis leo.
            Maecenas sodales porta ultrices. Nulla facilisi.</p>

          <p>Integer at blandit velit, a volutpat purus. Nam purus diam, rutrum sit amet efficitur nec, consequat id
            quam. Praesent id metus sit amet felis commodo imperdiet. Sed viverra aliquet dolor eu sollicitudin. Nullam
            nisi odio, lacinia ut vulputate at, venenatis id lacus. Ut ut arcu ut magna ultrices convallis. Etiam metus
            ante, ultrices non dui non, rutrum placerat lacus.</p>

          <p>Phasellus in sollicitudin orci. Morbi sollicitudin massa tincidunt lorem pharetra, scelerisque fringilla
            erat finibus. Quisque est purus, tempus a mi eleifend, consectetur pharetra magna. Pellentesque nec dolor
            imperdiet, convallis quam eget, faucibus augue. Vivamus diam dui, posuere efficitur cursus vel, vehicula at
            diam. Mauris blandit nibh ultrices sollicitudin accumsan. Pellentesque hendrerit neque lectus, eget pulvinar
            eros aliquet at. Cras feugiat ligula a euismod facilisis. Nam non diam nibh. Cras a risus a orci bibendum
            posuere.</p>

          <p>Vestibulum lacinia ultricies orci ut commodo. Fusce id sollicitudin libero. Phasellus laoreet fermentum
            risus, id porttitor neque aliquet in. Duis hendrerit dolor eget ex pharetra vehicula. Nullam nec velit
            hendrerit, dictum ex sed, faucibus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Phasellus ullamcorper quam eu ante fermentum, vitae bibendum enim aliquam. Phasellus vel sapien non turpis
            fringilla egestas.</p>

          <p>Aliquam consequat, ante nec luctus imperdiet, turpis metus ornare velit, at porta erat neque vel sapien.
            Maecenas id tortor at tortor placerat iaculis. Morbi ullamcorper viverra ligula, sit amet imperdiet nisl
            ullamcorper at. Donec vitae hendrerit urna, nec posuere mauris. Quisque efficitur lobortis leo, sed
            fringilla nisi fringilla sed. Pellentesque eu eros eleifend, tincidunt elit non, tincidunt urna. Integer eu
            magna facilisis, vehicula leo sit amet, maximus nisl. Donec facilisis feugiat risus sed posuere.
            Pellentesque venenatis condimentum ornare. Donec nec nulla ut magna auctor molestie. Quisque a metus
            pellentesque, sollicitudin eros ut, ultrices tortor. Sed tortor arcu, efficitur ut dictum non, ultricies non
            odio. Nunc sed finibus nibh. Ut pulvinar quam dolor, ut imperdiet sapien luctus sit amet.</p>
          <hr />
          <button className='btn btn-primary' onClick={this.handleCloseModal}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default ReactModal
