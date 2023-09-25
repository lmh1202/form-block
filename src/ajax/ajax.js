document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input[name="rate"]');
    let rating
    inputs.forEach((input, index) => {
        input.addEventListener('click', function () {
            rating = input.value;
        })
    })

    const submitBtn = document.querySelector('button[id="form-block-submit-btn"]')
    submitBtn.addEventListener('click', function () {
        const comment = document.getElementById('form-block-textarea').value

        const urlParams = new URLSearchParams(window.location.search);
        const postID = urlParams.get('p');

        const formdata = new FormData();

        formdata.append("action", "form_block_action");
        formdata.append("form_block_comment", comment);
        formdata.append("form_block_rating", rating)
        formdata.append("postID", postID)

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        if (!comment) {
            alert("Please input comment!")
            return
        } else {
            fetch("https://yaysnippet.test/wp-admin/admin-ajax.php", requestOptions)
                .then(response => alert('Add comment successfully'))
                .then(result => location.reload())
                .catch(error => console.log('error', error));
        }
    })
})




