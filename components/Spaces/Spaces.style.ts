import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    background-color: white;
    border: 1px solid #cccccc;
    //border-radius: 1rem;
    color: #696969;
    padding: 0.5rem;
    text-transform: lowercase;
  }

  .btn--block {
    display: block;
    width: 100%;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cards__item {
    display: flex;
    padding: 1rem;
    @media (min-width: 40rem) {
      width: 50%;
    }
    @media (min-width: 56rem) {
      width: 33.3333%;
    }
  }

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* height: 70%; */
    &:hover {
      .card__image {
        filter: contrast(100%);
      }
    }
  }

  .card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
  }

  .card__image {
    /* height: 50%; */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(70%);
    padding: 1rem;
    //filter: saturate(180%);
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    /* &::before {
      content: '';
      display: block;
      padding-top: 56.25%; // 16:9 aspect ratio
    }
    @media (min-width: 40rem) {
      &::before {
        padding-top: 66.6%; // 3:2 aspect ratio
      }
    } */
  }

  .card__title {
    color: #696969;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .card__text {
    flex: 1 1 auto;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    height: 100px;
    overflow: hidden;
  }
`;
