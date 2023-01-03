import { Logger } from '@nestjs/common';

const logger = new Logger('Util');
export const getDomainFromUrl = (url: string) => {
  try {
    return url.split('//')[1].split('/')[0];
  } catch (e) {
    logger.error(`Cannot Parse URL: ${url}`);
    throw e;
  }
};
