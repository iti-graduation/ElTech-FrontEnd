import React from 'react'
import TabNavigation from '../../components/UserAccount/TabNavigation'
import GeneralTab from '../../components/UserAccount/GeneralTab'
import ChangePasswordTab from '../../components/UserAccount/ChangePasswordTab'
import InfoTab from '../../components/UserAccount/InfoTab'
import SocialLinksTab from '../../components/UserAccount/SocialLinksTab'

export default function UserProfile() {
  return (
    <div className="container" id="UserProfileContainer">
        <div className="card overflow-hidden" id="UserProfileCard">
            <div className="row no-gutters row-bordered row-border-light">
                <TabNavigation/>
                <div className="col-md-9">
                    <div className="tab-content">
                        <GeneralTab/>
                        <ChangePasswordTab/>
                        <InfoTab/>
                        <SocialLinksTab/>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-right mt-3">
            <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
            <button type="button" className="btn btn-default">Cancel</button>
        </div>
    </div>
  )
}
