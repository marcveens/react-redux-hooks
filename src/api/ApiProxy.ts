import { ServerApiProxy } from './ServerApiProxy';

export type ApiProxyType = ServerApiProxy;

export const ApiProxy = (): ApiProxyType => {    
    return new ServerApiProxy();
};