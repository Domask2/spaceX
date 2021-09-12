import styled from 'styled-components';

export const Wrapper = styled.div`
  .card__image__img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    background-color: white;
    border: 1px solid #cccccc;
    border-radius: 1rem;
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
    align-items: center;
    justify-content: center;
  }

  .cards__item {
    display: flex;
    padding: 0.5rem;
    @media (min-width: 45rem) {
      width: 50%;
    }
    @media (min-width: 50rem) {
      width: 33.3333%;
    }
  }

  .card {
    background-color: white;
    border-radius: 0.55rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
    height: 325px;
  }

  .card__image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    filter: contrast(70%);
    padding: 1rem;
    overflow: hidden;
    position: relative;
    transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  }

  .opacity-0 {
    opacity: 100;
  }
  
  .opacity-100 {
    opacity: 0;
  }

  .card__image__img {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-image: url('/spinner.svg');
  }

  .card__title {
    height: 20%;
    max-width: 180px;
    color: #696969;
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .card__time {
    max-width: 180px;
  }

  .card__text {
    max-width: 180px;
    flex: 1 1 auto;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    height: 100px;
    overflow: hidden;
  }
`;
