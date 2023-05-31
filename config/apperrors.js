module.exports.apperrors = {
    general: {
        unknown_error: {
            code: 5100,
            message: "An error occurred, please refresh and try again"
        },
        invalid_parameters: {
            code: 5101,
            message: "Invalid parameters"
        },
        forbidden_error: {
            code: 5102,
            message: "Invalid app token"
        }
    },
    user: {
        phone_number_already_exist: {
            code: 5200,
            message: "Account with this Phone Number already exists"
        },
        invalid_login_credentials: {
            code: 5201,
            message: "Invalid Credentials"
        },
        invalid_password: {
            code: 5202,
            message: "Invalid Password"
        },
    }
}