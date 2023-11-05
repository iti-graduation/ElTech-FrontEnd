import React from 'react'
import Header from "../layouts/Home/Header";
import Footer from "../layouts/Home/Footer";
import UserProfile from '../layouts/UserAccount/UserProfile';



export default function MyAccountProfile() {
  return (
    <>
    <Header className="inner-header"/>
    <UserProfile/>
    <Footer />
    </>
  )
}
