import Image from 'next/image';
import { FC } from 'react';
import { ICommunityWidget } from '@/widgets/CommunityWidget/types';
import styles from './CommunityWidget.module.css';
import token from '@/public/main-token.svg';
import { useBoundStore } from '@/store';
import arrow from '@/public/icons/arrow-right.svg';

export const CommunityWidget: FC<ICommunityWidget> = ({
  imageSrc,
  imageAlt,
}) => {
  const { currentBalance } = useBoundStore((state) => state);
  return (
    <div className={styles.communityWidget}>
      <Image src={imageSrc} alt={imageAlt ?? ''} width={48} />
      <div className={styles.infoWrapper}>
        <p className="tracking-[0.03em] text-[13px] font-bold">
          ASTRO COMMUNITY
        </p>
        <div className={styles.tokenWrapper}>
          <p className={styles.sum}>{currentBalance.toLocaleString()}</p>
          <Image className={styles.coin} src={token} alt={'main token'} />
        </div>
      </div>
      <Image src={arrow} alt="" />
    </div>
  );
};
