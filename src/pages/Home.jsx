import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../services/actions/userSlice';

import Clients from "../layouts/Home/Clients";
import Services from "../layouts/Home/Services";
import Slider from "../layouts/Home/Slider";
import Header from "../layouts/Home/Header";
import PopUpSearch from "../layouts/Home/PopUpSearch";
import Trending from "../layouts/Home/Trending";
import Footer from "../layouts/Home/Footer";
import WeeklyDeal from "../layouts/Home/WeeklyDeal";
import News from "../layouts/Home/News";
import CategorySection from "../layouts/Home/Categories";
import MailChimpSection from "../layouts/Home/MailChimp";
import Popular from "../layouts/Home/Popular";

export default function Home() {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.data);
  // const userStatus = useSelector((state) => state.user.status);
  // const error = useSelector((state) => state.user.error);

  // useEffect(() => {
  //   console.log("herwdafdsgf", user);
  //   if (userStatus === 'idle') {
  //     dispatch(fetchUserData());
  //   }

  // }, [userStatus, dispatch]);


  return (
    <>
      <Header/>
      <PopUpSearch />
      <Slider />
      <CategorySection />
      <Services />
      <Trending />
      <Popular />
      <WeeklyDeal />
      <News />
      <Clients />
      <MailChimpSection />
      <Footer />
    </>
  );
}
