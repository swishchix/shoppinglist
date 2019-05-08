// lets create the wrapper function that waits for the DOM to load
$(document).ready(function() {
  
  // add an event listener that listens for a click on the id #add
  $('#add').click(function() {
    
    // grab the user input
    var userInput = $('input[name=shoppinglistitem]').val();
    
    // test to make sure we are getting the correct user input
    console.log(userInput);
    
    // add user input to the DOM as a list item
    $('.list').append('<li>' + '<input class="checked-item" type="checkbox">' + userInput + '</li>');
    return false;
    });
    
    // keep track of the user toggling each item and creating the event listener
    $(document).on('click', '.checked-item', function() {
      // capture the current list item user is clicking on
      $(this).parent().toggleClass('it-is-checked');
    });
    
    // add an event listener to the check button
    $('.checked').on('click', function(e) {
      
      // prevent the default action on the event
      e.preventDefault();
      
      // remove the checked items
      $('.it-is-checked').remove();
    });
    
    // add an event listener to the reset button (HAVE CLASS DO THIS ONE ON THIER OWN)
    $('.reset-list').on('click', function(e) {
      
      // prevent the default action on the event
      e.preventDefault();
      
      // remove all items in the shopping cart
      $('li').remove();
    })
})