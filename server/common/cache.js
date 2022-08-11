import NodeCache from 'node-cache';
class CacheProvider {
    cache;
    constructor() {
        this.cache = new NodeCache();
    }
    set(key, value, ttl) {
        return this.cache.set(key, value, ttl);
    }

    get(key) {
        return this.cache.get(key);
    }
    getTtl(key) {
        return this.cache.getTtl(key);
    }
}

export const cacheProvider = new CacheProvider();