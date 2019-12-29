class SwalUtility {
    static Success() {
        Swal.fire({
            type: 'success',
            title: 'Əməliyyat yerinə yetirildi',
            showConfirmButton: false,
            timer: 1000
        });
    }
    static Success(res) {
        window.swal({
            type: 'success',
            title: res,
            showConfirmButton: false,
            timer: 1000
        });
    }

    static Fail() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        });
    }

    static Fail(text) {
        window.swal({
            type: 'error',
            title: text,
            button: false
            //timer: 2000
        });
    }
}