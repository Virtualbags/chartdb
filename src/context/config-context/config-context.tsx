import { createContext } from 'react';
import { emptyFn } from '@/lib/utils';
import { ChartDBConfig } from '@/lib/domain/config';

export interface ConfigContext {
    config?: ChartDBConfig;
    updateConfig: (config: Partial<ChartDBConfig>) => Promise<void>;
}

export const ConfigContext = createContext<ConfigContext>({
    config: undefined,
    updateConfig: emptyFn,
});
