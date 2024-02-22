import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import CreateRangeForm from '../components/CreateRangeForm'

function Home (): React.ReactElement {
  const [modalShown, setModalShown] = useState(false)
  return (
    <div>
      <Button variant="primary" onClick={() => { setModalShown(true) }}>
        Create Range
      </Button>

      <Modal
        title="Add Range"
        shown={modalShown}
        closeModal={() => { setModalShown(false) }}
        actionButtons={[
          <Button key="create-range" variant="primary" onClick={() => { setModalShown(false) }}>
            Create Range
          </Button>
        ]}
      >
        <CreateRangeForm/>
      </Modal>
    </div>
  )
}

export default Home
