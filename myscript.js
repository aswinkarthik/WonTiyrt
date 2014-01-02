$(function(){
  function reverse(s) {
    return s.split('').reverse().join(''); 
  }
  function reverseWord(s){
    return s.split(' ').reverse().join(' ');
  }
  $('#str').keyup(function(){
  $('#result').val(reverse($('#str').val()));
      $('#result').val(reverseWord($('#result').val()));

  });
  
});
