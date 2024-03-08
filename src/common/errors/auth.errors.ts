export enum OTP_ERRORS {
    TRANSPORT_ERROR = "TRANSPORT_ERROR",
    INVALID_EMPID_PIN_MOBILE_COMB_ERROR = "INVALID_EMPID_PIN_MOBILE_COMB_ERROR",
    INVALID_PAYLOAD_ERROR = "INVALID_PAYLOAD_ERROR",
    OTP_REQUEST_ERROR = "OTP_REQUEST_ERROR"
} 


export enum TOKEN_ISSUE_ERRORS {
    INVALID_PAYLOAD_ERROR = "INVALID_PAYLOAD_ERROR",
    INVALID_PIN_ERROR = "INVALID_PIN_ERROR",
    OTP_EXPIRED_ERROR = "OTP_EXPIRED_ERROR"
}

export enum TOKEN_VERIFY_ERRORS {
    INVALID_TOKEN_ERROR = "INVALID_TOKEN",
    MISSING_TOKEN_ERROR= "MISSING_TOKEN_ERROR"
}