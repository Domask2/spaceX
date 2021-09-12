import React, { useState } from 'react';
import Image from 'next/image';
import DynamicFont from 'react-dynamic-font';
import { Wrapper } from './Spaces.style';
import { toLocalDateTime } from './../../Utils/index';
import { PropsSpaces, ISpaces } from '../../type/index';

const Spaces: React.FC<PropsSpaces> = ({ spaces }, onLoad:any ) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const onLoadCallback = (e:any) => {
    setIsReady(true);
    typeof onLoad === 'function' && onLoad(e)
  }

  return (
    <Wrapper className="spaces">
      <div className="cards">
        {spaces &&
          spaces.map((space: ISpaces, index: number) => {
            return (
              <div className="cards__item" key={index}>
                <div className="card">
                  <div className="card__image">
                      <Image
                        onLoad={onLoadCallback}
                        src={space.links.patch.small ? space.links.patch.small : '/img/404.png'}
                        alt="image"
                        height={200}
                        width={200}
                      />
                    
                  </div>
                  <div className="card__content">
                    <div className="card__title">
                    <DynamicFont content={space.name} />
                    </div>
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
