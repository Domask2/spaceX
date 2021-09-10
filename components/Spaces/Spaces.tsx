import React from 'react';
import Image from 'next/image';
import { Wrapper } from './Spaces.style';
import { toLocalDateTime } from './../../Utils/index';
import { PropsSpaces, ISpaces } from '../../type/index';

const Spaces: React.FC<PropsSpaces> = ({ spaces }) => {
  return (
    <Wrapper className="spaces">
      <div className="cards">
        {spaces &&
          spaces.map((space: ISpaces, index: number) => {
            return (
              <div className="cards__item" key={index}>
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
                    <div className="card__time">{toLocalDateTime(space.date_utc)}</div>
                    <p className="card__success">
                      Status:{' '}
                      {space.success ? (
                        <span style={{ color: 'green' }}>Success</span>
                      ) : (
                        <span style={{ color: 'red' }}>Unsuccess</span>
                      )}
                    </p>
                    <p className="card__text">
                      {space.details || 'Flight details are missing, but you hold on'}{' '}
                    </p>
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
