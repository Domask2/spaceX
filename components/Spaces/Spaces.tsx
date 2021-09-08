import { Wrapper } from './Spaces.style';
import Image from 'next/image';

const Spaces = ({ spaces }: { spaces: any }) => {
  return (
    <Wrapper className="spaces">
      <div className="cards">
        {spaces.map((space: any) => {
          return (
            <div className="cards__item" key={space.id}>
              <div className="card">
                <div className="card__image">
                  <div className="card__image__img">
                    <Image
                      className="card__image__img"
                      src={space.links.patch.small ? space.links.patch.small : '/img/404.png'}
                      alt="image"
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
                <div className="card__content">
                  <div className="card__title">{space.name}</div>
                  <div className="card__time">{space.date_utc}</div>
                  <p className="card__success">
                    Статус:{' '}
                    {space.success ? (
                      <span style={{ color: 'green' }}>Success</span>
                    ) : (
                      <span style={{ color: 'red' }}>Unsuccess</span>
                    )}
                  </p>
                  <p className="card__text">
                    {space.details || 'Flight details are missing, but you hold on'}{' '}
                  </p>
                  {/* <button className="btn btn--block card__btn">...more details</button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Spaces;
