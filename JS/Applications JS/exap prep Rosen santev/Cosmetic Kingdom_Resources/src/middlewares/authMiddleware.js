import * as authServices from "../services/auth.js";

export function authMiddleware(ctx, next) {

    ctx.authData = authServices.getAuthData();
    next();
}