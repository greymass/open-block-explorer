import { RpcEndpoint } from 'universal-authenticator-library';
import { PriceChartData } from 'src/types/PriceChartData';
import { Theme } from 'src/types/Theme';
import { Token } from 'src/types/Actions';

export interface Chain {
  getName(): string;
  getSystemToken(): Token;
  getDisplay(): string;
  getSmallLogoPath(): string;
  getLargeLogoPath(): string;
  getChainId(): string;
  getRPCEndpoint(): RpcEndpoint;
  getFuelRPCEndpoint(): RpcEndpoint | null;
  getHyperionEndpoint(): string;
  getApiEndpoint(): string;
  getS3ProducerBucket(): string;
  getPriceData(): Promise<PriceChartData>;
  getUsdPrice(): Promise<number>;
  getMapDisplay(): boolean;
  getTheme(): Theme;
  getFiltersSupported(prop: string): boolean;
  isTestnet(): boolean;
}
