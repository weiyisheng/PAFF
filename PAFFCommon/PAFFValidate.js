/*
*
* @providesModule PAFFValidate
*/

class PAFFValidate {
 /*
 * 验证正数，不包括0
 */
 static validateIdentityCard(num){

   var reg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
   if(reg.test(num)) return true;
   return false ;
 }
}

module.exports = PAFFValidate;
