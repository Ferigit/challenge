// handles dynamic import success and failure

import { ComponentType } from 'react';

const componentLoader = async (importFn: () => Promise<{ default: ComponentType<any> }>) => {
  let attempts = 0;
  return new Promise<{ default: ComponentType<any> }>(async (resolve, reject) => {
    try {
      const result = await importFn();
      attempts = 0;
      resolve(result);
    } catch (err) {
      attempts += 1;
      setTimeout(() => {
        if (attempts === 2) {
          reject(err);
          return;
        }

        componentLoader(importFn);
      }, attempts * 1500);
    }
  });
};

export default componentLoader;
