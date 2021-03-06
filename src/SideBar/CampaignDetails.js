import React from 'react'
import StatusBadge from '../common/StatusBadge'
import Note from './Note'

const CampaignDetails = ({
  campaign: { id, name, image, status, quantity, initialQuantity, audience, note },
}) => (
  <div className='text-center d-flex flex-column align-items-center py-5 px-4'>
    <img
      src={image}
      alt={name}
      className='d-block'
      style={{
        width: '60%',
      }}
    />
    <h2 className='mt-3'>{name}</h2>
    <ul className='text-left'>
      <li>
        Status: <StatusBadge>{status}</StatusBadge>
      </li>
      <li>
        {quantity} / {initialQuantity} left
      </li>
      <li>Audience: {audience}</li>
    </ul>

    <h4>Note</h4>
    <Note note={note} />
  </div>
)

export default CampaignDetails
