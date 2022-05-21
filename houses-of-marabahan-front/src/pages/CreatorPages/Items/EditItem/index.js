import CloseIcon from '@mui/icons-material/Close';

import { Modal } from '../../../../components/Modal/style';
import { Square } from '../../../../components/Square/style';

export default function EditItem({ modalIsOpen, setModalIsOpen }) {
  return (
    <Modal isOpen={modalIsOpen}>
      <div className='x'onClick={() => setModalIsOpen(false)}>
          <CloseIcon />
      </div>
      <h1>New item</h1>
      <form>
        <div>
          <div className='outline text-align-center'>
            <p>Sprite</p>
            <Square htmlFor='input-sprite'>
              <p>Upload image</p>
            </Square>
          </div>

          <div className='outline'>
            <p>Name</p>
            <input type='text' />
            <p>Description</p>
            <textarea type='text' />
          </div>
        </div>

        <input id='input-sprite' type='file' accept='.png' />

        <button>Edit this item</button>
      </form>
    </Modal>
  );
}
