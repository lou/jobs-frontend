import React from 'react'
import PlaceHolder from './PlaceHolder'
import CampaignDetails from './CampaignDetails'

const SideBar = ({ campaign }) => (
  <div
    className=''
    style={{
      width: 350,
      height: '100vh',
      borderLeft: 'solid 5px #e9ebef',
    }}
  >
    <SideBarContent campaign={campaign} />
  </div>
)

const SideBarContent = ({ campaign }) => {
  if (!campaign) return <PlaceHolder />
  return <CampaignDetails campaign={campaign} />
}

export default SideBar
