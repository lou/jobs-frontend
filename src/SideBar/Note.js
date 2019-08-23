import React, { useState } from 'react'

export default ({ note: defaultNote }) => {
  const [note, setNote] = useState(defaultNote)

  return (
    <React.Fragment>
      <textarea className='form-control' value={note} onChange={e => setNote(e.target.value)} />
      <div className='mt-2 w-100 text-right'>
        <button className='btn btn-sm btn-secondary' onClick={() => setNote('')}>
          Clear
        </button>
      </div>
    </React.Fragment>
  )
}
