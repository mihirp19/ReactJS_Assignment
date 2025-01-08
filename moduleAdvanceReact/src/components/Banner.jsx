import React from 'react'
import styled from 'styled-components'
import bannerImg from '../assets/banner.webp'

const BannerWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #e8f5e9;
  margin: 20px 0;

  .banner-text {
    flex: 1;

    h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
      color: #555;
    }

    button {
      padding: 10px 20px;
      font-size: 1rem;
      color: #fff;
      background-color: #4caf50;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #45a049;
      }
    }
  }

  .banner-image {
    flex: 1;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`;

const Banner = () => (
    <BannerWrapper>
    <div className="banner-text">
      <h2>Don't miss amazing grocery deals</h2>
      <p>Sign up for the daily newsletter and save on your favorite products!</p>
      <button>Subscribe</button>
    </div>
    <div className="banner-image">
      <img
        src={bannerImg}
        alt="Banner"
      />
    </div>
  </BannerWrapper>
)

export default Banner;
