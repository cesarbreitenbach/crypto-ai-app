  export interface Insight {
    overview:            Overview;
    technicalIndicators: TechnicalIndicators;
    scenarios:           Scenarios;
    signals:             Signals;
    conclusion:          string;
}

export interface Overview {
    price:     string;
    marketCap: string;
    volume24h: string;
    change1h:  string;
    change24h: string;
    change7d:  string;
    high24h:   string;
    low24h:    string;
}

export interface Scenarios {
    bullish: string;
    bearish: string;
}

export interface Signals {
    volumeCondition:     string;
    candlestickPatterns: string;
}

export interface TechnicalIndicators {
    support:    string[];
    resistance: string[];
    ma50:       string;
    ma200:      string;
    rsi:        string;
    macd:       string;
}