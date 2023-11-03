/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() 
{
    var fm = document.querySelector('.newsletter button');
    const eml = document.getElementById('email');
    var mess = document.querySelector('.message');

    fm.addEventListener('click', function(event) 
    {
        event.preventDefault();


        if (eml.value === '') 
        {
            mess.textContent = 'Please enter a valid email address.';
        } 
        else 
        {
            mess.textContent = `Thank you! Your email address ${eml.value} has been added to our mailing list!`;
        }
    });
});
