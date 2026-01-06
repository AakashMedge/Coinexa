import { fetcher } from '@/lib/coingecko.actions';
import Image from 'next/image';
import React from 'react';
import { CoinOverviewFallback } from '@/components/fallback';

const CoinOverview = async () => {
  let coin: CoinDetailsData | null = null;
  try {
    coin = await fetcher<CoinDetailsData>('/coins/bitcoin');
  } catch (error) {
    // Optionally log error or report telemetry here
    console.error('CoinOverview fetch error:', error);
    return <CoinOverviewFallback />;
  }
  if (!coin) return <CoinOverviewFallback />;
  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
        <div className="info">
          <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
          <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinOverview;
