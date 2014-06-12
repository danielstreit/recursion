var htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];

describe('getElementsByClassName', function(){

  it('should match the results of calling the built-in function', function(){
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      // We cannot use '===' because arrays are stored by reference unlike primitive
      // data types (bool, num, string) that are stored by value. === would check if
      // the reference of both arrays were the same. They are not. The arrays were created
      // seperately and are completely different instances of arrays. They are held in 
      // different spots in memory. The different references point to these different
      // spots in memory. The underscore library provides a utility to test for "deep" 
      // equality of arrays (or objects). This means that two arrays contain the same values
      // even if they are different instances of those values.
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
