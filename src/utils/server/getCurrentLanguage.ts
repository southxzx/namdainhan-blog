import { NextPageContext } from 'next';
import { lang } from '@Models/common';

export const getCurrentLanguage = (ctx: NextPageContext) => {
  console.log("🚀 ~ file: getCurrentLanguage.ts ~ line 5 ~ getCurrentLanguage ~ ctx", ctx.req.url)
  if (ctx.query?.lang){
    return (ctx.query.lang as string).toUpperCase() as lang;
  }
  /**
   * request in server
   */
  if (ctx.req?.url){
    
  }

} 
