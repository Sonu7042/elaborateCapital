import React from 'react';

const StockTicker: React.FC = () => {
    return (
        <div className="w-full bg-white border-b border-gray-100 overflow-hidden flex items-center h-[36px]">
            <iframe
                style={{ boxSizing: 'border-box', height: '36px', width: '100%' }}
                src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=in#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ASENSEX%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AFEDERALBNK%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ABANKBARODA%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ATATAMTRDVR%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3APAYTM%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ANIFTYBEES%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AIRCTC%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ASBIN%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3ATATAPOWER%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22BSE%3AHDFC%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22bestmate.in%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
                frameBorder="0"
                scrolling="no"
                title="Stock Ticker Tape"
            ></iframe>
        </div>
    );
};

export default StockTicker;
