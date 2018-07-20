/**
 * Created by Imteyaz on 4/29/2017.
 *
 *
 */
  var newAngularHomePage = function(){

      var frameWork = element(by.xpath('//img[@class="hero-logo"]/following-sibling::h1'));


this.getFrameworkText = function(){
    return frameWork.getText();


};

};

  module.exports = new newAngularHomePage();