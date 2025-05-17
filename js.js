document.getElementById('menu').addEventListener('click', function(){
    this.classList.toggle('fa-times');
    document.querySelector('nav ul').classList.toggle('nav-toggle')
});
const form=document.getElementById('registrationform');
form.addEventListener('submit', function(e){
    e.preventDefault();


        //Get form input
        var name = document.getElementById('name').value.trim();
        var Email = document.getElementById('Email').value.trim();
        var Phone = document.getElementById('Phone').value.trim();
        var Message = document.getElementById('Message').value.trim();

    if (name ===''){
        showError('Please enter a username');
        return;
    }
    if (Email ===''){
        showError('plese enter a email');
        return;
    }
    if (Phone ===''){
        showError('plese enter a phone nomber');
        return;
    }

    swal.fire({
        icon: 'success',
        title: 'success',
        Text: 'Form submitted successully',
    })


    function showError(message){
        Swal.fire({
            icon:'error',
            title:'error',
            text: message,
        })
    }
})