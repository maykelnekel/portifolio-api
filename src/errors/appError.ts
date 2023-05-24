class AppError extends Error {
    status: number
    constructor(status = 400, message: string) {
        super()
        this.status = status
        this.message = message
    }
}

export default AppError